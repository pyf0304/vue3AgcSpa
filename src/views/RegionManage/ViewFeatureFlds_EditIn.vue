<template>
  <!-- 编辑层 -->
  <div id="divEditLayout_ViewFeature" ref="refDivEdit" class="tab_layout">
    <table id="tabEdit" style="width: 333px" class="border border-info table-bordered">
      <!-- <tr id="trLabelCaption">
            <td class="text-right">
              <label
                id="lblLabelCaption"
                
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                标签标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLabelCaption"
                
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr> -->
      <tr id="trFieldTypeId">
        <td class="text-right">
          <label id="lblFieldTypeId" class="col-form-label-sm text-right" style="width: 70px">
            字段类型
          </label>
        </td>
        <td class="text-left">
          <span
            id="spnFieldTypeId"
            class="col-form-label-sm text-left font-weight-bold text-g h5"
            style="width: 70px"
          >
            {{ strFieldTypeName }}(字段: {{ strRelaFieldName }})
          </span>
          <button
            id="btnDelViewFeatureFld"
            class="btn btn-primary btn-sm"
            style="width: 100px"
            @click="btnDelViewFeatureFld_Click"
            >删除</button
          >
        </td>
      </tr>
      <tr id="trReleFldId">
        <td class="text-right">
          <label id="lblReleFldId" class="col-form-label-sm text-right" style="width: 70px">
            相关字段
          </label>
        </td>
        <td class="text-left" colSpan="3">
          <!-- <select
                id="ddlReleFldId"
                
                class="form-control form-control-sm"
                style="width: 240px"
              ></select> -->
          <select
            id="ddlReleFldId1"
            v-model="releFldId"
            class="form-control form-control-sm"
            style="width: 240px"
          >
            <option v-for="option in arrvFieldTab_Sim" :key="option.fldId" :value="option.fldId">
              {{ option.fldName }}({{ option.fldId }})
            </option>
          </select>
        </td>
      </tr>
      <tr v-show="isShowCtrl === true" id="trCtlTypeId">
        <td class="text-right">
          <label id="lblCtlTypeId" class="col-form-label-sm text-right" style="width: 70px">
            控件类型
          </label>
        </td>
        <td class="text-left">
          <!-- <select id="ddlCtlTypeId" class="form-control form-control-sm" style="width: 240px"></select> -->
          <select
            id="ddlCtlTypeId"
            v-model="ctlTypeId"
            class="form-control form-control-sm"
            style="width: 240px"
            @change="ddlCtlTypeId_SelectedIndexChanged"
          >
            <option v-for="option in arrCtlType" :key="option.ctlTypeId" :value="option.ctlTypeId">
              {{ option.ctlTypeName }}({{ option.ctlTypeId }})
            </option>
          </select>
        </td>
      </tr>
    </table>
    <pubCombo_EditCom ref="refPubCombo_Edit" :is-for-feature-fld="true"></pubCombo_EditCom>
    <table>
      <tr v-if="isShowCtrl === true" id="trCtrlId">
        <td class="text-right">
          <label id="lblCtrlId" class="col-form-label-sm text-right" style="width: 70px">
            控件Id
          </label>
        </td>
        <td class="text-left">
          <input
            id="txtCtrlId"
            v-model="ctrlId"
            class="form-control form-control-sm"
            style="width: 240px"
          />
        </td>
      </tr>
      <tr v-if="isNeedDefaultValue === true" id="trDefaultValue">
        <td class="text-right">
          <label id="lblDefaultValue" class="col-form-label-sm text-right" style="width: 70px">
            缺省值
          </label>
        </td>
        <td class="text-left">
          <input
            id="txtDefaultValue"
            v-model="defaultValue"
            class="form-control form-control-sm"
            style="width: 240px"
          />
        </td>
      </tr>
      <!-- <tr v-if="isShowCtrl === true" id="trOrderNum">
            <td class="text-right">
              <label
                id="lblOrderNum"                
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                v-model="orderNum"
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr> -->
      <!-- <tr v-if="isShowCtrl === true" id="trVarId0">
            <td class="text-right">
              <label
                id="lblVarId"
                                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                变量Id
              </label>
            </td>
            <td class="text-left">
              <input id="txtVarId" class="form-control form-control-sm" style="width: 240px" />
            </td>
          </tr> -->
      <!-- <tr v-if="objData.ctlTypeId == '06' && isShowCtrl === true" id="trDdlItemsOptionId">
            <td class="text-right">
              <label
                id="lblDdlItemsOptionId"
                                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                下拉列表
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlDdlItemsOptionId"
                                class="form-control form-control-sm"
                style="width: 230px"
              ></select>
            </td>
          </tr>  -->
    </table></div
  >
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

  import ViewFeatureFlds_EditEx from '@/views/RegionManage/ViewFeatureFlds_EditEx';
  import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';

  import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { GCVariable_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';

  import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { FieldType_GetNameByFieldTypeIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  import { refPubCombo_Edit } from '@/ts/components/pubComboVueShare';
  import pubCombo_EditCom from '@/ts/components/pubCombo_Edit.vue';

  import { refDivEdit } from '@/views/RegionManage/ViewFeatureFldsLstVueShare';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { CheckControlExistInDivObj, getTrObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
  import { ViewFeatureFldsEx_CopyToPubComboEx } from '@/ts/L3ForWApiEx/RegionManage/clsViewFeatureFldsExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import {
    vFieldTab_Sim_GetNameByFldIdCache,
    vFieldTab_Sim_GetObjLstCache,
  } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

  import { CtlType_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { ViewFeatureFlds_DelRecordAsync } from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';

  export default defineComponent({
    name: 'ViewFeatureFldsEdit',
    components: {
      // 组件注册
      pubCombo_EditCom,
    },
    props: {
      // objData: {
      //   type: clsViewFeatureFldsEN,
      //   required: true,
      // },
      // arrBindData: {
      //   type: Object,
      //   required: true,
      // },
      isDialog: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['del-view-feature-fld'],
    setup(_, { emit }) {
      const mId_Key = ref(0);
      const btnDelViewFeatureFld_Click = async () => {
        await ViewFeatureFlds_DelRecordAsync(mId_Key.value);
        emit('del-view-feature-fld');
        console.log('btnDelViewFeatureFld_Click');
      };
      const strTitle = ref('界面功能字段编辑');

      const arrvTabFeature_Sim = ref<Array<clsvTabFeature_SimEN>>([]);
      const arrGCVariableType1 = ref<Array<clsGCVariableTypeEN>>([]);
      const arrGCVariableType2 = ref<Array<clsGCVariableTypeEN>>([]);
      const arrGCVariable1 = ref<Array<clsGCVariableEN>>([]);
      const arrGCVariable2 = ref<Array<clsGCVariableEN>>([]);

      const arrvFieldTab_Sim = ref<Array<clsvFieldTab_SimEN>>([]);
      const arrCtlType = ref<Array<clsCtlTypeEN>>([]);

      const isShowCond1 = ref(false);
      const isShowCond2 = ref(false);
      const isShowCtrl = ref(false);
      const isNeedDefaultValue = ref(false);

      const isShowTabFeature = ref(false);
      //对象中相关属性
      const fieldTypeId = ref('');
      const labelCaption = ref('');
      const releFldId = ref('');
      const ctlTypeId = ref('');

      const ctrlId = ref('');
      const defaultValue = ref('');
      const orderNum = ref(0);
      const varId = ref('');

      const strFldNameCond1 = ref('条件1-字段');
      const strFldNameCond2 = ref('条件2-字段');
      const selectedTabFeatureId = ref(''); //props.arrObjData[0].tabFeatureId4Ddl);

      onMounted(async () => {
        // await getArrvFieldTab_Sim(TabId4Region_Static.value);
        //this.myonload();
      });

      async function BindDdl4EditRegion(strTabId: string) {
        await getArrvFieldTab_Sim(strTabId);
        await getArrCtlType();
      }
      /**
       * 设置绑定下拉框，针对字段:[varId]
       * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
       **/
      async function SetDdl_VarIdInDiv(prjId: string) {
        await GCVariableEx_BindDdl_VarIdInDivCache(refDivEdit.value, 'ddlVarId', prjId); //
      }
      async function getArrCtlType() {
        let arrObjLstSel = await CtlType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
        if (arrObjLstSel == null) return;
        arrCtlType.value.length = 0;
        const obj0 = new clsCtlTypeEN();
        obj0.ctlTypeId = '0';
        obj0.ctlTypeName = '控件表...';
        arrCtlType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrCtlType.value.push(x));
        ctlTypeId.value = '0';
      }
      async function getArrvFieldTab_Sim(strTabId: string) {
        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        // let arrvPrjTab_Sim0 = await vPrjTab_Sim_GetObjLstCache(strPrjId);
        // if (arrvPrjTab_Sim0 == null) return;
        // arrvPrjTab_Sim0 = arrvPrjTab_Sim0.sort((x, y) => x.tabName.localeCompare(y.tabName));

        const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
        //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
        const arrFldId = arrPrjTabFld.map((x) => x.fldId);

        // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
        let arrObjLstSel = await vFieldTab_Sim_GetObjLstCache(strPrjId);
        arrObjLstSel = arrObjLstSel
          .filter((x) => arrFldId.indexOf(x.fldId) > -1)
          .sort((x, y) => x.fldName.localeCompare(y.fldName));

        if (arrObjLstSel == null) return;
        arrvFieldTab_Sim.value.length = 0;
        const obj0 = new clsvFieldTab_SimEN();
        obj0.fldId = '0';
        obj0.fldName = '字段表...';
        arrvFieldTab_Sim.value.push(obj0);
        arrObjLstSel.forEach((x) => arrvFieldTab_Sim.value.push(x));
        releFldId.value = '0';
      }

      /**
       * 显示表格行 (tr))
       **/
      function ShowTrInDiv(strTr: string) {
        CheckControlExistInDivObj(refDivEdit.value, 'tr', strTr);
        const strId = strTr;

        const objTr = getTrObjByIdInDivObj(refDivEdit.value, strId);
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
      function HideTrInDiv(strTr: string) {
        CheckControlExistInDivObj(refDivEdit.value, 'tr', strTr);
        const strId = strTr;
        // objDiv.find(strId).hide();
        const objTr = getTrObjByIdInDivObj(refDivEdit.value, strId);
        if (objTr) {
          // 显示表行
          objTr.style.display = 'none';
        } else {
          // 表行不存在
          console.log(`表行:${strId}不存在`);
        }
      }

      /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
      async function ddlCtlTypeId_SelectedIndexChanged() {
        console.log('ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:', ctlTypeId.value);
        // HideTrInDiv('trDdlItemsOptionId');
        // HideTrInDiv('trDsTabId');
        // HideTrInDiv('trTabFeatureId4Ddl');
        // HideTrInDiv('t1rVarTypeIdCond1');
        // HideTrInDiv('t1rVarTypeIdCond2');
        // HideTrInDiv('trVarIdCond1');
        // HideTrInDiv('trVarIdCond2');
        // HideTrInDiv('trFldIdCond1');
        // HideTrInDiv('trFldIdCond2');

        // HideTrInDiv('trDsCondStr');
        // HideTrInDiv('trDsSqlStr');
        // HideTrInDiv('trItemsString');
        // HideTrInDiv('trDsDataTextFieldId');
        // HideTrInDiv('trDsDataValueFieldId');
        // HideTrInDiv('trDsCondFieldId');
        // HideTrInDiv('trDsSortFieldId');
        // HideTrInDiv('trVarId0');
        switch (ctlTypeId.value) {
          // case enumCtlType.CacheClassifyField_37:
          //   ShowTrInDiv('trVarId0');
          //   await SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

          //   break;
          case enumCtlType.ViewVariable_38:
            ShowTrInDiv('trVarId0');
            await SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
            break;
          // case enumCtlType.sessionStorage_40:
          //   ShowTrInDiv('trVarId0');
          //   await SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
          //   break;
          case enumCtlType.DropDownList_06:
            // refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged();
            break;
          case enumCtlType.DropDownList_Bool_18:
            // refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged();

            break;
          case enumCtlType.TextBox_16:
            // if (strRegionType.value == 'QryRegion') {
            //   queryOptionId.value = enumQueryOption.FuzzyQuery_02;
            // }
            break;
          case enumCtlType.TextArea_41:
            // if (strRegionType == 'QryRegion') {
            //   queryOptionId.value = enumQueryOption.FuzzyQuery_02;
            // }
            break;
          case enumCtlType.GivenValue_35:
            HideTrInDiv('trDdlItemsOptionId');
            break;
          default:
            break;
        }

        //alert("Changed");
      }

      /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjViewFeatureFldsEN.js">表实体类对象</param>
  */
      async function GetDataFromViewFeatureFldsClass(pobjViewFeatureFldsEN: clsViewFeatureFldsEN) {
        console.log('开始显示数据：GetDataFromViewFeatureFldsClass');
        await ShowViewFeatureFldsData(pobjViewFeatureFldsEN);
        // this.objPubFun4Ddl.divEdit = divVarSet.refDivEdit;
        //this.fldId = pobjViewFeatureFldsEN.fldId;// 表字段
        //this.inUse = pobjViewFeatureFldsEN.inUse;// 在用
        releFldId.value = pobjViewFeatureFldsEN.releFldId; // 标签标题
        labelCaption.value = pobjViewFeatureFldsEN.labelCaption; // 标签标题
        //this.colSpan = pobjViewFeatureFldsEN.colSpan;// 跨列数
        //this.width = pobjViewFeatureFldsEN.width;// 宽
        //this.inOutTypeId = pobjViewFeatureFldsEN.inOutTypeId;// In/Out
        //this.seqNum = pobjViewFeatureFldsEN.seqNum;// 序号

        ctlTypeId.value = pobjViewFeatureFldsEN.ctlTypeId; // 控件类型
        await ddlCtlTypeId_SelectedIndexChanged();

        const objPubComboEN = ViewFeatureFldsEx_CopyToPubComboEx(pobjViewFeatureFldsEN);
        objPubComboEN.ddlItemsOptionId = pobjViewFeatureFldsEN.ddlItemsOptionId;
        if (pobjViewFeatureFldsEN.ctlTypeId == enumCtlType.DropDownList_06) {
          await refPubCombo_Edit.value.GetDataFromPubComboClass(objPubComboEN);
        }
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
        varId.value = pobjViewFeatureFldsEN.varId; // 变量Id
        ctrlId.value = pobjViewFeatureFldsEN.ctrlId; // 变量Id
        fieldTypeId.value = pobjViewFeatureFldsEN.fieldTypeId; // 变量Id

        //    this.clickEvent = pobjViewFeatureFldsEN.clickEvent;// Click事件
        //    this.regionId = pobjViewFeatureFldsEN.regionId;// 区域Id
        //    this.changeEvent = pobjViewFeatureFldsEN.changeEvent;// Change事件
        //    this.fldId = pobjViewFeatureFldsEN.fldId;// 字段Id
        //    this.colIndex = pobjViewFeatureFldsEN.colIndex;// 列序号
        //    this.memo = pobjViewFeatureFldsEN.memo;// 说明
      }
      // Create a computed property to handle the default value for selectedTabId
      // const defaultTabFeatureId = computed(() => {
      //   if (selectedTabFeatureId.value === null || selectedTabFeatureId.value === '') {
      //     // Return the value of the first option in the dropdown as the default value
      //     return arrvTabFeature_Sim.value[0].tabFeatureId;
      //   } else {
      //     return selectedTabFeatureId.value;
      //   }
      // });

      // Watch for changes to the objData.tabId and update selectedTabId accordingly
      // watch(
      //   () => props.arrObjData[0].tabFeatureId4Ddl,
      //   (newValue) => {
      //     selectedTabFeatureId.value = newValue;
      //   },
      // );
      const ddlVarTypeIdCond1_ref = ref(null);
      const ddlVarTypeIdCond2_ref = ref(null);

      const strFieldTypeName = ref('');
      const strRelaFieldName = ref('');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewFeatureFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewFeatureFlds':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewFeatureFlds':
            return strCancelButtonText.value;
          case 'btnSubmitViewFeatureFlds':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      async function ShowViewFeatureFldsData(objData: clsViewFeatureFldsEN) {
        strFieldTypeName.value = await FieldType_GetNameByFieldTypeIdCache(objData.fieldTypeId);
        strRelaFieldName.value = await vFieldTab_Sim_GetNameByFldIdCache(
          objData.releFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        mId_Key.value = objData.mId;
        console.log('mId_Key:', mId_Key.value);
        labelCaption.value = objData.labelCaption;
        fieldTypeId.value = objData.fieldTypeId;
        releFldId.value = objData.releFldId;
        ctlTypeId.value = objData.ctlTypeId;
        // dsTabId.value = objData.dsTabId;

        // fldIdCond1.value = '';
        // fldIdCond2.value = '';

        // varIdCond1.value = objData.varIdCond1;
        // varIdCond2.value = objData.varIdCond2;
        ctrlId.value = objData.ctrlId;
        defaultValue.value = objData.defaultValue;
        orderNum.value = objData.orderNum;

        let strMsg = '';
        switch (objData.fieldTypeId) {
          case enumFieldType.ClassificationField_10:
            isShowCtrl.value = true;
            if (IsNullOrEmpty(objData.fldIdCond1) == false) isShowCond1.value = true;
            if (IsNullOrEmpty(objData.fldIdCond2) == false) isShowCond2.value = true;
            break;
          case enumFieldType.ConditionField_16:
            isShowCtrl.value = true;
            if (IsNullOrEmpty(objData.fldIdCond1) == false) isShowCond1.value = true;
            if (IsNullOrEmpty(objData.fldIdCond2) == false) isShowCond2.value = true;
            break;
          case enumFieldType.SetField_17:
            isShowCtrl.value = true;
            if (IsNullOrEmpty(objData.fldIdCond1) == false) isShowCond1.value = true;
            if (IsNullOrEmpty(objData.fldIdCond2) == false) isShowCond2.value = true;
            break;
          case enumFieldType.OrderNumField_09:
            break;
          default:
            strMsg = `字段类型:${strFieldTypeName.value}在OnMounted没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }

        // if (IsNullOrEmpty(objData.dsTabId) == false) {
        //   await ddlDsTabId_Change(objData.dsTabId);
        // }

        // if (IsNullOrEmpty(objData.tabFeatureId4Ddl) == false) {
        //   selectedTabFeatureId.value = objData.tabFeatureId4Ddl;
        //   await ddlTabFeatureId4Ddl_Change(objData.tabFeatureId4Ddl);
        // }

        // await ddlVarTypeIdCond1_Change4Id(1, objData.varTypeIdCond1);
        // varIdCond1.value = objData.varIdCond1;

        //this.myonload();
      }
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
       * @param pobjViewFeatureFldsEN.js">数据传输的目的类对象</param>
       **/
      const PutDataToViewFeatureFldsClassV2 = (pobjViewFeatureFldsEN: clsViewFeatureFldsEN) => {
        // const strThisFuncName = this.PutDataToViewFeatureFldsClass.name;

        //pobjViewFeatureFldsEN.SetViewFeatureId(this.strViewFeatureId);
        //pobjViewFeatureFldsEN.SetReleFldId(this.strFldId);

        pobjViewFeatureFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjViewFeatureFldsEN.SetFieldTypeId(fieldTypeId.value); // 字段类型
        pobjViewFeatureFldsEN.SetReleFldId(releFldId.value); // 相关字段

        pobjViewFeatureFldsEN.SetInUse(true); // 字段类型
        pobjViewFeatureFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjViewFeatureFldsEN.SetDsTabId(refPubCombo_Edit.value.dsTabId); // 数据源表

        pobjViewFeatureFldsEN.SetTabFeatureId4Ddl(selectedTabFeatureId.value); // 数据源表

        pobjViewFeatureFldsEN.SetVarIdCond1(refPubCombo_Edit.value.varIdCond1); // 数据源表
        pobjViewFeatureFldsEN.SetVarIdCond2(refPubCombo_Edit.value.varIdCond2); // 数据源表
        pobjViewFeatureFldsEN.SetFldIdCond1(refPubCombo_Edit.value.fldIdCond1); // 数据源表
        pobjViewFeatureFldsEN.SetFldIdCond2(refPubCombo_Edit.value.fldIdCond2); // 数据源表

        pobjViewFeatureFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
        pobjViewFeatureFldsEN.SetCtrlId(ctrlId.value); // 控件Id
        pobjViewFeatureFldsEN.SetDefaultValue(defaultValue.value); // 缺省值
        pobjViewFeatureFldsEN.SetOrderNum(orderNum.value); // 序号
        // pobjViewFeatureFldsEN.SetVarId(varId.v); // 变量Id
        pobjViewFeatureFldsEN.SetUpdUser(clsPrivateSessionStorage.userId); // 修改者
        pobjViewFeatureFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      };
      const getObjData = () => {
        const objViewFeatureFlds = new clsViewFeatureFldsEN();
        PutDataToViewFeatureFldsClassV2(objViewFeatureFlds);

        return objViewFeatureFlds;
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      async function PutDataToViewFeatureFldsClassV3() {
        // const strThisFuncName = this.PutDataToViewFeatureFldsClass.name;
        const pobjViewFeatureFldsEN = new clsViewFeatureFldsEN();
        //pobjViewFeatureFldsEN.SetViewFeatureId(this.strViewFeatureId);
        //pobjViewFeatureFldsEN.SetReleFldId(this.strFldId);

        pobjViewFeatureFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjViewFeatureFldsEN.SetFieldTypeId(fieldTypeId.value); // 字段类型
        pobjViewFeatureFldsEN.SetReleFldId(releFldId.value); // 字段类型
        pobjViewFeatureFldsEN.SetInUse(true); // 字段类型

        pobjViewFeatureFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjViewFeatureFldsEN.SetDdlItemsOptionId(refPubCombo_Edit.value.itemsOptionId); // 数据源表

        pobjViewFeatureFldsEN.SetDsTabId(refPubCombo_Edit.value.dsTabId); // 数据源表

        pobjViewFeatureFldsEN.SetTabFeatureId4Ddl(refPubCombo_Edit.value.tabFeatureId4Ddl); // 数据源表

        pobjViewFeatureFldsEN.SetVarIdCond1(refPubCombo_Edit.value.varIdCond1); // 数据源表
        pobjViewFeatureFldsEN.SetVarIdCond2(refPubCombo_Edit.value.varIdCond2); // 数据源表
        pobjViewFeatureFldsEN.SetFldIdCond1(refPubCombo_Edit.value.fldIdCond1); // 数据源表
        pobjViewFeatureFldsEN.SetFldIdCond2(refPubCombo_Edit.value.fldIdCond2); // 数据源表

        pobjViewFeatureFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
        pobjViewFeatureFldsEN.SetCtrlId(ctrlId.value); // 控件Id
        pobjViewFeatureFldsEN.SetDefaultValue(defaultValue.value); // 缺省值
        pobjViewFeatureFldsEN.SetOrderNum(orderNum.value); // 序号
        pobjViewFeatureFldsEN.SetVarId(varId.value); // 变量Id
        pobjViewFeatureFldsEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
        pobjViewFeatureFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewFeatureFldsEN;
      }
      const ddlVarTypeIdCond1_Change4Id = async (intCondIndex: number, strVarTypeId: string) => {
        //const thisCtrl = event;
        //const ddlVarTypeId: HTMLSelectElement = <HTMLSelectElement>thisCtrl?.srcElement;

        // console.log(
        //   'ddlVarTypeIdCond1_SelectedIndexChanged--this.ddlVarTypeIdCond1:',
        //   strVarTypeIdCond1,
        // );

        let arrObjLst_Sel;
        switch (intCondIndex) {
          case 1:
            // ShowTrInDiv('trVarIdCond1');
            isShowCond1.value = true;

            arrObjLst_Sel = await GCVariable_GetObjLstCache();
            arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.varTypeId == strVarTypeId);
            arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.varName.localeCompare(y.varName));
            arrGCVariable1.value = arrObjLst_Sel;

            break;
          case 2:
            isShowCond2.value = true;

            arrObjLst_Sel = await GCVariable_GetObjLstCache();
            arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.varTypeId == strVarTypeId);
            arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.varName.localeCompare(y.varName));
            arrGCVariable2.value = arrObjLst_Sel;

            // await GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache(
            //   divVarSet.refDivEdit,
            //   'ddlVarIdCond2',
            //   strPrjId,
            //   strvarTypeIdCond2,
            // );
            break;
        }
      };
      return {
        BindDdl4EditRegion,
        ddlCtlTypeId_SelectedIndexChanged,
        PutDataToViewFeatureFldsClassV3,

        arrvFieldTab_Sim,
        arrCtlType,
        refDivEdit,
        refPubCombo_Edit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        arrvTabFeature_Sim,
        // ddlDsTabId_Change,
        releFldId,
        isShowCond1,
        isShowCond2,
        isShowCtrl,
        isNeedDefaultValue,
        isShowTabFeature,
        strFldNameCond1,
        strFldNameCond2,
        arrGCVariableType1,
        arrGCVariableType2,

        ddlVarTypeIdCond1_Change4Id,
        arrGCVariable1,
        arrGCVariable2,
        selectedTabFeatureId,

        ctlTypeId,

        ctrlId,
        defaultValue,
        varId,
        orderNum,
        getObjData,
        strFieldTypeName,
        strRelaFieldName,
        ddlVarTypeIdCond1_ref,
        ddlVarTypeIdCond2_ref,
        ShowViewFeatureFldsData,
        fieldTypeId,
        labelCaption,

        GetDataFromViewFeatureFldsClass,
        btnDelViewFeatureFld_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
      //this.myonload();
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //ViewFeatureFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewFeatureFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewFeatureFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      // getObjData1() {
      //   return this.objData;
      // },
    },
  });
</script>
<style scoped></style>
