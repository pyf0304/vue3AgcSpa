import { GCVariablePrjIdRela_Edit } from '@/viewsBase/GeneCode/GCVariablePrjIdRela_Edit';
import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
import {
  GCVariablePrjIdRela_AddNewRecordAsync,
  GCVariablePrjIdRela_CheckPropertyNew,
  GCVariablePrjIdRela_IsExistAsync,
  GCVariablePrjIdRela_ReFreshCache,
  GCVariablePrjIdRela_SplitKeyLst,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
import { GCVariable_ReFreshCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { GCVariableEx_BindDdl_VarIdExcludeCurrPrjIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import { refGCVariablePrjIdRela_Edit } from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
/* GCVariablePrjIdRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class GCVariablePrjIdRela_EditEx extends GCVariablePrjIdRela_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = GCVariablePrjIdRela_Edit.GetPageEditObj('GCVariablePrjIdRela_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let objKeyLst;
    const strKeyLst = strKeyId;

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
      case 'UpdateRecordInTab': //修改记录InTab
        // strKeyLst = GetFirstCheckedKeyLstInDiv(objPage.divName4List);
        objKeyLst = GCVariablePrjIdRela_SplitKeyLst(strKeyLst);
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(objKeyLst.varId, objKeyLst.prjId);
        } else {
          objPage.btnUpdateRecord_Click(objKeyLst.varId, objKeyLst.prjId);
        }
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'GCVariablePrjIdRela_EditEx.btn_Click');

        break;
    }
  }

  public async SetDdl_VarIdInDiv() {
    await GCVariableEx_BindDdl_VarIdExcludeCurrPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlVarId',
      clsPrivateSessionStorage.currSelPrjId,
    ); //
  }

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objGCVariablePrjIdRelaEN = new clsGCVariablePrjIdRelaEN();
    try {
      objGCVariablePrjIdRelaEN =
        await refGCVariablePrjIdRela_Edit.value.GetEditDataGCVariablePrjIdRelaObj();
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
      GCVariablePrjIdRela_CheckPropertyNew(objGCVariablePrjIdRelaEN);
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
      let returnBool = false;
      const bolIsExist = await GCVariablePrjIdRela_IsExistAsync(
        objGCVariablePrjIdRelaEN.varId,
        objGCVariablePrjIdRelaEN.prjId,
      );
      if (bolIsExist == true) {
        const strMsg = Format(
          '添加记录时，关键字：{0},{1}已经存在！',
          objGCVariablePrjIdRelaEN.varId,
          objGCVariablePrjIdRelaEN.prjId,
        );
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      returnBool = await GCVariablePrjIdRela_AddNewRecordAsync(objGCVariablePrjIdRelaEN);
      if (returnBool == true) {
        GCVariablePrjIdRela_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        GCVariable_ReFreshCache();
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
}
