// import $ from 'jquery';
import { clsPubFun4Ddl } from '@/ts/FunClass/clsPubFun4Ddl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  ViewFeatureFlds_AddNewRecordAsync,
  ViewFeatureFlds_CheckProperty4Update,
  ViewFeatureFlds_CheckPropertyNew,
  ViewFeatureFlds_GetFirstIDAsync,
  ViewFeatureFlds_GetObjBymIdAsync,
  ViewFeatureFlds_GetObjLstAsync,
  ViewFeatureFlds_GetUniCondStr4Update,
  ViewFeatureFlds_IsExistRecordAsync,
  ViewFeatureFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';

import {
  ViewFeatureFldsEx_CopyToEx,
  ViewFeatureFldsEx_CopyToPubComboEx,
  ViewFeatureFldsEx_EditRecordEx,
  ViewFeatureFldsEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewFeatureFldsExWApi';
import { ViewFeatureFlds_Edit } from '@/viewsBase/RegionManage/ViewFeatureFlds_Edit';
import { CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache } from '@/ts/L3ForWApiEx/PrjInterface/clsCtlTypeExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { CtlType_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { BindData } from '@/views/RegionManage/BindData';
import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { TabFeatureFldsEx_GetObjLstByTabFeatureId } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { CheckControlExistInDivObj, getTrObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { vFieldTab_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import {
  divVarSet,
  isShowViewFeatureFlds1,
  isShowViewFeatureFlds2,
  refViewFeatureFlds1_Edit,
  refViewFeatureFlds2_Edit,
} from '@/views/RegionManage/ViewFeatureFldsLstVueShare';
import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { enumQueryOption } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
import { refPubCombo_Edit } from '@/ts/components/pubComboVueShare';
import {
  refViewFeatureFlds_Edit,
  ViewFeatureId_Static,
} from '@/views/RegionManage/ViewFeatureFldsVueShare';
/* ViewFeatureFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewFeatureFlds_EditEx extends ViewFeatureFlds_Edit {
  public static arrViewFeatureFldsEx: Array<clsViewFeatureFldsENEx>;

  public static ShowLst: (
    arrObjLst: Array<clsViewFeatureFldsENEx>,
    arrBindData: BindData,
  ) => Promise<void>;
  public static getDataFromViewFeatureFlds_Coms: () => Array<clsViewFeatureFldsEN>;

  public static pobjPubFun4Ddl: clsPubFun4Ddl;

  public get objPubFun4Ddl(): clsPubFun4Ddl {
    if (ViewFeatureFlds_EditEx.pobjPubFun4Ddl == null) {
      ViewFeatureFlds_EditEx.pobjPubFun4Ddl = new clsPubFun4Ddl(
        'ViewFeature',
        divVarSet.refDivEdit,
      );
    }
    return ViewFeatureFlds_EditEx.pobjPubFun4Ddl;
  }

  public static getobjPubFun4Ddl(divEdit: HTMLDivElement): clsPubFun4Ddl {
    if (ViewFeatureFlds_EditEx.pobjPubFun4Ddl == null) {
      ViewFeatureFlds_EditEx.pobjPubFun4Ddl = new clsPubFun4Ddl('ViewFeature', divEdit);
    }
    return ViewFeatureFlds_EditEx.pobjPubFun4Ddl;
  }

  public strViewFeatureId = '';
  public strFldId = '';

  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = ViewFeatureFlds_Edit.GetPageEditObj('ViewFeatureFlds_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
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
        AccessBtnClickDefault(strCommandName, 'ViewFeatureFlds_EditEx.btn_Click');

        break;
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_ClickV2(strViewFeatureId: string, strFldTypeId: string) {
    this.opType = 'Update';
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      alert('请选择需要修改的界面功能！');
      return false;
    }
    if (IsNullOrEmpty(strFldTypeId) == true) {
      alert('请选择需要修改的界面功能中的字段类型！');
      return false;
    }
    const objViewFeatureFlds = new clsViewFeatureFldsEN();
    objViewFeatureFlds.viewFeatureId = strViewFeatureId;
    //objViewFeatureFlds.releFldId = strFldId;
    const strCondition = Format(
      "{0}='{1}' and {2}='{3}'",
      clsViewFeatureFldsEN.con_ViewFeatureId,
      strViewFeatureId,
      clsViewFeatureFldsEN.con_FieldTypeId,
      strFldTypeId,
    ); // ViewFeatureFlds_GetUniCondStr4Update(objViewFeatureFlds);
    const strMid = await ViewFeatureFlds_GetFirstIDAsync(strCondition);
    if (strMid == '0' || IsNullOrEmpty(strMid) == true) {
      //没有相关记录
      this.AddNewRecord();
    } else {
      this.keyId = Number(strMid);
      const lngMid = Number(strMid);

      await this.UpdateRecord(lngMid);
    }
    return true;
  }

  public async ExtendFldFuncMap(arrViewFeatureFldsExObjLst: Array<clsViewFeatureFldsENEx>) {
    const strThisFuncName = this.ExtendFldFuncMap.name;

    for (const objInFor of arrViewFeatureFldsExObjLst) {
      try {
        await ViewFeatureFldsEx_FuncMapByFldName(
          clsViewFeatureFldsENEx.con_FieldTypeName,
          objInFor,
        );
      } catch (e) {
        const strMsg = Format(
          '扩展字段值映射出错。字段名:[{0}].(in {1}.{2})',
          e,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    }
  }
  public async CheckRelaField(
    strViewFeatureId: string,
    strTabFeatureId: string,
    arrViewFeatureFlds: Array<clsViewFeatureFldsEN>,
  ) {
    // let objTabFeature = await TabFeature_GetObjByTabFeatureIdCache(strTabFeatureId);
    const arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
    let bolCheckOk = true;
    for (const objInFor of arrTabFeatureFlds) {
      if (objInFor.fieldTypeId === enumFieldType.KeyField_02) continue;
      if (objInFor.fieldTypeId === enumFieldType.NameField_03) continue;

      const arr = arrViewFeatureFlds.find((x) => x.fieldTypeId == objInFor.fieldTypeId);
      if (arr == null) {
        const obj = new clsViewFeatureFldsEN();
        obj.viewFeatureId = strViewFeatureId;
        obj.fieldTypeId = objInFor.fieldTypeId;
        obj.releFldId = objInFor.fldId;
        obj.prjId = clsPrivateSessionStorage.currSelPrjId;
        obj.updDate = clsDateTime.getTodayDateTimeStr(0);
        obj.updUser = clsPrivateSessionStorage.userId;
        obj.ctlTypeId = '00';
        const bolIsSuccess = await ViewFeatureFlds_AddNewRecordAsync(obj);
        if (bolIsSuccess == false) {
          const strInfo = Format('添加记录不成功!');
          console.error(strInfo);
          alert(strInfo);
        }
        bolCheckOk = false;
      }
    }
    return bolCheckOk;
    // switch (strTabFeatureId) {
    //   case enumPrjFeature.AdjustOrderNum_0142:
    //   case enumPrjFeature.AdjustOrderNum_0224:
    //   case enumPrjFeature.AdjustOrderNum_0225:
    //   case enumPrjFeature.AdjustOrderNum_1196:
    //     break;
    // }
  }
  public async btnUpdateRecord_ClickV3(
    strViewFeatureId: string,
    strTabId: string,
    strTabFeatureId: string,
  ) {
    const strThisFuncName = this.btnUpdateRecord_ClickV3.name;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    this.opType = 'Update';
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      alert('请选择需要修改的界面功能！');
      return false;
    }

    const objViewFeatureFlds = new clsViewFeatureFldsEN();
    objViewFeatureFlds.viewFeatureId = strViewFeatureId;
    //objViewFeatureFlds.releFldId = strFldId;
    const strCondition = Format(
      "{0}='{1}' ",
      clsViewFeatureFldsEN.con_ViewFeatureId,
      strViewFeatureId,
    ); // ViewFeatureFlds_GetUniCondStr4Update(objViewFeatureFlds);
    let arrViewFeatureFlds = await ViewFeatureFlds_GetObjLstAsync(strCondition);
    if (IsNullOrEmpty(strTabFeatureId) === false) {
      const bolCheckOk = await this.CheckRelaField(
        strViewFeatureId,
        strTabFeatureId,
        arrViewFeatureFlds,
      );
      if (bolCheckOk == false) {
        arrViewFeatureFlds = await ViewFeatureFlds_GetObjLstAsync(strCondition);
      }
    }
    arrViewFeatureFlds = arrViewFeatureFlds.filter((x) => x.releFldId.length > 0);
    const arrViewFeatureFldsEx = arrViewFeatureFlds.map(ViewFeatureFldsEx_CopyToEx);
    try {
      await this.ExtendFldFuncMap(arrViewFeatureFldsEx);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let arrCtlType = await CtlType_GetObjLstCache();
    if (arrCtlType == null) return;
    arrCtlType = arrCtlType.sort((x, y) => x.orderNum - y.orderNum);

    let arrvPrjTab_Sim = await vPrjTab_Sim_GetObjLstCache(strPrjId);
    if (arrvPrjTab_Sim == null) return;
    arrvPrjTab_Sim = arrvPrjTab_Sim.sort((x, y) => x.tabName.localeCompare(y.tabName));

    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);

    const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
    let arrvFieldTab_Sim: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
    arrvFieldTab_Sim = arrvFieldTab_Sim
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));

    const arrBindData: BindData = {
      ctlTypeLst: arrCtlType,
      vPrjTab_SimLst: arrvPrjTab_Sim,
      vFieldTab_SimLst: arrvFieldTab_Sim,
    };
    ViewFeatureFlds_EditEx.arrViewFeatureFldsEx = arrViewFeatureFldsEx;
    ViewFeatureFlds_EditEx.ShowLst(arrViewFeatureFldsEx, arrBindData);
    // const strMid = await ViewFeatureFlds_GetFirstIDAsync(strCondition);
    // if (strMid == '0' || IsNullOrEmpty(strMid) == true) {
    //   //没有相关记录
    //   this.AddNewRecord();
    // } else {
    //   this.keyId = strMid;
    //   const lngMid = Number(strMid);

    //   await this.UpdateRecord(lngMid);
    // }

    // setTimeout(this.SetAllEventFunc, 100);
    return true;
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjViewFeatureFldsEN.js">表实体类对象</param>
  */
  public async GetBakDataFromViewFeatureFldsClassBak20241002(
    pobjViewFeatureFldsEN: clsViewFeatureFldsEN,
  ) {
    this.objPubFun4Ddl.divEdit = divVarSet.refDivEdit;
    //this.fldId = pobjViewFeatureFldsEN.fldId;// 表字段
    //this.inUse = pobjViewFeatureFldsEN.inUse;// 在用
    refViewFeatureFlds_Edit.value.labelCaption = pobjViewFeatureFldsEN.labelCaption; // 标签标题
    //this.colSpan = pobjViewFeatureFldsEN.colSpan;// 跨列数
    //this.width = pobjViewFeatureFldsEN.width;// 宽
    //this.inOutTypeId = pobjViewFeatureFldsEN.inOutTypeId;// In/Out
    //this.seqNum = pobjViewFeatureFldsEN.seqNum;// 序号

    refViewFeatureFlds_Edit.value.ctlTypeId = pobjViewFeatureFldsEN.ctlTypeId; // 控件类型
    await this.ddlCtlTypeId_SelectedIndexChanged();

    const objPubComboEN = ViewFeatureFldsEx_CopyToPubComboEx(pobjViewFeatureFldsEN);
    if (pobjViewFeatureFldsEN.ctlTypeId == enumCtlType.DropDownList_06) {
      await refPubCombo_Edit.value.GetDataFromPubComboClass(objPubComboEN);
    }
    await this.ddlCtlTypeId_SelectedIndexChanged();

    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    // if (
    //   this.ctlTypeId == enumCtlType.DropDownList_06 ||
    //   this.ctlTypeId == enumCtlType.DropDownList_Bool_18
    // ) {
    //   //this.ddlItemsOptionId = pobjViewFeatureFldsEN.ddlItemsOptionId;// 下拉选项
    //   //await ViewFeatureFlds_EditEx.objPubFun4Ddl.ddlDdlItemsOptionId_SelectedIndexChanged();

    //   this.dsTabId = pobjViewFeatureFldsEN.dsTabId; // 数据源表
    //   await this.objPubFun4Ddl.ddlDsTabId_SelectedIndexChanged(pobjViewFeatureFldsEN.dsTabId);

    //   if (IsNullOrEmpty(pobjViewFeatureFldsEN.tabFeatureId4Ddl) == false) {
    //     this.objPubFun4Ddl.tabFeatureId4Ddl = pobjViewFeatureFldsEN.tabFeatureId4Ddl;
    //     await this.objPubFun4Ddl.ddlTabFeatureId4Ddl_SelectedIndexChanged();

    //     await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlVarIdCond1', strPrjId);

    //     await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlVarIdCond2', strPrjId);

    //     if (IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond1) == false) {
    //       this.objPubFun4Ddl.varIdCond1 = pobjViewFeatureFldsEN.varIdCond1;
    //     }
    //     if (IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond2) == false) {
    //       this.objPubFun4Ddl.varIdCond2 = pobjViewFeatureFldsEN.varIdCond2;
    //     }
    //   }

    // }
    refViewFeatureFlds_Edit.value.varId = pobjViewFeatureFldsEN.varId; // 变量Id
    refViewFeatureFlds_Edit.value.ctrlId = pobjViewFeatureFldsEN.ctrlId; // 变量Id
    refViewFeatureFlds_Edit.value.fieldTypeId = pobjViewFeatureFldsEN.fieldTypeId; // 变量Id

    //    this.clickEvent = pobjViewFeatureFldsEN.clickEvent;// Click事件
    //    this.regionId = pobjViewFeatureFldsEN.regionId;// 区域Id
    //    this.changeEvent = pobjViewFeatureFldsEN.changeEvent;// Change事件
    //    this.fldId = pobjViewFeatureFldsEN.fldId;// 字段Id
    //    this.colIndex = pobjViewFeatureFldsEN.colIndex;// 列序号
    //    this.memo = pobjViewFeatureFldsEN.memo;// 说明
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSaveV2(objViewFeatureFldsEN: clsViewFeatureFldsEN): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    //this.divName = "divUpdateRecordSave";
    //const objViewFeatureFldsEN = new clsViewFeatureFldsEN();
    objViewFeatureFldsEN.SetmId(Number(this.keyId));
    await this.PutBakDataToViewFeatureFldsClassV2Bak(objViewFeatureFldsEN);
    objViewFeatureFldsEN.sfUpdFldSetStr = objViewFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewFeatureFldsEN.mId == 0 || objViewFeatureFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ViewFeatureFlds_CheckProperty4Update(objViewFeatureFldsEN);
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
      const returnBool = await ViewFeatureFldsEx_EditRecordEx(objViewFeatureFldsEN);

      if (returnBool == true) {
        ViewFeatureFlds_ReFreshCache(objViewFeatureFldsEN.viewFeatureId);
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

  public async UpdateRecordSaveV31(strViewFeatureId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    //this.divName = "divUpdateRecordSave";
    // const objViewFeatureFldsEN = new clsViewFeatureFldsEN();
    const objViewFeatureFldsEN =
      await refViewFeatureFlds1_Edit.value.PutDataToViewFeatureFldsClassV3();
    objViewFeatureFldsEN.viewFeatureId = strViewFeatureId;
    objViewFeatureFldsEN.SetmId(Number(this.keyId));

    objViewFeatureFldsEN.sfUpdFldSetStr = objViewFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewFeatureFldsEN.mId == 0 || objViewFeatureFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ViewFeatureFlds_CheckProperty4Update(objViewFeatureFldsEN);
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
      const returnBool = await ViewFeatureFldsEx_EditRecordEx(objViewFeatureFldsEN);

      if (returnBool == true) {
        ViewFeatureFlds_ReFreshCache(objViewFeatureFldsEN.viewFeatureId);
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

  public async UpdateRecordSaveV32(strViewFeatureId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    //this.divName = "divUpdateRecordSave";
    // const objViewFeatureFldsEN = new clsViewFeatureFldsEN();
    const objViewFeatureFldsEN =
      await refViewFeatureFlds2_Edit.value.PutDataToViewFeatureFldsClassV3();
    objViewFeatureFldsEN.SetmId(Number(this.keyId));
    objViewFeatureFldsEN.viewFeatureId = strViewFeatureId;

    objViewFeatureFldsEN.sfUpdFldSetStr = objViewFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewFeatureFldsEN.mId == 0 || objViewFeatureFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ViewFeatureFlds_CheckProperty4Update(objViewFeatureFldsEN);
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
      const returnBool = await ViewFeatureFldsEx_EditRecordEx(objViewFeatureFldsEN);

      if (returnBool == true) {
        ViewFeatureFlds_ReFreshCache(objViewFeatureFldsEN.viewFeatureId);
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

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjViewFeatureFldsEN.js">数据传输的目的类对象</param>
   **/
  public async PutBakDataToViewFeatureFldsClassV2Bak(pobjViewFeatureFldsEN: clsViewFeatureFldsEN) {
    // const strThisFuncName = this.PutDataToViewFeatureFldsClass.name;

    //pobjViewFeatureFldsEN.SetViewFeatureId(this.strViewFeatureId);
    //pobjViewFeatureFldsEN.SetReleFldId(this.strFldId);

    pobjViewFeatureFldsEN.SetLabelCaption(refViewFeatureFlds1_Edit.value.labelCaption); // 标签标题
    pobjViewFeatureFldsEN.SetFieldTypeId(refViewFeatureFlds1_Edit.value.fieldTypeId); // 字段类型
    pobjViewFeatureFldsEN.SetCtlTypeId(refViewFeatureFlds1_Edit.value.ctlTypeId); // 控件类型
    pobjViewFeatureFldsEN.SetDsTabId(refViewFeatureFlds1_Edit.value.dsTabId); // 数据源表

    pobjViewFeatureFldsEN.SetTabFeatureId4Ddl(refPubCombo_Edit.value.tabFeatureId4Ddl); // 数据源表

    pobjViewFeatureFldsEN.SetVarIdCond1(refPubCombo_Edit.value.varIdCond1); // 数据源表
    pobjViewFeatureFldsEN.SetVarIdCond2(refPubCombo_Edit.value.varIdCond2); // 数据源表
    pobjViewFeatureFldsEN.SetFldIdCond1(refPubCombo_Edit.value.fldIdCond1); // 数据源表
    pobjViewFeatureFldsEN.SetFldIdCond2(refPubCombo_Edit.value.fldIdCond2); // 数据源表

    pobjViewFeatureFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
    pobjViewFeatureFldsEN.SetCtrlId(refViewFeatureFlds1_Edit.value.ctrlId); // 控件Id
    pobjViewFeatureFldsEN.SetDefaultValue(refViewFeatureFlds1_Edit.value.defaultValue); // 缺省值
    pobjViewFeatureFldsEN.SetOrderNum(refViewFeatureFlds1_Edit.value.orderNum); // 序号
    pobjViewFeatureFldsEN.SetVarId(refViewFeatureFlds1_Edit.value.varId); // 变量Id
    pobjViewFeatureFldsEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    pobjViewFeatureFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    //this.btnSubmit_ViewFeatureFlds = "确认修改";
    //this.btnCancel_ViewFeatureFlds = "取消修改";
    this.keyId = lngmId;
    try {
      const objViewFeatureFldsEN = await ViewFeatureFlds_GetObjBymIdAsync(lngmId);
      if (objViewFeatureFldsEN == null) return false;
      // const objViewFeatureFldsENEx = ViewFeatureFldsEx_CopyToEx(objViewFeatureFldsEN);

      // this.objViewFeatureFlds = objViewFeatureFldsEN;
      await refViewFeatureFlds_Edit.value.ShowDataFromViewFeatureFldsObj(objViewFeatureFldsEN);

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
   * 设置绑定下拉框，针对字段:[CtlTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_CtlTypeIdInDiv() {
    await CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache(divVarSet.refDivEdit, 'ddlCtlTypeId'); //
  }

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSaveV2(objViewFeatureFldsEN: clsViewFeatureFldsEN): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;

    try {
      await this.PutBakDataToViewFeatureFldsClassV2Bak(objViewFeatureFldsEN);
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
      ViewFeatureFlds_CheckPropertyNew(objViewFeatureFldsEN);
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
      const strCondition = ViewFeatureFlds_GetUniCondStr4Update(objViewFeatureFldsEN);
      const bolIsExistCond = await ViewFeatureFlds_IsExistRecordAsync(strCondition);
      if (bolIsExistCond == true) {
        return false;
      }
      let returnBool = false;
      returnBool = await ViewFeatureFlds_AddNewRecordAsync(objViewFeatureFldsEN);
      if (returnBool == true) {
        ViewFeatureFlds_ReFreshCache(ViewFeatureId_Static.value);
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
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecordSave_ClickV2(strViewFeatureId: string, strFldId: string) {
    this.opType = 'Update';
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      alert('请选择需要修改的界面功能！');
      return false;
    }
    if (IsNullOrEmpty(strFldId) == true) {
      alert('请选择需要修改的界面功能中的相关字段！');
      return false;
    }
    //      if (this.bolIsLoadEditRegion == false)  //
    //      {
    //          console.log("bolIsLoadEditRegion = ", this.bolIsLoadEditRegion);
    //          await this.AddDPV_Edit(divEdit);
    //          // 为编辑区绑定下拉框
    //          await this.BindDdl4EditRegion();
    ////          ShowDialog_QryRegionFlds('Update');
    //          this.btnSubmit_QryRegionFlds = "确认修改";
    //          this.bolIsLoadEditRegion = true;  //
    //          const lngKeyId = Number(strKeyId);
    //          this.UpdateRecord(lngKeyId);
    //      }
    //      else {
    //this.btnSubmitViewFeatureFlds = "确认修改";
    //            ShowDialog_QryRegionFlds('Update');
    //const lngKeyId = Number(strKeyId);
    const objViewFeatureFlds = new clsViewFeatureFldsEN();
    objViewFeatureFlds.viewFeatureId = strViewFeatureId;
    objViewFeatureFlds.releFldId = strFldId;
    const strCondition = ViewFeatureFlds_GetUniCondStr4Update(objViewFeatureFlds);
    const strMid = await ViewFeatureFlds_GetFirstIDAsync(strCondition);
    if (strMid == '0' || IsNullOrEmpty(strMid) == true) {
      //没有相关记录
      this.AddNewRecordSaveV2(objViewFeatureFlds);
    } else {
      this.keyId = Number(strMid);
      // const lngMid = Number(strMid);

      await this.UpdateRecordSaveV2(objViewFeatureFlds);
    }
    return true;
  }
  public async btnUpdateRecordSave_ClickV3(strViewFeatureId: string) {
    this.opType = 'Update';
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      alert('请选择需要修改的界面功能！');
      return false;
    }

    if (isShowViewFeatureFlds1.value == true) {
      const strCondition = `${clsViewFeatureFldsEN.con_ViewFeatureId} = '${strViewFeatureId}'`;
      const strMid = await ViewFeatureFlds_GetFirstIDAsync(strCondition);
      if (strMid == '0' || IsNullOrEmpty(strMid) == true) {
        const objViewFeatureFlds = new clsViewFeatureFldsEN();
        objViewFeatureFlds.viewFeatureId = strViewFeatureId;
        objViewFeatureFlds.SetInUse(true);
        //没有相关记录
        this.AddNewRecordSaveV2(objViewFeatureFlds);
      } else {
        this.keyId = Number(strMid);
        // const lngMid = Number(strMid);
      }
      await this.UpdateRecordSaveV31(strViewFeatureId);
    }
    if (isShowViewFeatureFlds2.value == true) {
      const strCondition = `${clsViewFeatureFldsEN.con_ViewFeatureId} = 'strViewFeatureId'`;
      const strMid = await ViewFeatureFlds_GetFirstIDAsync(strCondition);
      if (strMid == '0' || IsNullOrEmpty(strMid) == true) {
        const objViewFeatureFlds = new clsViewFeatureFldsEN();
        objViewFeatureFlds.viewFeatureId = strViewFeatureId;
        objViewFeatureFlds.SetInUse(true);
        //没有相关记录
        this.AddNewRecordSaveV2(objViewFeatureFlds);
      } else {
        this.keyId = Number(strMid);
        // const lngMid = Number(strMid);
      }

      await this.UpdateRecordSaveV32(strViewFeatureId);
    }
    return true;
  }
  /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
  public async ddlCtlTypeId_SelectedIndexChanged() {
    console.log(
      'ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:',
      refViewFeatureFlds_Edit.value.ctlTypeId,
    );
    this.HideTrInDiv('trDdlItemsOptionId');
    this.HideTrInDiv('trDsTabId');
    this.HideTrInDiv('trTabFeatureId4Ddl');
    // this.HideTrInDiv('t1rVarTypeIdCond1');
    // this.HideTrInDiv('t1rVarTypeIdCond2');
    this.HideTrInDiv('trVarIdCond1');
    this.HideTrInDiv('trVarIdCond2');
    this.HideTrInDiv('trFldIdCond1');
    this.HideTrInDiv('trFldIdCond2');

    this.HideTrInDiv('trDsCondStr');
    this.HideTrInDiv('trDsSqlStr');
    this.HideTrInDiv('trItemsString');
    this.HideTrInDiv('trDsDataTextFieldId');
    this.HideTrInDiv('trDsDataValueFieldId');
    this.HideTrInDiv('trDsCondFieldId');
    this.HideTrInDiv('trDsSortFieldId');
    this.HideTrInDiv('trVarId0');
    switch (refViewFeatureFlds_Edit.value.ctlTypeId) {
      // case enumCtlType.CacheClassifyField_37:
      //   this.ShowTrInDiv('trVarId0');
      //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

      //   break;
      case enumCtlType.ViewVariable_38:
        this.ShowTrInDiv('trVarId0');
        await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
        break;
      // case enumCtlType.sessionStorage_40:
      //   this.ShowTrInDiv('trVarId0');
      //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
      //   break;
      case enumCtlType.DropDownList_06:
        refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged();
        //   this.ShowTrInDiv('trTabFeatureId4Ddl');
        //   this.ShowTrInDiv('trDdlItemsOptionId');
        //   this.ShowTrInDiv('trDsTabId');

        //   console.log('QryRegion:', this.strRegionType);
        //   if (this.strRegionType == 'QryRegion') {
        //     this.queryOptionId = enumQueryOption.EqualQuery_01;
        //   }
        break;
      case enumCtlType.DropDownList_Bool_18:
        refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged();
        //   this.ShowTrInDiv('trDdlItemsOptionId');
        //   this.ddlItemsOptionId = enumDDLItemsOption.TrueAndFalseList_04;
        //   //$('#ddlDdlItemsOptionId').val(enumDDLItemsOption.TrueAndFalseList_04);
        break;
      case enumCtlType.TextBox_16:
        if (refViewFeatureFlds_Edit.value.strRegionType == 'QryRegion') {
          refViewFeatureFlds_Edit.value.queryOptionId = enumQueryOption.FuzzyQuery_02;
        }
        break;
      case enumCtlType.TextArea_41:
        if (refViewFeatureFlds_Edit.value.strRegionType == 'QryRegion') {
          refViewFeatureFlds_Edit.value.queryOptionId = enumQueryOption.FuzzyQuery_02;
        }
        break;
      case enumCtlType.GivenValue_35:
        this.HideTrInDiv('trDdlItemsOptionId');
        break;
      default:
        break;
    }

    //alert("Changed");
  }

  /**
   * 显示表格行 (tr))
   **/
  public ShowTrInDiv(strTr: string) {
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'tr', strTr);
    const strId = strTr;

    const objTr = getTrObjByIdInDivObj(divVarSet.refDivEdit, strId);
    if (objTr) {
      // 显示表行
      objTr.style.display = 'table-row';
    } else {
      // 表行不存在
      console.log(`表行:${strId}不存在`);
    }
  }

  /**
   * 隐藏表格行 (tr))
   **/
  public HideTrInDiv(strTr: string) {
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'tr', strTr);
    const strId = strTr;
    // objDiv.find(strId).hide();
    const objTr = getTrObjByIdInDivObj(divVarSet.refDivEdit, strId);
    if (objTr) {
      // 显示表行
      objTr.style.display = 'none';
    } else {
      // 表行不存在
      console.log(`表行:${strId}不存在`);
    }
  }
  /**
   * 设置绑定下拉框，针对字段:[varId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/
  public async SetDdl_VarIdInDiv(prjId: string) {
    await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlVarId', prjId); //
  }
}
