// import $ from 'jquery';
import GCVariable_EditEx from '../GeneCode/GCVariable_EditEx';

import { QryRegionFlds_Edit } from '@/viewsBase/RegionManage/QryRegionFlds_Edit';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';

import {
  QryRegionFlds_AddNewRecordAsync,
  QryRegionFlds_CheckProperty4Update,
  QryRegionFlds_CheckPropertyNew,
  QryRegionFlds_GetObjBymIdAsync,
  QryRegionFlds_ReFreshCache,
  QryRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';

import { QryRegionFldsEx_CheckRegionFldsUp } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  FocusSelectByIdInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  QryRegionFlds_DeleteKeyIdCache,
  refQryRegionFlds_Edit,
  RegionId_Static,
} from '@/views/RegionManage/QryRegionFldsVueShare';

import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { viewId_Main } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';

/** QryRegionFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class QryRegionFlds_EditEx extends QryRegionFlds_Edit implements IShowList {
  public static objCMProjects: clsCMProjectEN;

  // public static pobjPubFun4Ddl: clsPubFun4Ddl;
  // public get objPubFun4Ddl(): clsPubFun4Ddl {
  //   if (QryRegionFlds_EditEx.pobjPubFun4Ddl == null) {
  //     QryRegionFlds_EditEx.pobjPubFun4Ddl = new clsPubFun4Ddl('QryRegion', divVarSet.refDivEdit);
  //   }
  //   return QryRegionFlds_EditEx.pobjPubFun4Ddl;
  // }
  public static divEdit_AddVar = 'divEdit_AddVar';
  public static strVarTypeId4CurrAdd = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    //const thisCtrl = event;
    //const btnSourse: HTMLButtonElement = <HTMLButtonElement>thisCtrl?.srcElement;
    //const elemName = btnSourse.id;
    const objPage: QryRegionFlds_EditEx = <QryRegionFlds_EditEx>(
      QryRegionFlds_Edit.GetPageEditObj('QryRegionFlds_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'AddVar': //提交
        QryRegionFlds_EditEx.strVarTypeId4CurrAdd = strKeyId;
        objPage.btnAddVar_Click(strKeyId);
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'QryRegionFlds_EditEx.btn_Click');

        break;
    }
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_QryRegionFlds]！');
    //this.BindGv_QryRegionFlds();
  }
  async BindGvCache(strType: string, strPara: string) {
    // const strVarId = strPara;
    let strId_VarTypeIdCond = '';
    switch (QryRegionFlds_EditEx.strVarTypeId4CurrAdd) {
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
    await refQryRegionFlds_Edit.value.objPubFun4Ddl.ddlVarTypeIdCond1_SelectedIndexChanged(
      ddlVarTypeId,
    );
    // this.objPubFun4Ddl.varIdCond1 = strVarId;
    alert(strType + strPara);
  }

  public btnAddVar_Click(strKeyId: string) {
    console.log(strKeyId);
    /*this.objThisPage = this;// new QryRegionFlds_EditEx(new null);*/
    const objPageEdit: GCVariable_EditEx = new GCVariable_EditEx('GCVariable_EditEx', this);
    //objPageEdit.divName4Edit = divVarSet.refDivEdit_AddVar;
    // objPageEdit.divName4Edit = objPageEdit.divName4Edit;
    // GCVariable_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;

    objPageEdit.btnAddNewRecord_Sim_Click();
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      if (QryRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refQryRegionFlds_Edit.value.showDialog();
      }
      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(divVarSet.refDivEdit);
        this.opType = 'Add';

        this.bolIsLoadEditRegion = true; //
        this.btnSubmitQryRegionFlds = '确认添加';
        //this.btnCancel_QryRegionFlds = "取消添加";
        await this.AddNewRecord();
        // if (QryRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_QryRegionFlds('Add');
        // }
      } else {
        this.opType = 'Add';
        this.btnSubmitQryRegionFlds = '确认添加';
        //this.btnCancel_QryRegionFlds = "取消添加";
        await this.AddNewRecord();
        // if (QryRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_QryRegionFlds('Add');
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
    // await this.BindDdl4EditRegionInDiv();
    ////          ShowDialog_QryRegionFlds('Update');
    //          this.btnSubmitQryRegionFlds = "确认修改";
    //          this.bolIsLoadEditRegion = true;  //
    //          const lngKeyId = Number(strKeyId);
    //          this.UpdateRecord(lngKeyId);
    //      }
    //      else {
    this.btnSubmitQryRegionFlds = '确认修改';
    //            ShowDialog_QryRegionFlds('Update');
    const lngKeyId = Number(strKeyId);
    refQryRegionFlds_Edit.value.objPubFun4Ddl.divEdit = divVarSet.refDivEdit;
    await this.UpdateRecord(lngKeyId);
    //const objQryRegionFlds_Edit_Sim = new QryRegionFlds_Edit_Sim();
    //objQryRegionFlds_Edit_Sim.ddlCtlTypeId_SelectedIndexChanged();
    //objQryRegionFlds_Edit_Sim.ddlDdlItemsOptionId_SelectedIndexChanged();
    //objQryRegionFlds_Edit_Sim.ddlDsTabId_SelectedIndexChanged();

    //}
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitQryRegionFlds = '确认修改';
    //this.btnCancel_QryRegionFlds = "取消修改";
    this.keyId = lngmId;
    try {
      const objQryRegionFldsEN = await QryRegionFlds_GetObjBymIdAsync(lngmId);
      if (objQryRegionFldsEN == null) return false;

      // await this.GetDataFromQryRegionFldsClass(objQryRegionFldsEN);
      await refQryRegionFlds_Edit.value.ShowDataFromQryRegionFldsObj(objQryRegionFldsEN);
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
   * 控件类型号 (Used In Clear())
   **/
  public set varTypeIdCond1Bak(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlVarTypeIdCond1');
    const strId = 'ddlVarTypeIdCond1';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 控件类型号 (Used In PutDataToClass())
   **/
  public get varTypeIdCond1Bak(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlVarTypeIdCond1');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 控件类型号 (Used In Clear())
   **/
  public set varTypeIdCond2(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlVarTypeIdCond2');
    const strId = 'ddlVarTypeIdCond2';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 控件类型号 (Used In PutDataToClass())
   **/
  public get varTypeIdCond2(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlVarTypeIdCond2');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();

    const objQryRegionFldsEN = await refQryRegionFlds_Edit.value.GetEditDataQryRegionFldsObj();
    objQryRegionFldsEN.SetmId(Number(this.keyId));
    objQryRegionFldsEN.sfUpdFldSetStr = objQryRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQryRegionFldsEN.mId == 0 || objQryRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    if (objQryRegionFldsEN.fldId == null || objQryRegionFldsEN.fldId == '') {
      console.error('字段名不能为空!');
      FocusSelectByIdInDivObj(divVarSet.refDivEdit, 'ddlFldId');
      throw '字段名不能为空!';
    }

    try {
      QryRegionFlds_CheckProperty4Update(objQryRegionFldsEN);
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
      const bolIsExistCond_RegionId_FldId = await this.CheckUniCond4Update(objQryRegionFldsEN);
      if (bolIsExistCond_RegionId_FldId == false) {
        return false;
      }
      const returnBool = await QryRegionFlds_UpdateRecordAsync(objQryRegionFldsEN);

      if (returnBool == true) {
        await QryRegionFldsEx_CheckRegionFldsUp(
          objQryRegionFldsEN.regionId,
          viewId_Main.value,
          clsPrivateSessionStorage.cmPrjId,
          objQryRegionFldsEN.updUser,
        );
        QryRegionFlds_ReFreshCache(RegionId_Static.value);
        viewInfoStore.delObjByRegionId(objQryRegionFldsEN.regionId);
        viewRegionStore.delObj(objQryRegionFldsEN.regionId);
        QryRegionFlds_DeleteKeyIdCache(objQryRegionFldsEN.regionId, this.keyId);
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

  /**
   * 设置绑定下拉框，针对字段:[varId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/
  public async SetDdl_VarIdInDiv(prjId: string) {
    await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlVarId', prjId); //
  }
  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objQryRegionFldsEN;
    try {
      objQryRegionFldsEN = await refQryRegionFlds_Edit.value.GetEditDataQryRegionFldsObj();
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
    try {
      QryRegionFlds_CheckPropertyNew(objQryRegionFldsEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objQryRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await QryRegionFlds_AddNewRecordAsync(objQryRegionFldsEN);
      if (returnBool == true) {
        QryRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = Format('添加记录成功!');
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }
}
