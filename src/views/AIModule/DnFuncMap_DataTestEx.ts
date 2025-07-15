import $ from 'jquery';
import { ProxyClass_switch } from '../AI_Func/ProxyClass_switch';
import { Proxy_FuncModule_switch } from '../AI_Func/Proxy_FuncModule_switch';
import { enumAssociationMapping } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { DnFuncMap_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import {
  vDataNode_SimEx_GetObjByTabIdAndFldId,
  vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate,
} from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdWithNodeByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  CheckControlExistInDivObj,
  CheckDivExistObj,
  GetCheckBoxValueInDivObj,
  GetInputValueInDivObj,
  GetLabelValueInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDiv,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { DnFuncMap_Edit } from '@/viewsBase/AIModule/DnFuncMap_Edit';
import { SqlWApi_GetDataTableByKeyAsync } from '@/ts/FunClass/SqlWApi';
import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';

import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { PrjTab_GetObjByTabIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import {
  DnFuncMapEx_CopyToEx,
  DnFuncMapEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/AIModule/clsDnFuncMapExWApi';
import {
  PrjTabFldEx_CopyToEx,
  PrjTabFldEx_FuncMapByFldName,
  PrjTabFldEx_GetObjLstByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

import {
  vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN,
  vPrjTab_SimEx_GetObjByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetObjValueOfKey } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, FstLcaseS, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import { divVarSet, refDnFuncMap_Edit } from '@/views/AIModule/DnFuncMapVueShare';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

/* DnFuncMap_DataTestEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class DnFuncMap_DataTestEx extends DnFuncMap_Edit {
  public static TabIdCache = '';
  public static FldIdCache = '';
  public static VersionNoCache = 1;
  public mstrKeyId = '';
  public TabId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: DnFuncMap_DataTestEx = <DnFuncMap_DataTestEx>DnFuncMap_DataTestEx.objPageEdit;

    switch (strCommandName) {
      case 'Calc': //提交
        objPage.btnCalc_Click();
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnFuncMap_EditV2Ex.btn_Click');

        break;
    }
  }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlFuncMapModeId_SelectedIndexChanged() {
    if (refDnFuncMap_Edit.value.funcMapModeId == '' || refDnFuncMap_Edit.value.funcMapModeId == '0')
      return;
    const strFuncMapModeId = refDnFuncMap_Edit.value.funcMapModeId;
    HideTrInDivObj(divVarSet.refDivEdit, 'trTabId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDnFunctionId');

    switch (strFuncMapModeId) {
      case enumFuncMapMode.Table_01:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trTabId');
        break;
      case enumFuncMapMode.Function_02:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDnFunctionId');
        break;
    }
  }

  public async SetDdl_TabIdInDivEx(strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
      divVarSet.refDivEdit,
      'ddlTabId',
      strPrjId,
    ); //编辑区域
  }

  public async SetDdl_OutTabIdInDivEx(strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
      divVarSet.refDivEdit,
      'ddlOutTabId',
      strPrjId,
    ); //编辑区域
  }
  /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
  public async ddlOutTabId_SelectedIndexChanged() {
    //alert('请在扩展层:DataNode_EditEx中重写该函数！');
    const strOutTabId = this.OutTabId;
    await this.SetDdl_FldId(clsPrivateSessionStorage.currSelPrjId, strOutTabId);
  }

  public async SetDdl_FldId(strPrjId: string, strTabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdWithNodeByTabIdCache(
      'ddlOutFldId',
      clsPrivateSessionStorage.cmPrjId,
      strPrjId,
      strTabId,
    ); //编辑区域
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecordV2_Click(strFldId: string, strTabId: string, intVersionNo: number) {
    //alert(strTabId + ":" + strFldId);

    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strFldId) == true) {
        alert('参数：[strFldId]为空，不正确！');
        return;
      }
      DnFuncMap_DataTestEx.TabIdCache = strTabId;
      DnFuncMap_DataTestEx.FldIdCache = strFldId;
      DnFuncMap_DataTestEx.VersionNoCache = intVersionNo;

      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(divVarSet.refDivEdit);
        this.opType = 'AddWithMaxId';

        this.SetEventFunc();
        this.bolIsLoadEditRegion = true; //
        this.AddNewRecordWithMaxId();
        const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objPrjTab == null) {
          const strMsg = Format(
            '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strTabId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
          strFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objFieldTab == null) {
          const strMsg = Format(
            '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strFldId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        this.InDataNodeDesc = Format('{0}-{1}', objPrjTab.tabName, objFieldTab.fldName);
        if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_DnFuncMap('Add');
        }
      } else {
        this.opType = 'AddWithMaxId';
        await this.AddNewRecordWithMaxId();
        if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_DnFuncMap('Add');
        }
      }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   */
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      //const ddlFuncMapModeId: HTMLSelectElement = GetSelectObjInDivObj(divEdit, 'ddlFuncMapModeId');
      //ddlFuncMapModeId.addEventListener('change', e => { this.ddlFuncMapModeId_SelectedIndexChanged(); });
    } catch (e: any) {
      const strMsg = `设置事件函数不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async chkIsCreateMapInTab_SelectedIndexChanged(chkIsCreateMapInTab: HTMLInputElement) {
    //const thisCtrl = event;
    //const ddlVarTypeId: HTMLSelectElement = <HTMLSelectElement>thisCtrl?.srcElement;
    const elemName = chkIsCreateMapInTab.id;
    console.error(chkIsCreateMapInTab);
    console.error(elemName);

    console.log(
      'chkIsCurrTab_SelectedIndexChanged--this.chkIsCurrTab:',
      chkIsCreateMapInTab.checked,
    );
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    if (chkIsCreateMapInTab.checked == true) {
      this.SetDdl_FldId(strPrjId, DnFuncMap_DataTestEx.TabIdCache);
      HideTrInDivObj(divVarSet.refDivEdit, 'trOutTabId');
      //GetCheckBoxValueInDivObj(, "trAssociationMappingId");
      HideTrInDivObj(divVarSet.refDivEdit, 'trFuncMapModeId');
      HideTrInDivObj(divVarSet.refDivEdit, 'trDnFunctionId');
      HideTrInDivObj(divVarSet.refDivEdit, 'trTabId');
      refDnFuncMap_Edit.value.associationMappingId = enumAssociationMapping.OneToOne_01;
    } else {
      ShowTrInDiv(divVarSet.refDivEdit, 'trOutTabId');
      //ShowTrInDiv(divEdit, "trAssociationMappingId");
      ShowTrInDiv(divVarSet.refDivEdit, 'trFuncMapModeId');
      ShowTrInDiv(divVarSet.refDivEdit, 'trDnFunctionId');
      ShowTrInDiv(divVarSet.refDivEdit, 'trTabId');
    }
  }
  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   */
  public async AddDPV_Edit(divName4Edit: HTMLDivElement) {
    CheckDivExistObj(divName4Edit);
    const strUrl = './DnFuncMap_DataTest';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjDnFuncMapEN.js">数据传输的目的类对象</param>
   */
  public async PutDataToDnFuncMapClass(pobjDnFuncMapEN: clsDnFuncMapEN) {
    const objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldId(
      DnFuncMap_DataTestEx.TabIdCache,
      DnFuncMap_DataTestEx.FldIdCache,
      DnFuncMap_DataTestEx.VersionNoCache,
    );
    if (objInDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        DnFuncMap_DataTestEx.TabIdCache,
        DnFuncMap_DataTestEx.FldIdCache,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (this.isCreateMapInTab == true) {
      //if (IsNullOrEmpty(this.OutTabId) == true) {
      //    console.error("请选择输出表！");
      //    throw ("请选择输出表！");
      //}
      if (IsNullOrEmpty(this.OutFldId) == true) {
        console.error('请选择输出结点字段！');
        throw '请选择输出结点字段！';
      }
      let intVersionNo = 1;
      let strOutFldId = this.OutFldId;
      if (this.OutFldId.indexOf('V') > -1) {
        const strVersionNo = this.OutFldId.substr(9, 1);
        intVersionNo = Number(strVersionNo);
        strOutFldId = this.OutFldId.substr(0, 8);
      }
      const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldId(
        DnFuncMap_DataTestEx.TabIdCache,
        strOutFldId,
        intVersionNo,
      );
      if (objOutDataNode == null) {
        const strMsg = Format(
          '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
          clsPrivateSessionStorage.cmPrjName,
          this.OutTabId,
          strOutFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
      pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
      pobjDnFuncMapEN.SetAssociationMappingId(refDnFuncMap_Edit.value.associationMappingId); // 关系映射
      pobjDnFuncMapEN.SetFuncMapModeId(enumFuncMapMode.Table_01); // this.funcMapModeId;// 映射模式
      pobjDnFuncMapEN.SetTabId(DnFuncMap_DataTestEx.TabIdCache); // this.tabId;// 表
      pobjDnFuncMapEN.SetDnFunctionId(''); // this.dnFunctionId;// DN函数
      pobjDnFuncMapEN.SetMemo(refDnFuncMap_Edit.value.memo); // 说明
      pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
      pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    } else {
      if (IsNullOrEmpty(this.OutTabId) == true) {
        console.error('请选择输出表！');
        throw '请选择输出表！';
      }
      if (IsNullOrEmpty(this.OutFldId) == true) {
        console.error('请选择输出结点字段！');
        throw '请选择输出结点字段！';
      }
      let intVersionNo = 1;
      let strOutFldId = this.OutFldId;
      if (this.OutFldId.indexOf('V') > -1) {
        const strVersionNo = this.OutFldId.substr(9, 1);
        intVersionNo = Number(strVersionNo);
        strOutFldId = this.OutFldId.substr(0, 8);
      }
      const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
        this.OutTabId,
        strOutFldId,
        intVersionNo,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objOutDataNode == null) {
        const strMsg = Format(
          '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
          clsPrivateSessionStorage.cmPrjName,
          this.OutTabId,
          strOutFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
      pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
      pobjDnFuncMapEN.SetAssociationMappingId(refDnFuncMap_Edit.value.associationMappingId); // 关系映射
      pobjDnFuncMapEN.SetFuncMapModeId(refDnFuncMap_Edit.value.funcMapModeId); // 映射模式
      pobjDnFuncMapEN.SetTabId(refDnFuncMap_Edit.value.tabId); // 表
      pobjDnFuncMapEN.SetDnFunctionId(refDnFuncMap_Edit.value.dnFunctionId); // DN函数
      pobjDnFuncMapEN.SetMemo(refDnFuncMap_Edit.value.memo); // 说明
      pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

      pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    }
  }
  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public get InDataNodeDesc(): string {
    const strValue = GetLabelValueInDivObj(divVarSet.refDivEdit, 'lblInDataNodeDesc');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public set InDataNodeDesc(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'label', 'lblInDataNodeDesc');
    const strId = 'lblInDataNodeDesc';
    SetLabelHtmlByIdInDivObj(objDiv, strId, value);
  }

  /**
   * 表ID (Used In Clear())
   */
  public set OutTabId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlOutTabId');
    const strId = 'ddlOutTabId';

    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 表ID (Used In PutDataToClass())
   */
  public get OutTabId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlOutTabId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 字段Id (Used In Clear())
   */
  public set OutFldId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlOutFldId');
    const strId = 'ddlOutFldId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 字段Id (Used In PutDataToClass())
   */
  public get OutFldId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlOutFldId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get qsFldId() {
    const strName = 'fldId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  /**
   * 是否使用Cache (Used In Clear())
   **/
  public set isCreateMapInTab(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkIsCreateMapInTab', value);
  }
  /**
   * 是否使用Cache (Used In PutDataToClass())
   **/
  public get isCreateMapInTab(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(divVarSet.refDivEdit, 'chkIsCreateMapInTab');
    return bolValue;
  }
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   **/
  public async btnDataTest_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(divVarSet.refDivEdit);
        this.opType = 'Calc';

        this.SetEventFunc();
        this.bolIsLoadEditRegion = true; //
        this.btnCancelDnFuncMap = '取消计算';
        const update = await this.UpdateRecord(strKeyId);

        if (update == false) {
          const strMsg = Format('在修改记录时,显示记录数据不成功!');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        await this.GetInputData(strKeyId);
        if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_DnFuncMap('Calc');
        }
      } else {
        this.opType = 'Calc';

        this.btnCancelDnFuncMap = '取消计算';
        const update = await this.UpdateRecord(strKeyId);

        if (update == false) {
          const strMsg = Format('在计算记录时,显示记录数据不成功!');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        await this.GetInputData(strKeyId);
        if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_DnFuncMap('Calc');
        }
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async GetInputData(strDnFuncMapId: string) {
    const strThisFuncName = this.UpdateRecord.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    this.keyId = strDnFuncMapId;
    try {
      const objDnFuncMapEN = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
      if (objDnFuncMapEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objInDataNode = await vDataNode_SimStore.getObj(objDnFuncMapEN.inDataNodeId);
      if (objInDataNode == null) return;
      const objPrjTab = await PrjTab_GetObjByTabIdAsync(objInDataNode.tabId);
      if (objPrjTab == null) return;
      if (IsNullOrEmpty(objPrjTab.keyId4Test) == true) {
        const strMsg = Format(
          '表:[{0}]没有测试关键字值.(in {1}.{2})',
          objPrjTab.tabName,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        objInDataNode.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) return;
      const arrPrjTabFld = await PrjTabFldEx_GetObjLstByTabIdCache(objInDataNode.tabId);
      if (arrPrjTabFld == null) return;
      const arrPrjTabFldEx = arrPrjTabFld.map(PrjTabFldEx_CopyToEx);
      const arrPrjTabFldEx_Sel = arrPrjTabFldEx.filter(
        (x) => x.fieldTypeId == enumFieldType.KeyField_02,
      );
      for (const objPrjTabFldEx of arrPrjTabFldEx_Sel) {
        await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objPrjTabFldEx);
      }
      const arrFldName_Key = arrPrjTabFldEx_Sel.map((x) => x.fldName);
      const strFldNameLst = arrFldName_Key.join(',');
      const arrObjLst = await SqlWApi_GetDataTableByKeyAsync(
        clsPrivateSessionStorage.currPrjDataBaseId,
        objPrjTab.tabName,
        strFldNameLst,
        objPrjTab.keyId4Test,
        false,
      );
      if (arrObjLst.length == 0) return;
      const objSqlObj = arrObjLst[0];

      const strFldValue = GetObjValueOfKey(objSqlObj, objFieldTab.fldName);
      if (IsNullOrEmpty(strFldValue) == false) {
        SetInputValueInDivObj(divVarSet.refDivEdit, 'txtInDataNodeId_Data', strFldValue);
        //objASPLabelEx.text = strValue.toString();
      }

      console.error(strFldValue);
      console.log('完成获取输入数据!');
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
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strDnFuncMapId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strDnFuncMapId;
    try {
      const objDnFuncMapEN = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
      if (objDnFuncMapEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      await this.GetDataFromDnFuncMapClass(objDnFuncMapEN);
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
  //    /**
  //* 设置关键字的值(Used In UpdateRecord())
  //**/
  //    public set keyId(value: string) {
  //        this.mstrKeyId = value;
  //    }
  ///**
  //* 设置关键字的值
  //**/
  //public get keyId(): string {
  //    return this.mstrKeyId.toString();
  //}

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnCalc_ClickBak20220506() {
    const strThisFuncName = this.btnCalc_Click.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    try {
      const strInputData = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtInDataNodeId_Data');
      if (IsNullOrEmpty(strInputData) == true) {
        const strMsg = Format(
          '请输入输入结点值!(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strInputData);
      const objInDataNode = await vDataNode_SimStore.getObj(refDnFuncMap_Edit.value.inDataNodeId);
      const objOutDataNode = await vDataNode_SimStore.getObj(refDnFuncMap_Edit.value.outDataNodeId);
      if (objInDataNode == null) return;
      if (objOutDataNode == null) return;

      const objInField = await vFieldTab_Sim_GetObjByFldIdCache(
        objInDataNode.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objOutField = await vFieldTab_Sim_GetObjByFldIdCache(
        objOutDataNode.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objInField == null) return;
      if (objOutField == null) return;
      // const strInFldName = FstLcaseS(objInField.fldName);
      // const strOutFldName = FstLcaseS(objOutField.fldName);

      // const x = 10;
      // const y = 5;
      // const a = eval('x * y');
      // console.error('a', a);
      // const strCommand1 = Format("TestEval('{0}')", 'abc');
      // const strTestResult = eval(strCommand1);
      // console.error(strTestResult);
      //const arrValue = await ViewRegionRelaEx_func4Lst(strInFldName, strOutFldName, strInputData, clsPrivateSessionStorage.cmPrjId);
      // const strCommand = Format(
      //   "ViewRegionRelaEx_func4Lst('{0}', '{1}', '{2}', '{3}');",
      //   strInFldName,
      //   strOutFldName,
      //   strInputData,
      //   clsPrivateSessionStorage.cmPrjId,
      // );
      // const arrValue = await eval(strCommand);
      // let strOutValue = '';
      // if (arrValue != '') {
      //   strOutValue = arrValue.join(',');
      // }
      // SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
      type TypeOfClass = new (name: string) => { name: string };
      class HasName {
        name: string;
        constructor(name: string) {
          this.name = name;
        }
      }
      const typeValue: TypeOfClass = HasName;
      const obj1 = new typeValue('clsDataNodeWApi.js');
      // const obj2 = new typeValue('BB');
      obj1.name = '11';
      // const ss = obj1.name;
      // type TypeOfClass2 = new () => void;

      // const myType3: TypeOfClass2 = clsDataNodeWApi;

      // const myType: typeof clsDataNodeWApi = clsDataNodeWApi;
      // const myType2: typeof clsCMProjectWApi = clsCMProjectWApi;
      // const arrType = new Array<any>();
      // arrType.push(myType);
      // arrType.push(myType2);
      // arrType.push(myType3);

      //const objMyType = new arrType[2]();
      // const objDataNodeWApi = new clsDataNodeWApi();
      //const strOutValue = await Reflect.apply(objMyType.constructor.func, objMyType,
      //    [FstLcaseS(objInField.fldName),
      //    FstLcaseS(objOutField.fldName),
      //        strInputData,
      //    clsPrivateSessionStorage.cmPrjId]);
      // const metadata = Reflect.getMetadata('role', clsDataNodeWApi);
      // SetInputValueInDivObj(divEdit, "txtOutDataNodeId_Data", strOutValue + metadata);

      //console.log(strOutValue);
      //alert(strOutValue);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在计算时时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnCalc_Click() {
    const strThisFuncName = this.btnCalc_Click.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const strInputData = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtInDataNodeId_Data');
      if (IsNullOrEmpty(strInputData) == true) {
        const strMsg = Format(
          '请输入输入结点值!(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objDnFuncMap = await vDnFuncMap_SimStore.getObj(this.keyId);
      if (objDnFuncMap == null) return;
      //SetInputValueInDivObj(divEdit, "txtOutDataNodeId_Data", strInputData);
      const objInDataNode = await vDataNode_SimStore.getObj(objDnFuncMap.inDataNodeId);
      const objOutDataNode = await vDataNode_SimStore.getObj(objDnFuncMap.outDataNodeId);
      if (objInDataNode == null) return;
      if (objOutDataNode == null) return;

      const objInField = await vFieldTab_Sim_GetObjByFldIdCache(
        objInDataNode.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objOutField = await vFieldTab_Sim_GetObjByFldIdCache(
        objOutDataNode.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objInField == null) return;
      if (objOutField == null) return;
      const strInFldName = FstLcaseS(objInField.fldName);
      const strOutFldName = FstLcaseS(objOutField.fldName);
      let strOutValue = '';

      if (objDnFuncMap.funcMapModeId == enumFuncMapMode.Table_01) {
        let strFuncName = '';
        const objPrjTab = await PrjTab_GetObjByTabIdAsync(objDnFuncMap.tabId);
        if (objPrjTab == null) {
          strOutValue = Format('转换表Id(TabId):[{0}]不存在!', objDnFuncMap.tabId);
          SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
          return;
        }
        const objFuncModule = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
          objPrjTab.funcModuleAgcId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objFuncModule == null) {
          strOutValue = Format(
            '表:[{0}({1})]的模块名不存在，请检查!',
            objPrjTab.tabName,
            objPrjTab.tabId,
          );
          SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
          return;
        }

        const strProxy_FuncModule = Format('Proxy_{0}', objFuncModule.funcModuleEnName);
        const clsGetFunction = Proxy_FuncModule_switch.getProxyClass_0005(strProxy_FuncModule);

        let strCacheClassifyFldName1 = '';
        // let strCacheClassifyFldName2 = '';
        let strCacheClassifyFldValue1 = '';
        const strCacheClassifyFldValue2 = '';
        if (IsNullOrEmpty(objPrjTab.cacheClassifyFieldTS) == false) {
          const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
            objPrjTab.cacheClassifyFieldTS,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvFieldTab_Sim == null) {
            strOutValue = Format('字段Id(FldId):[{0}]不存在!', objPrjTab.cacheClassifyFieldTS);
            SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
            return;
          }
          strCacheClassifyFldName1 = objvFieldTab_Sim.fldName;
        }
        if (IsNullOrEmpty(objPrjTab.cacheClassifyField2TS) == false) {
          const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
            objPrjTab.cacheClassifyField2TS,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvFieldTab_Sim == null) {
            strOutValue = Format('字段Id(FldId):[{0}]不存在!', objPrjTab.cacheClassifyField2TS);
            SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
            return;
          }
          // strCacheClassifyFldName2 = objvFieldTab_Sim.fldName;
        }
        if (strCacheClassifyFldName1 == 'PrjId') {
          strCacheClassifyFldValue1 = clsPrivateSessionStorage.currSelPrjId;
        } else if (strCacheClassifyFldName1 == 'CmPrjId') {
          strCacheClassifyFldValue1 = clsPrivateSessionStorage.cmPrjId;
        }
        if (objDnFuncMap.associationMappingId == enumAssociationMapping.OneToOne_01) {
          strFuncName = Format('{0}_func', objPrjTab.tabName);
          const strCommand = clsGetFunction.getFunction(strFuncName); //('{0}', '{1}', '{2}', '{3}');", strInFldName, strOutFldName, strInputData, clsPrivateSessionStorage.cmPrjId);
          const strValue = await strCommand(
            strInFldName,
            strOutFldName,
            strInputData,
            strCacheClassifyFldValue1,
            strCacheClassifyFldValue2,
          ); //
          const typeName = typeof strValue;
          switch (typeName) {
            case 'string':
              strOutValue = strValue;
              break;
            case 'function':
              strOutValue = strValue.join(',');
              break;
            case 'object':
              strOutValue = strValue.join(',');
              break;
            case 'number':
              strOutValue = strValue.toString();
              break;
            case 'boolean':
              strOutValue = strValue.toString();
              break;
            case 'undefined':
              strOutValue = '无效值';
              break;
            default:
              strOutValue = Format('类型:{0}没有处理', typeName);
              break;
          }

          SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
        } else {
          strFuncName = Format('{0}_func4Lst');
          //const strCommand = ProxyClass_switch.getFunction("ViewRegionRelaEx_func4Lst");//('{0}', '{1}', '{2}', '{3}');", strInFldName, strOutFldName, strInputData, clsPrivateSessionStorage.cmPrjId);
          const strCommand = ProxyClass_switch.getFunction(strFuncName); //('{0}', '{1}', '{2}', '{3}');", strInFldName, strOutFldName, strInputData, clsPrivateSessionStorage.cmPrjId);
          const arrValue = await strCommand(
            strInFldName,
            strOutFldName,
            strInputData,
            clsPrivateSessionStorage.cmPrjId,
          ); //
          const typeName = typeof arrValue;
          switch (typeName) {
            case 'string':
              strOutValue = arrValue;
              break;
            case 'function':
              strOutValue = arrValue.join(',');
              break;
            case 'object':
              strOutValue = arrValue.join(',');
              break;
            case 'number':
              strOutValue = arrValue.toString();
              break;
            case 'boolean':
              strOutValue = arrValue.toString();
              break;
            case 'undefined':
              strOutValue = '无效值';
              break;
            default:
              strOutValue = Format('类型:{0}没有处理', typeName);
              break;
          }

          SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOutDataNodeId_Data', strOutValue);
        }
      }
      //const arrValue = await ViewRegionRelaEx_func4Lst(strInFldName, strOutFldName, strInputData, clsPrivateSessionStorage.cmPrjId);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在计算时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjDnFuncMapEN">表实体类对象</param>
   **/
  public async GetDataFromDnFuncMapClass(pobjDnFuncMapEN: clsDnFuncMapEN) {
    const objDataNodeDirectMapEx = await DnFuncMapEx_CopyToEx(pobjDnFuncMapEN);
    await DnFuncMapEx_FuncMapByFldName(clsDnFuncMapENEx.con_InDataNodeName, objDataNodeDirectMapEx);
    await DnFuncMapEx_FuncMapByFldName(
      clsDnFuncMapENEx.con_OutDataNodeName,
      objDataNodeDirectMapEx,
    );
    await DnFuncMapEx_FuncMapByFldName(
      clsDnFuncMapENEx.con_AssociationMappingName,
      objDataNodeDirectMapEx,
    );
    await DnFuncMapEx_FuncMapByFldName(
      clsDnFuncMapENEx.con_FuncMapModeName,
      objDataNodeDirectMapEx,
    );
    await DnFuncMapEx_FuncMapByFldName(clsDnFuncMapENEx.con_TabName, objDataNodeDirectMapEx);
    await DnFuncMapEx_FuncMapByFldName(clsDnFuncMapENEx.con_DnFunctionName, objDataNodeDirectMapEx);

    // const strThisFuncName = this.GetDataFromDnFuncMapClass.name;
    this.inDataNodeDesc_d = objDataNodeDirectMapEx.inDataNodeName; // In数据结点
    this.outDataNodeName_d = objDataNodeDirectMapEx.outDataNodeName; // Out数据结点
    this.associationMappingName_d = objDataNodeDirectMapEx.associationMappingName; // 关系映射
    this.funcMapModeName_d = objDataNodeDirectMapEx.funcMapModeName; // 映射模式

    if (pobjDnFuncMapEN.funcMapModeId == enumFuncMapMode.Table_01) {
      this.tabName_d = objDataNodeDirectMapEx.tabName; // 表
      HideTrInDivObj(divVarSet.refDivEdit, 'trDnFunctionId');
      ShowTrInDiv(divVarSet.refDivEdit, 'trTabId');
    } else {
      this.dnFunctionName_d = objDataNodeDirectMapEx.dnFunctionName; // DN函数
      HideTrInDivObj(divVarSet.refDivEdit, 'trTabId');
      ShowTrInDiv(divVarSet.refDivEdit, 'trDnFunctionId');
    }
    this.memo_d = pobjDnFuncMapEN.memo; // 说明
  }

  /**
   * 显示对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_ShowDialog)
   **/
  public async ShowDialog_DnFuncMap(strOp: string): Promise<boolean> {
    // const strThisFuncName = this.ShowDialog_DnFuncMap.name;
    //检查相关控件是否存在
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'div', 'divEditDialog_DnFuncMap');
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'h4', 'lblDialogTitle_DnFuncMap');
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      $('#lblDialogTitle_DnFuncMap').html('添加记录');
      //DnFuncMap_EditEx.GetMaxStrId('#txtDnFuncMapId');
    } else if (strOp === 'Update') {
      $('#lblDialogTitle_DnFuncMap').html('修改记录');
    } else if (strOp === 'Calc') {
      $('#lblDialogTitle_DnFuncMap').html('关系映射计算');
    } else if (strOp === 'Detail') {
      $('#btnSubmit_DnFuncMap').hide();
      $('#lblDialogTitle_DnFuncMap').html('详细信息');
    }
    if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      await refDnFuncMap_Edit.value.showDialog();
    }
    return true;
  }
  public set inDataNodeDesc_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblInDataNodeDesc_d', value);
  }
  public set outDataNodeName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblOutDataNodeName_d', value);
  }
  public set associationMappingName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblAssociationMappingName_d', value);
  }
  public set funcMapModeName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblFuncMapModeName_d', value);
  }
  public set tabName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblTabName_d', value);
  }
  public set dnFunctionName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblDnFunctionName_d', value);
  }
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblMemo_d', value);
  }
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
}
