import GCVariable_EditEx from '../GeneCode/GCVariable_EditEx';

import { EditRegionFlds_Edit } from '@/viewsBase/RegionManage/EditRegionFlds_Edit';
import { clsPubFun4Ddl } from '@/ts/FunClass/clsPubFun4Ddl';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';

import {
  EditRegionFlds_CheckProperty4Update,
  EditRegionFlds_GetObjBymIdAsync,
  EditRegionFlds_ReFreshCache,
  EditRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';

import { EditRegionFldsEx_CheckRegionFldsUp } from '@/ts/L3ForWApiEx/RegionManage/clsEditRegionFldsExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetSelectObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  EditRegionFlds_DeleteKeyIdCache,
  refEditRegionFlds_Edit,
  RegionId_Static,
} from '@/views/RegionManage/EditRegionFldsVueShare';

import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { viewId_Main } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';

/* EditRegionFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class EditRegionFlds_EditEx extends EditRegionFlds_Edit implements IShowList {
  //public objPage: EditRegionFlds_EditEx;//=; new EditRegionFlds_EditEx(this);
  // public static strTabId4Region = '';
  public static pobjPubFun4Ddl: clsPubFun4Ddl;

  public get objPubFun4Ddl(): clsPubFun4Ddl {
    if (EditRegionFlds_EditEx.pobjPubFun4Ddl == null) {
      EditRegionFlds_EditEx.pobjPubFun4Ddl = new clsPubFun4Ddl('EditRegion', divVarSet.refDivEdit);
    }
    return EditRegionFlds_EditEx.pobjPubFun4Ddl;
  }

  public static divEdit_Addconst = 'divEdit_Addconst';
  public static strVarTypeId4CurrAdd = '';

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_EditRegionFlds]！');
    //this.BindGv_EditRegionFlds();
  }
  async BindGvCache(strType: string, strPara: string) {
    //switch (strType) {

    const strVarId = strPara;
    let strId_VarTypeIdCond = '';
    switch (EditRegionFlds_EditEx.strVarTypeId4CurrAdd) {
      case 'Cond1':
        strId_VarTypeIdCond = 'ddlVarTypeIdCond1';
        break;
      case 'Cond2':
        strId_VarTypeIdCond = 'ddlVarTypeIdCond2';
        break;
      default:
        break;
    }
    const ddlVarTypeId = GetSelectObjInDivObj(divVarSet.refDivEdit, strId_VarTypeIdCond);
    await this.objPubFun4Ddl.ddlVarTypeIdCond1_SelectedIndexChanged(ddlVarTypeId);
    refEditRegionFlds_Edit.value.varIdCond1 = strVarId;
    alert(strType + strPara);
  }

  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   **/

  public btnAddconst_Click(strKeyId: string) {
    console.log(strKeyId);
    //this.objPage = this;// new QryRegionFlds_EditEx(new null);
    const objPageEdit: GCVariable_EditEx = new GCVariable_EditEx('GCVariable_EditEx', this);
    //objPageEdit.divName4Edit = divVarSet.refDivEdit_Addconst;
    // objPageEdit.divName4Edit = objPageEdit.divName4Edit;
    // GCVariable_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    // const strVarTypeId = this.objPubFun4Ddl.varTypeIdCond1;
    objPageEdit.btnAddNewRecord_Sim_Click();
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage: EditRegionFlds_EditEx = <EditRegionFlds_EditEx>(
      EditRegionFlds_Edit.GetPageEditObj('EditRegionFlds_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Addconst': //提交
        EditRegionFlds_EditEx.strVarTypeId4CurrAdd = strKeyId;
        objPage.btnAddconst_Click(strKeyId);
        break;
      case 'Submit': //提交
        // objPage.divEdit = refEditRegionFlds_Edit.value.refDivEdit;
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'EditRegionFlds_EditEx.btn_Click');

        break;
    }
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: number) {
    this.opType = 'Update';
    if (strKeyId == 0) {
      alert('请选择需要修改的记录！');
      return;
    }
    //      if (this.bolIsLoadEditRegion == false)  //
    //      {
    //          console.log("bolIsLoadEditRegion = ", this.bolIsLoadEditRegion);
    //          await this.AddDPV_Edit(divVarSet.refDivEdit);
    //          // 为编辑区绑定下拉框
    //          await this.BindDdl4EditRegion();
    ////          ShowDialog_EditRegionFlds('Update');
    //          this.btnSubmit_EditRegionFlds = "确认修改";
    //          this.bolIsLoadEditRegion = true;  //
    //          const lngKeyId = Number(strKeyId);
    //          this.UpdateRecord(lngKeyId);
    //      }
    //      else {
    this.btnSubmitEditRegionFlds = '确认修改';
    //this.ShowDialog_EditRegionFlds('Update');

    const lngKeyId = Number(strKeyId);
    await this.UpdateRecord(lngKeyId);
    //const objEditRegionFlds_Edit_Sim = new EditRegionFlds_Edit_Sim();
    //objEditRegionFlds_Edit_Sim.ddlCtlTypeId_SelectedIndexChanged();
    //objEditRegionFlds_Edit_Sim.ddlDdlItemsOptionId_SelectedIndexChanged();
    //objEditRegionFlds_Edit_Sim.ddlDsTabId_SelectedIndexChanged();

    //}
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitEditRegionFlds = '确认修改';
    //this.btnCancel_EditRegionFlds = "取消修改";
    this.keyId = lngmId;
    try {
      const objEditRegionFldsEN = await EditRegionFlds_GetObjBymIdAsync(lngmId);
      if (objEditRegionFldsEN == null) return false;

      // await this.GetDataFromEditRegionFldsClass(objEditRegionFldsEN);
      await refEditRegionFlds_Edit.value.ShowDataFromEditRegionFldsObj(objEditRegionFldsEN);
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

  /* 修改记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  //public async btnUpdateRecord_Click() {
  //    this.opType = "Update";
  //    const strKeyId = GetFirstCheckedKeyIdInDivObj();
  //    if (strKeyId == "") {
  //        alert("请选择需要修改的记录！");
  //        return;
  //    }
  //    if (this.bolIsLoadEditRegion == false)  //
  //    {
  //        await this.AddDPV_Edit(divVarSet.refDivEdit);
  //        // 为编辑区绑定下拉框
  //        await this.BindDdl4EditRegion();
  //        ShowDialog_EditRegionFlds('Update');
  //        this.bolIsLoadEditRegion = true;  //
  //        const lngKeyId = Number(strKeyId);
  //        await this.UpdateRecord(lngKeyId);
  //    }
  //    else {
  //        ShowDialog_EditRegionFlds('Update');
  //        const lngKeyId = Number(strKeyId);
  //        await this.UpdateRecord(lngKeyId);
  //    }
  //    //const objEditRegionFlds_Edit_Sim = new EditRegionFlds_Edit_Sim();
  //    //this.ddlCtlTypeId_SelectedIndexChanged();
  //    //this.ddlDdlItemsOptionId_SelectedIndexChanged();
  //    //this.ddlDsTabId_SelectedIndexChanged();

  //}

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    alert('请在扩展层:EditRegionFlds_EditEx中重写该函数！');
  }
  public async ddlFldId_SelectedIndexChanged() {
    alert('请在扩展层:EditRegionFlds_EditEx中重写该函数！');
  }

  public async SetDdl_DsDataValueFieldIdInDiv(strTabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsDataValueFieldId',
      strTabId,
    ); //编辑区域
  }

  public async SetDdl_DsTabId(strCmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsTabId',
      strCmPrjId,
    ); //编辑区域
    //        clsPrjTabBLEx.BindDdl_TabIdExCache(ddlDsTabId, strPrjId);
    //			BindDdl_DsTabId(ddlDsTabId);
  }

  /* 函数功能:系统生成的Change事件函数
(AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/

  //public async ddlDdlItemsOptionId_SelectedIndexChanged() {
  //    if (this.ddlItemsOptionId == "" || this.ddlItemsOptionId == "0") return;
  //    const strDdlItemsOptionId=  this.ddlItemsOptionId;
  //    HideTrInDivObj(divVarSet.refDivEdit, 'trDsTabId');
  //    HideTrInDivObj(divVarSet.refDivEdit, 'trDsCondStr');
  //    HideTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
  //    HideTrInDivObj(divVarSet.refDivEdit, 'trItemsString');
  //    switch (strDdlItemsOptionId) {
  //        case enumDDLItemsOption.DataSourceTable_02:
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsTabId');
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsDataTextFieldId');
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsDataValueFieldId');
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsCondFieldId');
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsSortFieldId');
  //            const conDsTabId = await this.SetDdl_DsTabId(clsPrivateSessionStorage.currSelPrjId);
  //            break;
  //        case enumDDLItemsOption.ListItemString_01:
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trItemsString');
  //            break;
  //        case enumDDLItemsOption.SQLString_03:
  //            ShowTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
  //            break;
  //        case enumDDLItemsOption.TrueAndFalseList_04:
  //            //trDsSqlStr').show();
  //            break;
  //    }
  //}
  /**
   * 设置绑定下拉框，针对字段:[VarId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_VarIdInDiv(strPrjId: string) {
    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空!(In .SetDdl_VarIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(.SetDdl_VarIdInDiv)',
        strPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlVarId', strPrjId); //
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refEditRegionFlds_Edit.value.showDialog();
      }
      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(divVarSet.refDivEdit);
        this.opType = 'Add';

        this.bolIsLoadEditRegion = true; //
        this.btnSubmitEditRegionFlds = '确认添加';
        //this.btnCancel_EditRegionFlds = "取消添加";
        this.AddNewRecord();
        // if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_EditRegionFlds('Add');
        // }
      } else {
        this.opType = 'Add';
        this.btnSubmitEditRegionFlds = '确认添加';
        //this.btnCancel_EditRegionFlds = "取消添加";
        await this.AddNewRecord();
        // if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_EditRegionFlds('Add');
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

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    const objEditRegionFldsEN = await refEditRegionFlds_Edit.value.GetEditDataEditRegionFldsObj();
    objEditRegionFldsEN.SetmId(Number(this.keyId));
    objEditRegionFldsEN.sfUpdFldSetStr = objEditRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objEditRegionFldsEN.mId == 0 || objEditRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    objEditRegionFldsEN.sfUpdFldSetStr = objEditRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objEditRegionFldsEN.mId == 0 || objEditRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      EditRegionFlds_CheckProperty4Update(objEditRegionFldsEN);
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
      const bolIsExistCond_RegionId_FldId = await this.CheckUniCond4Update(objEditRegionFldsEN);
      if (bolIsExistCond_RegionId_FldId == false) {
        return false;
      }
      const returnBool = await EditRegionFlds_UpdateRecordAsync(objEditRegionFldsEN);
      if (returnBool == true) {
        await EditRegionFldsEx_CheckRegionFldsUp(
          objEditRegionFldsEN.regionId,
          viewId_Main.value,
          clsPrivateSessionStorage.cmPrjId,
          objEditRegionFldsEN.updUser,
        );
        viewInfoStore.delObjByRegionId(objEditRegionFldsEN.regionId);
        viewRegionStore.delObj(objEditRegionFldsEN.regionId);
        EditRegionFlds_ReFreshCache(RegionId_Static.value);
        EditRegionFlds_DeleteKeyIdCache(objEditRegionFldsEN.regionId, this.keyId);
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

  // const rowElement = objDiv.querySelector(`#${strTr}`);
  // if (rowElement) {
  //   // 显示表行
  //   rowElement.style.display = 'table-row';
  // } else {
  //   // 表行不存在
  //   console.log('表行不存在');
  // }
}
