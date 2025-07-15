// import $ from 'jquery';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumDgFuncType } from '@/ts/L0Entity/PrjInterface/clsDgFuncTypeEN';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import { enumDataTypeAbbr } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { vDataNode_SimEx_ClearDnPath } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import {
  DGRegionFlds_AddNewRecordWithReturnKeyAsync,
  DGRegionFlds_CheckProperty4Update,
  DGRegionFlds_CheckPropertyNew,
  DGRegionFlds_ReFreshCache,
  DGRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { DnPathEx_ShowDnPath } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import {
  DGRegionFldsEx_CheckRegionFldsUp,
  DGRegionFldsEx_ImportExtendFld,
} from '@/ts/L3ForWApiEx/RegionManage/clsDGRegionFldsExWApi';
import {
  vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache,
  vFieldTab_SimEx_BindDdl_FldIdInDivExCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  ClearSelectValueByIdInDivObj,
  HideTrInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { DGRegionFlds_Edit } from '@/viewsBase/RegionManage/DGRegionFlds_Edit';
import { PubFun4Web_ShowOutFldName } from '@/ts/FunClass/clsPubFun4Web';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  DGRegionFlds_DeleteKeyIdCache,
  divVarSet,
  refDGRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
} from '@/views/RegionManage/DGRegionFldsVueShare';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

/* DGRegionFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class DGRegionFlds_EditEx extends DGRegionFlds_Edit {
  //public static CmPrjIdCache=  "9991";
  // public static strTabId4Region = '';
  public static objCMProjects: clsCMProjectEN;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: DGRegionFlds_EditEx = <DGRegionFlds_EditEx>(
      DGRegionFlds_Edit.GetPageEditObj('DGRegionFlds_EditEx')
    );
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
      default:
        AccessBtnClickDefault(strCommandName, 'DGRegionFlds_EditEx.btn_Click');

        break;
    }
  }

  //    /* 修改记录
  // (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  //*/
  //    public async btnUpdateRecord_Click() {
  //        this.opType = "Update";
  //        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
  //        if (strKeyId == "") {
  //            alert("请选择需要修改的记录！");
  //            return;
  //        }
  //        //if (this.bolIsLoadEditRegion == false)  //
  //        //{
  //        //    await this.AddDPV_Edit(divVarSet.refDivEdit);
  //        //    // 为编辑区绑定下拉框
  //        //    await this.BindDdl4EditRegion();
  //        //    ShowDialog_DGRegionFlds('Update');
  //        //    this.bolIsLoadEditRegion = true;  //
  //        //    const lngKeyId = Number(strKeyId);
  //        //    this.UpdateRecord(lngKeyId);
  //        //}
  //        //else {
  //            ShowDialog_DGRegionFlds('Update');
  //            const lngKeyId = Number(strKeyId);
  //            this.UpdateRecord(lngKeyId);
  //        //}
  //    }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[fldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      divVarSet.refDivEdit,
      'ddlFldId',
      strTabId,
      strPrjId,
    ); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[fldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_OutFldIdInDivEx(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache(
      divVarSet.refDivEdit,
      'ddlOutFldId',
      strTabId,
    ); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[outDataNodeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  //public async SetDdl_OutDataNodeIdInDivEx(strTabId:string, strCmPrjId: string) {
  //    //const objDataNode_Cond: clsDataNodeEN = new clsDataNodeEN();//编辑区域
  //    //定义条件字段
  //    //const strCmPrjId = "";//定义条件字段
  //    await DataNodeEx_BindDdl_DataNodeIdInDivExCache(divVarSet.refDivEdit, "ddlOutDataNodeId", strTabId, strCmPrjId);//编辑区域
  //}

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjDGRegionFldsEN.js">表实体类对象</param>
   **/
  public async GetBakDataFromDGRegionFldsClass(pobjDGRegionFldsEN: clsDGRegionFldsEN) {
    this.GetBakDataFromDGRegionFldsClassV2(pobjDGRegionFldsEN);
  }

  public async GetBakDataFromDGRegionFldsClassV2(pobjDGRegionFldsEN: clsDGRegionFldsEN) {
    // const strThisFuncName = this.GetDataFromDGRegionFldsClass.name;
    refDGRegionFlds_Edit.value.fldId = pobjDGRegionFldsEN.fldId; // 表字段
    refDGRegionFlds_Edit.value.outFldId = pobjDGRegionFldsEN.outFldId; // 表字段
    await PubFun4Web_ShowOutFldName(
      divVarSet.refDivEdit,
      'lblDataPropertyName_e',
      refDGRegionFlds_Edit.value.fldId,
      refDGRegionFlds_Edit.value.outFldId,
    );
    //this.dataPropertyName = pobjDGRegionFldsEN.dataPropertyName;// 属性名
    refDGRegionFlds_Edit.value.sortExpression = pobjDGRegionFldsEN.sortExpression; // 排序表达式
    refDGRegionFlds_Edit.value.headerText = pobjDGRegionFldsEN.headerText; // 列头
    //this.isVisible = pobjDGRegionFldsEN.isVisible;// 是否显示
    //this.isNeedSort = pobjDGRegionFldsEN.isNeedSort;// 是否需要排序
    let bolIsNeedTransToChkBox = false;
    const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
      pobjDGRegionFldsEN.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Sim != null) {
      if (objvFieldTab_Sim.dataTypeId == enumDataTypeAbbr.bit_03) {
        bolIsNeedTransToChkBox = true;
      }
    }

    if (bolIsNeedTransToChkBox === true) {
      ShowTrInDivObj(divVarSet.refDivEdit, 'trIsTransToChkBox');
      refDGRegionFlds_Edit.value.isTransToChkBox = pobjDGRegionFldsEN.isTransToChkBox; // 是否转换成CheckBox
    } else {
      HideTrInDivObj(divVarSet.refDivEdit, 'trIsTransToChkBox');
    }
    refDGRegionFlds_Edit.value.toolTipText = pobjDGRegionFldsEN.toolTipText; // 提示文字
    refDGRegionFlds_Edit.value.seqNum = pobjDGRegionFldsEN.seqNum; // 序号
    refDGRegionFlds_Edit.value.memo = pobjDGRegionFldsEN.memo; // 说明
    try {
      //this.outDataNodeId = pobjDGRegionFldsEN.outDataNodeId;// Out数据
      if (IsNullOrEmpty(refDGRegionFlds_Edit.value.outFldId) == false) {
        await DnPathEx_ShowDnPath(
          divVarSet.refDivEdit,
          'tdDnPathId',
          TabId_Static.value,
          refDGRegionFlds_Edit.value.fldId,
          refDGRegionFlds_Edit.value.outFldId,
          clsPrivateSessionStorage.cmPrjId,
        );
      } else {
        vDataNode_SimEx_ClearDnPath(divVarSet.refDivEdit, 'tdDnPathId');
      }
    } catch (e) {}
    refDGRegionFlds_Edit.value.ctlTypeId = pobjDGRegionFldsEN.ctlTypeId; // 控件类型
    refDGRegionFlds_Edit.value.dgFuncTypeId = pobjDGRegionFldsEN.dgFuncTypeId; // Dg功能类型

    //this.isFuncFld = pobjDGRegionFldsEN.isFuncFld;// 是否功能字段
    //this.isUseFunc = pobjDGRegionFldsEN.isUseFunc;// 是否代码转换到名称
    //this.inUse = pobjDGRegionFldsEN.inUse;// 是否在用
    // this.prjId = pobjDGRegionFldsEN.prjId;// 工程ID
    //this.regionId = pobjDGRegionFldsEN.regionId;// 区域Id
    //this.isDefaultSort = pobjDGRegionFldsEN.isDefaultSort;// 是否默认排序
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    // const strThisFuncName = this.AddNewRecord.name;
    this.btnSubmitDGRegionFlds = '确认添加';
    this.btnCancelDGRegionFlds = '取消添加';
    this.Clear();
    refDGRegionFlds_Edit.value.dgFuncTypeId = enumDgFuncType.AAA_0001;
    refDGRegionFlds_Edit.value.ctlTypeId = enumCtlType.Label_10;
    refDGRegionFlds_Edit.value.seqNum = 1;
    //wucDGRegionFldsB1.mId = DGRegionFlds_GetMaxStrId_S();
  }
  /**
   * 清除用户自定义控件中，所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // const strThisFuncName = this.Clear.name;

    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldId');

    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlOutDataNodeId');
    //this.dataPropertyName = "";
    refDGRegionFlds_Edit.value.sortExpression = '';
    refDGRegionFlds_Edit.value.headerText = '';

    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCtlTypeId');

    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlDgFuncTypeId');
    //this.isVisible = false;
    //this.isNeedSort = false;
    //this.isTransToChkBox = false;
    refDGRegionFlds_Edit.value.toolTipText = '';
    //this.isFuncFld = false;
    //this.isUseFunc = false;
    //this.regionId = "";
    //this.isDefaultSort = false;
    refDGRegionFlds_Edit.value.seqNum = 0;
    refDGRegionFlds_Edit.value.memo = '';
  }

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    let objDGRegionFldsEN;
    try {
      objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
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
      DGRegionFlds_CheckPropertyNew(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let bolResult = false;
      const returnKey = await DGRegionFlds_AddNewRecordWithReturnKeyAsync(objDGRegionFldsEN);
      if (IsNullOrEmpty(returnKey) == false) {
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
        bolResult = await DGRegionFldsEx_ImportExtendFld(
          Number(returnKey),
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) {
          //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);

          PrjTabFld_ReFreshCache(TabId_Static.value);
          prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        }
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return bolResult; //一定要有一个返回值，否则会出错！
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

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    const objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
    objDGRegionFldsEN.SetmId(Number(this.keyId));
    objDGRegionFldsEN.sfUpdFldSetStr = objDGRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objDGRegionFldsEN.mId == 0 || objDGRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    try {
      DGRegionFlds_CheckProperty4Update(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await DGRegionFlds_UpdateRecordAsync(objDGRegionFldsEN);
      // const bolResult = false;
      if (returnBool == true) {
        await DGRegionFldsEx_CheckRegionFldsUp(
          clsPrivateSessionStorage.viewId_Main,
          objDGRegionFldsEN.regionId,
          clsPrivateSessionStorage.cmPrjId,
          objDGRegionFldsEN.updUser,
        );
        viewInfoStore.delObjByRegionId(objDGRegionFldsEN.regionId);
        viewRegionStore.delObj(objDGRegionFldsEN.regionId);
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
        DGRegionFlds_DeleteKeyIdCache(objDGRegionFldsEN.regionId, this.keyId);
        //if (objDGRegionFldsEN.isUseFunc) {
        //    bolResult = await DGRegionFldsEx_ImportExtendFld(objDGRegionFldsEN.mId, clsPrivateSessionStorage.currSelPrjId, clsPubLocalStorage.userId);
        //    if (bolResult == true) {
        //        //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);

        //        PrjTabFld_ReFreshCache(TabId_Static.value);
        //    }
        //}
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
