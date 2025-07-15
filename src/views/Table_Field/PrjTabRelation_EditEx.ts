import { PrjTabRelation_Edit } from '@/viewsBase/Table_Field/PrjTabRelation_Edit';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet } from '@/views/Table_Field/PrjTabRelationTypeVueShare';
import { refPrjTabRelation_Edit } from '@/views/Table_Field/PrjTabRelationVueShare';
/* PrjTabRelation_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTabRelation_EditEx extends PrjTabRelation_Edit {
  public static TabIdStatic = '';
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = PrjTabRelation_Edit.GetPageEditObj('PrjTabRelation_EditEx');
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
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabRelation_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    // const strThisFuncName = this.ddlTabId_SelectedIndexChanged.name;
    //alert('请在扩展层:PrjTabRelation_EditEx中重写该函数！');
    const strTabId = refPrjTabRelation_Edit.value.tabId;

    if (IsNullOrEmpty(strTabId) == true) return;
    // await this.SetDdl_FldId4TabIdInDiv(strTabId, clsPrivateSessionStorage.currSelPrjId);
  }
  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlRelationTabId_SelectedIndexChanged() {
    // const strThisFuncName = this.ddlRelationTabId_SelectedIndexChanged.name;
    //alert('请在扩展层:PrjTabRelation_EditEx中重写该函数！');
    const strRelationTabId = refPrjTabRelation_Edit.value.relationTabId;

    if (IsNullOrEmpty(strRelationTabId) == true) return;
    // await this.SetDdl_FldId4RelaTabIdInDiv(strRelationTabId);
  }
  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlForeignKeyTabId_SelectedIndexChanged() {
    // const strThisFuncName = this.ddlForeignKeyTabId_SelectedIndexChanged.name;
    //alert('请在扩展层:PrjTabRelation_EditEx中重写该函数！');
    const strForeignKeyTabId = refPrjTabRelation_Edit.value.foreignKeyTabId;
    if (IsNullOrEmpty(strForeignKeyTabId) == true) return;
    //await this.SetDdl_FldId4SetDdl_ForeignKeyTabIdInDiv(clsPrivateSessionStorage.currSelPrjId, strForeignKeyTabId);
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    await this.SetDdl_TabIdInDivEx(clsPrivateSessionStorage.currSelPrjId); //编辑区域

    await this.SetDdl_RelationTabIdInDivEx(clsPrivateSessionStorage.cmPrjId); //编辑区域
  }

  /**
   * 设置绑定下拉框，针对字段:[TabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_TabIdInDivEx(CmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(divVarSet.refDivEdit, 'ddlTabId', CmPrjId); //
  }

  public async SetDdl_RelationTabIdInDivEx(CmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlRelationTabId',
      CmPrjId,
    ); //
  }
}
