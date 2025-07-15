<template>
  <!-- 编辑层 -->

  <div id="divEditLayout_PubCombo" ref="refDivEdit_PubCombo" class="tab_layout">
    <table
      id="tabPubCombo"
      style="width: 333px"
      class="table table-bordered table-hover table td table-sm"
    >
      <tr v-if="isForFeatureFld === false" id="trDdlItemsOptionId">
        <td class="text-right">
          <label id="lblDdlItemsOptionId" class="col-form-label text-right" style="width: 85px">
            下拉选项
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDdlItemsOptionId"
            v-model="itemsOptionId"
            class="form-control form-control-sm"
            style="width: 230px"
            @change="ddlDdlItemsOptionId_SelectedIndexChanged()"
          >
            <option
              v-for="(item, index) in arrDDLItemsOption"
              :key="index"
              :value="item.ddlItemsOptionId"
            >
              {{ item.ddlItemsOptionName }}
            </option></select
          >
        </td>
      </tr>
      <tr id="trDsTabId">
        <td class="text-right">
          <label id="lblDsTabId" class="col-form-label text-right" style="width: 85px">
            数据源表
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDsTabId"
            v-model="dsTabId"
            class="form-control form-control-sm"
            style="width: 230px"
            @change="ddlDsTabId_SelectedIndexChanged(dsTabId)"
            ><option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
              {{ item.tabName }}
            </option></select
          >
        </td>
      </tr>
      <tr id="trTabFeatureId4Ddl">
        <td class="text-right">
          <label id="lblTabFeatureId4Ddl" class="col-form-label text-right" style="width: 85px">
            下拉框功能
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlTabFeatureId4Ddl"
            v-model="tabFeatureId4Ddl"
            class="form-control form-control-sm"
            style="width: 230px"
            @change="ddlTabFeatureId4Ddl_SelectedIndexChanged"
            ><option
              v-for="(item, index) in arrvTabFeature_Sim"
              :key="index"
              :value="item.tabFeatureId"
            >
              {{ item.tabFeatureName }}
            </option></select
          >
        </td>
      </tr>
      <tr v-show="isShowFldIdCond1" id="trFldIdCon1d1">
        <td class="text-left" colspan="2">
          <label id="lblFldIdCond1" class="col-form-label text-left" style="width: 300px">
            条件1-字段
          </label>
          <input id="hidFldIdCond1" v-model="fldIdCond1" type="hidden" />
        </td>
      </tr>

      <tr v-show="isShowVarIdCond1" id="trVarIdCon1d1">
        <td class="text-right">
          <label id="lblVarIdCond1" class="col-form-label text-right" style="width: 85px">
            条件1-变量
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlVarIdCond1"
            v-model="varIdCond1"
            class="form-control form-control-sm"
            style="width: 180px"
          >
            <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
              {{ item.varName }}
            </option>
          </select>
          <button
            id="btnAddVar"
            type="button"
            class="btn btn-primary btn-sm"
            style="width: 50px"
            @click="btnQryRegionFlds_Edit_Click('AddVar', 'Cond1')"
            >{{ strSubmitButtonText }}</button
          >
        </td>
      </tr>
      <tr id="trFldIdCond2">
        <td class="text-left" colspan="2">
          <label id="lblFldIdCond2" class="col-form-label text-left" style="width: 300px">
            条件2-字段
          </label>
          <input id="hidFldIdCond2" type="hidden" />
        </td>
      </tr>

      <tr id="trVarIdCond2">
        <td class="text-right">
          <label id="lblVarIdCond2" class="col-form-label text-right" style="width: 85px">
            条件2-变量
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlVarIdCond2"
            v-model="varIdCond2"
            class="form-control form-control-sm"
            style="width: 190px"
          >
            <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
              {{ item.varName }}
            </option>
          </select>
          <button
            id="btnAddVar2"
            type="button"
            class="btn btn-primary btn-sm"
            style="width: 40px"
            @click="btnQryRegionFlds_Edit_Click('AddVar', 'Cond2')"
            >{{ strSubmitButtonText }}</button
          >
        </td>
      </tr>

      <tr v-if="isForFeatureFld === false" id="trDsDataTextFieldId">
        <td class="text-right">
          <label id="lblDsDataTextFieldId" class="col-form-label text-right" style="width: 85px">
            文本字段
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDsDataTextFieldId"
            v-model="dsDataTextFieldId"
            class="form-control form-control-sm"
            style="width: 230px"
          ></select>
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trDsDataValueFieldId">
        <td class="text-right">
          <label id="lblDsDataValueFieldId" class="col-form-label text-right" style="width: 85px">
            值字段
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDsDataValueFieldId"
            v-model="dsDataValueFieldId"
            class="form-control form-control-sm"
            style="width: 230px"
          ></select>
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trDsCondFieldId">
        <td class="text-right">
          <label id="lblDsCondFieldId" class="col-form-label text-right" style="width: 85px">
            条件字段
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDsCondFieldId"
            v-model="dsCondFieldId"
            class="form-control form-control-sm"
            style="width: 230px"
          ></select>
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trDsSortFieldId">
        <td class="text-right">
          <label id="lblDsSortFieldId" class="col-form-label text-right" style="width: 85px">
            排序字段
          </label>
        </td>
        <td class="text-left">
          <select
            id="ddlDsSortFieldId"
            v-model="dsSortFieldId"
            class="form-control form-control-sm"
            style="width: 230px"
          ></select>
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trDsCondStr">
        <td class="text-right">
          <label id="lblDsCondStr" class="col-form-label text-right" style="width: 85px">
            条件串
          </label>
        </td>
        <td class="text-left">
          <input
            id="txtDsCondStr"
            v-model="dsCondStr"
            class="form-control form-control-sm"
            style="width: 230px"
          />
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trDsSqlStr">
        <td class="text-right">
          <label id="lblDsSqlStr" class="col-form-label text-right" style="width: 85px">
            数据源SQL
          </label>
        </td>
        <td class="text-left">
          <input
            id="txtDsSqlStr"
            v-model="dsSqlStr"
            class="form-control form-control-sm"
            style="width: 230px"
          />
        </td>
      </tr>
      <tr v-if="isForFeatureFld === false" id="trItemsString">
        <td class="text-right">
          <label id="lblItemsString" class="col-form-label text-right" style="width: 85px">
            列表项串
          </label>
        </td>
        <td class="text-left">
          <input
            id="txtItemsString"
            v-model="itemsString"
            class="form-control form-control-sm"
            style="width: 230px"
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { clsGCVariableEN } from '../L0Entity/GeneCode/clsGCVariableEN';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';

  import QryRegionFlds_EditEx from '@/views/RegionManage/QryRegionFlds_EditEx';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import {
    clsDDLItemsOptionEN,
    enumDDLItemsOption,
  } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { refDivEdit_PubCombo } from '@/ts/components/pubComboVueShare';
  import { DDLItemsOption_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  import {
    vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache,
    vTabFeatureFlds_SimEx_SortFun_OrderNum,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeatureFlds_SimExWApi';
  import {
    CheckControlExistInDivObj,
    CheckControlExistInDivObjN,
    getTrObjByIdInDivObj,
    SetLabelHtmlByIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { pubComboEN } from '@/ts/components/pubComboEN';
  import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
  import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { vTabFeature_SimEx_GetObjLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
  import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
  import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { GCVariableEx_GetArrGCVariableByPrjIdCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';

  export default defineComponent({
    name: 'PubComboEdit',
    components: {
      // 组件注册
    },
    props: {
      isDialog: {
        type: Boolean,
        default: false,
      },
      isForFeatureFld: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const isShowFldIdCond1 = ref(false);
      const isShowVarIdCond1 = ref(false);

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[]>([]);
      const arrCtlType = ref<clsCtlTypeEN[]>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      const arrvTabFeature_Sim = ref<clsvTabFeature_SimEN[]>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);

      const strSubmitButtonText = ref('添加');
      const fldId = ref('');
      const outFldId = ref('');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const seqNum = ref(0);
      const inUse = ref(true);

      const itemsOptionId = ref('');
      const dsTabId = ref('');
      const tabFeatureId4Ddl = ref('');

      const fldIdCond1 = ref('');
      const fldIdCond2 = ref('');

      const varIdCond1 = ref('');

      const varIdCond2 = ref('');
      const dsDataTextFieldId = ref('');
      const dsDataValueFieldId = ref('');
      const dsCondFieldId = ref('');
      const dsSortFieldId = ref('');

      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const regionId = ref('');
      // const queryOptionId = ref('');

      onMounted(async () => {
        hideAllTr();
        await BindDdl4EditRegionInDiv();
        //this.myonload();
      });
      // /**
      //  * 设置绑定下拉框，针对字段:[dsTabId]
      //  * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      //  */
      // async function SetDdl_DsTabId4TabFeatureDdlInDiv(strPrjId: string, strCmPrjId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vPrjTab_SimEx_BindDdl_TabId4TabFeatureDdlInDivCache(
      //     refDivEdit_PubCombo.value,
      //     'ddlDsTabId',
      //     strPrjId,
      //     strCmPrjId,
      //   ); //编辑区域
      // }
      async function hideAllTr() {
        HideTrInDiv('trDsTabId');

        isShowVarIdCond1.value = false;
        HideTrInDiv('trVarIdCond2');
        if (props.isForFeatureFld == false) {
          HideTrInDiv('trDdlItemsOptionId');
          HideTrInDiv('trDsCondStr');
          HideTrInDiv('trDsSqlStr');
          HideTrInDiv('trItemsString');
        }
      }
      /** 函数功能:系统生成的Change事件函数
       (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
     */
      async function ddlDdlItemsOptionId_SelectedIndexChanged() {
        console.log('ddlDdlItemsOptionId_SelectedIndexChanged');
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        if (itemsOptionId.value == '' || itemsOptionId.value == '0') return;
        const strDdlItemsOptionId: string = itemsOptionId.value;
        HideTrInDiv('trDsTabId');
        if (props.isForFeatureFld == false) {
          HideTrInDiv('trDsCondStr');
          HideTrInDiv('trDsSqlStr');
          HideTrInDiv('trItemsString');
        }

        isShowVarIdCond1.value = false;
        HideTrInDiv('trVarIdCond2');

        switch (strDdlItemsOptionId) {
          case enumDDLItemsOption.DataSourceTable_02:
            ShowTrInDiv('trDsTabId');

            // await SetDdl_DsTabId4TabFeatureDdlInDiv(
            //   clsPrivateSessionStorage.currSelPrjId,
            //   strCmPrjId,
            // );
            arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN(
              strCmPrjId,
            );
            dsTabId.value = '0';
            break;
          case enumDDLItemsOption.ListItemString_01:
            ShowTrInDiv('trItemsString');
            break;
          case enumDDLItemsOption.SQLString_03:
            ShowTrInDiv('trDsSqlStr');
            break;
          case enumDDLItemsOption.TrueAndFalseList_04:
            break;
        }
      }

      // async function SetDdl_TabFeatureId4DdlByTabIdInDiv(strTabId: string) {
      //   //定义条件字段
      //   await vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache(
      //     refDivEdit_PubCombo.value,
      //     'ddlTabFeatureId4Ddl',
      //     strTabId,
      //     clsPrivateSessionStorage.cmPrjId,
      //   ); //编辑区域
      // }
      async function SetDdl_DsDataTextFieldId(strTabId: string) {
        //定义条件字段
        //const strPrjId = "";//定义条件字段

        await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
          refDivEdit_PubCombo.value,
          'ddlDsDataTextFieldId',
          strTabId,
        ); //编辑区域
      }
      /// <summary>
      /// 设置绑定下拉框，针对字段:[ds_DataValueFieldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
      /// </summary>
      async function SetDdl_DsDataValueFieldId(strTabId: string) {
        //定义条件字段
        await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
          refDivEdit_PubCombo.value,
          'ddlDsDataValueFieldId',
          strTabId,
        ); //编辑区域
      }

      /// <summary>
      /// 设置绑定下拉框，针对字段:[ds_CondFieldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
      /// </summary>
      async function SetDdl_DsCondFieldId(strTabId: string) {
        //定义条件字段
        //const strPrjId = "";//定义条件字段
        //const ddlDsCondFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsCondFieldId", objFieldTab_Cond, strPrjId);//编辑区域
        await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
          refDivEdit_PubCombo.value,
          'ddlDsCondFieldId',
          strTabId,
        ); //编辑区域
      }
      /// <summary>
      /// 设置绑定下拉框，针对字段:[ds_SortFieldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
      /// </summary>
      async function SetDdl_DsSortFieldId(strTabId: string) {
        //定义条件字段
        //const strPrjId = "";//定义条件字段
        //const ddlDsSortFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsSortFieldId", objFieldTab_Cond, strPrjId);//编辑区域
        await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
          refDivEdit_PubCombo.value,
          'ddlDsSortFieldId',
          strTabId,
        ); //编辑区域
      }
      /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
      async function ddlDsTabId_SelectedIndexChanged(strDsTabId: string) {
        // console.error('strDsTabId:(in ddlDsTabId_SelectedIndexChanged)', strDsTabId);
        // const strDsTabId = this.dsTabId;
        if (strDsTabId == '') strDsTabId = dsTabId.value;
        if (strDsTabId == '') return;
        if (strDsTabId == '0') {
          console.error('strDsTabId:', strDsTabId);
        }
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        await getArrvTabFeature_Sim(strDsTabId, strCmPrjId);
        if (props.isForFeatureFld == false) {
          await SetDdl_DsDataTextFieldId(strDsTabId);
          await SetDdl_DsDataValueFieldId(strDsTabId);
          await SetDdl_DsCondFieldId(strDsTabId);
          await SetDdl_DsSortFieldId(strDsTabId);
        }
      }
      /** 函数功能:把类对象的属性内容显示到界面上
      注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       如果在设置数据库时,就应该一级字段在前,二级字段在后
       (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
       <param name = "pobjQryRegionFldsEN.js">表实体类对象</param>
     */
      async function GetDataFromPubComboClass(pobjQryRegionFldsEN: pubComboEN) {
        console.log('GetDataFromPubComboClass--pobjQryRegionFldsEN:', pobjQryRegionFldsEN);
        // this.objPubFun4Ddl.divEdit = divVarSet.refDivEdit_PubCombo;

        await ddlCtlTypeId_SelectedIndexChanged(pobjQryRegionFldsEN.ctlTypeId);
        // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        pobjQryRegionFldsEN.dsTabId = Is0EqEmpty(pobjQryRegionFldsEN.dsTabId);
        if (props.isForFeatureFld == false) {
          itemsOptionId.value = pobjQryRegionFldsEN.ddlItemsOptionId; // 下拉选项
          await ddlDdlItemsOptionId_SelectedIndexChanged();

          if (IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false) {
            dsTabId.value = pobjQryRegionFldsEN.dsTabId; // 数据源表
            await ddlDsTabId_SelectedIndexChanged(pobjQryRegionFldsEN.dsTabId);
          }
          if (IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false) {
            tabFeatureId4Ddl.value = pobjQryRegionFldsEN.tabFeatureId4Ddl;
            await ddlTabFeatureId4Ddl_SelectedIndexChanged();

            // await GCVariableEx_BindDdl_VarIdInDivCache1(
            //   refDivEdit_PubCombo.value,
            //   'ddlVarIdCond1',
            //   strPrjId,
            // );
            // await GCVariableEx_BindDdl_VarIdInDivCache1(
            //   refDivEdit_PubCombo.value,
            //   'ddlVarIdCond2',
            //   strPrjId,
            // );
            // arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(
            //   clsPrivateSessionStorage.currSelPrjId,
            // ); //编辑区域
            console.log('pobjQryRegionFldsEN.varIdCond1-if:', pobjQryRegionFldsEN.varIdCond1);
            if (IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false) {
              varIdCond1.value = pobjQryRegionFldsEN.varIdCond1;
            }
            if (IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false) {
              varIdCond2.value = pobjQryRegionFldsEN.varIdCond2;
            }
            varIdCond1.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.varIdCond1); // '0';

            varIdCond2.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.varIdCond2);
          }
          dsCondStr.value = pobjQryRegionFldsEN.dsCondStr; // 条件串
          dsSqlStr.value = pobjQryRegionFldsEN.dsSqlStr; // 数据源SQL
          itemsString.value = pobjQryRegionFldsEN.itemsString; // 列表项串
        } else {
          if (IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false) {
            if (dsTabId.value != pobjQryRegionFldsEN.dsTabId)
              dsTabId.value = Is0EqEmpty(pobjQryRegionFldsEN.dsTabId); // 数据源表
            await ddlDsTabId_SelectedIndexChanged(pobjQryRegionFldsEN.dsTabId);
          }
          if (IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false) {
            tabFeatureId4Ddl.value = pobjQryRegionFldsEN.tabFeatureId4Ddl;
            await ddlTabFeatureId4Ddl_SelectedIndexChanged();

            // await GCVariableEx_BindDdl_VarIdInDivCache(
            //   refDivEdit_PubCombo.value,
            //   'ddlVarIdCond1',
            //   strPrjId,
            // );

            // await GCVariableEx_BindDdl_VarIdInDivCache(
            //   refDivEdit_PubCombo.value,
            //   'ddlVarIdCond2',
            //   strPrjId,
            // );
            // arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(
            //   clsPrivateSessionStorage.currSelPrjId,
            // ); //编辑区域
            // varIdCond1.value = '0';

            // varIdCond2.value = '0';
            console.log('pobjQryRegionFldsEN.varIdCond1-else:', pobjQryRegionFldsEN.varIdCond1);
            if (IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false) {
              varIdCond1.value = pobjQryRegionFldsEN.varIdCond1;
            }
            if (IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false) {
              varIdCond2.value = pobjQryRegionFldsEN.varIdCond2;
            }
            varIdCond1.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.varIdCond1); // '0';

            varIdCond2.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.varIdCond2);
          }
        }
        // await ddlTabFeatureId4Ddl_SelectedIndexChanged();
        console.log('isShowVarIdCond1.value:', isShowVarIdCond1.value);
        console.log('isShowFldIdCond1.value:', isShowFldIdCond1.value);
      }

      /** 函数功能:系统生成的Change事件函数
      (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
    */
      async function ddlCtlTypeId_SelectedIndexChanged(strCtlTypeId: string) {
        console.log(
          'ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId(in PubComboEdit):',
          strCtlTypeId,
        );

        HideTrInDiv('trDsTabId');
        HideTrInDiv('trTabFeatureId4Ddl');
        isShowVarIdCond1.value = false;
        HideTrInDiv('trVarIdCond2');
        isShowFldIdCond1.value = false;
        HideTrInDiv('trFldIdCond2');
        if (props.isForFeatureFld == false) {
          HideTrInDiv('trDdlItemsOptionId');
          HideTrInDiv('trDsCondStr');
          HideTrInDiv('trDsSqlStr');
          HideTrInDiv('trItemsString');
          HideTrInDiv('trDsDataTextFieldId');
          HideTrInDiv('trDsDataValueFieldId');
          HideTrInDiv('trDsCondFieldId');
          HideTrInDiv('trDsSortFieldId');
        }
        // HideTrInDiv('trVarId0');
        switch (strCtlTypeId) {
          case enumCtlType.DropDownList_06:
            if (props.isForFeatureFld == false) {
              ShowTrInDiv('trDdlItemsOptionId');
              // console.log('ShowTrInDiv(trDdlItemsOptionId)');
            }
            ShowTrInDiv('trTabFeatureId4Ddl');
            ShowTrInDiv('trDsTabId');

            break;
          case enumCtlType.DropDownList_Bool_18:
            ShowTrInDiv('trDdlItemsOptionId');
            itemsOptionId.value = enumDDLItemsOption.TrueAndFalseList_04;
            //$('#ddlDdlItemsOptionId').val(enumDDLItemsOption.TrueAndFalseList_04);
            break;

          case enumCtlType.GivenValue_35:
            HideTrInDiv('trDdlItemsOptionId');
            break;
          default:
            break;
        }
        await ddlTabFeatureId4Ddl_SelectedIndexChanged();
        console.log('isShowVarIdCond1.value:', isShowVarIdCond1.value);
        console.log('isShowFldIdCond1.value:', isShowFldIdCond1.value);
        //alert("Changed");
      }
      /**
       * 设置Label值
       **/
      function SetLabelValue(strLabel: string, value: string) {
        CheckControlExistInDivObj(refDivEdit_PubCombo.value, 'label', strLabel);
        const strId = strLabel;

        SetLabelHtmlByIdInDivObj(refDivEdit_PubCombo.value, strId, value);
      }
      /** 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
      async function ddlTabFeatureId4Ddl_SelectedIndexChanged() {
        // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        const strTabFeatureId4Ddl = tabFeatureId4Ddl.value;
        const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
          strTabFeatureId4Ddl,
          clsPrivateSessionStorage.currSelPrjId,
        );
        const arrTabFeatureFlds_Sel = arrTabFeatureFlds
          .filter(
            (x) =>
              x.fieldTypeId == enumFieldType.ConditionField_16 &&
              x.valueGivingModeId != enumValueGivingMode.DefaultValue_01,
          )
          .sort(vTabFeatureFlds_SimEx_SortFun_OrderNum);
        if (arrTabFeatureFlds_Sel.length == 2) {
          // ShowTrInDiv('t1rVarTypeIdCond1');
          // ShowTrInDiv('t1rVarTypeIdCond2');
          isShowVarIdCond1.value = true;
          ShowTrInDiv('trVarIdCond2');

          isShowFldIdCond1.value = true;
          ShowTrInDiv('trFldIdCond2');
          fldIdCond1.value = arrTabFeatureFlds_Sel[0].fldId;
          fldIdCond2.value = arrTabFeatureFlds_Sel[1].fldId;
          const strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(
            fldIdCond1.value,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strFldNameCond2 = await vFieldTab_Sim_GetNameByFldIdCache(
            fldIdCond2.value,
            clsPrivateSessionStorage.currSelPrjId,
          );
          SetLabelValue('lblFldIdCond1', Format('输入参数字段1:[{0}]的值', strFldNameCond1));
          SetLabelValue('lblFldIdCond2', Format('输入参数字段2:[{0}]的值', strFldNameCond2));
          // await GCVariableType_BindDdl_VarTypeIdInDivCache(refDivEdit_PubCombo.value, 'd1dlVarTypeIdCond1');
          // await GCVariableType_BindDdl_VarTypeIdInDivCache(refDivEdit_PubCombo.value, 'd1dlVarTypeIdCond2');
          // await GCVariableEx_BindDdl_VarIdInDivCache(
          //   refDivEdit_PubCombo.value,
          //   'ddlVarId1',
          //   strPrjId,
          // );
          // await GCVariableEx_BindDdl_VarIdInDivCache(
          //   refDivEdit_PubCombo.value,
          //   'ddlVarId2',
          //   strPrjId,
          // );
        } else if (arrTabFeatureFlds_Sel.length == 1) {
          // ShowTrInDiv('t1rVarTypeIdCond1');
          // HideTrInDiv('t1rVarTypeIdCond2');
          isShowVarIdCond1.value = true;
          HideTrInDiv('trVarIdCond2');
          isShowFldIdCond1.value = true;
          HideTrInDiv('trFldIdCond2');

          varIdCond2.value = '';
          fldIdCond1.value = arrTabFeatureFlds_Sel[0].fldId;
          fldIdCond2.value = '';
          const strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(
            fldIdCond1.value,
            clsPrivateSessionStorage.currSelPrjId,
          );
          SetLabelValue('lblFldIdCond1', Format('输入参数字段1:[{0}]的值', strFldNameCond1));
          // await GCVariableType_BindDdl_VarTypeIdInDivCache(refDivEdit_PubCombo.value, 'ddlVarTypeIdCond1');
          // await GCVariableEx_BindDdl_VarIdInDivCache(
          //   refDivEdit_PubCombo.value,
          //   'ddlVarIdCond1',
          //   strPrjId,
          // );
        } else {
          // HideTrInDiv('t1rVarTypeIdCond1');
          // HideTrInDiv('t1rVarTypeIdCond2');
          isShowVarIdCond1.value = false;
          HideTrInDiv('trVarIdCond2');
          isShowFldIdCond1.value = false;
          HideTrInDiv('trFldIdCond2');
        }
      }
      /**
       * 显示表格行 (tr))
       **/
      function ShowTrInDiv(strTr: string) {
        CheckControlExistInDivObjN(refDivEdit_PubCombo.value, 'tr', strTr);
        const strId = strTr;

        const objTr = getTrObjByIdInDivObj(refDivEdit_PubCombo.value, strId);
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
        try {
          CheckControlExistInDivObjN(refDivEdit_PubCombo.value, 'tr', strTr);
          const strId = strTr;
          // objDiv.find(strId).hide();
          const objTr = getTrObjByIdInDivObj(refDivEdit_PubCombo.value, strId);
          if (objTr) {
            // 显示表行
            objTr.style.display = 'none';
          } else {
            // 表行不存在
            console.log(`表行:${strId}不存在`);
          }
        } catch (e) {
          console.log(e);
        }
      }

      /**
       * 获取绑定下拉框的数据
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
       * @param objDDL:需要绑定当前表的下拉框

      */
      async function getArrDDLItemsOption() {
        const arrObjLstSel = await DDLItemsOption_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrDDLItemsOption.value.length = 0;
        const obj0 = new clsDDLItemsOptionEN();
        obj0.ddlItemsOptionId = '0';
        obj0.ddlItemsOptionName = '请选择下拉框列表选项...';
        arrDDLItemsOption.value.push(obj0);
        arrObjLstSel.forEach((x) => arrDDLItemsOption.value.push(x));
        itemsOptionId.value = '0';
      }

      async function getArrvTabFeature_Sim(strDsTabId: string, strCmPrjId: string) {
        const arrObjLstSel = await vTabFeature_SimEx_GetObjLstByTabIdCache(strDsTabId, strCmPrjId);
        if (arrObjLstSel == null) return;
        arrvTabFeature_Sim.value.length = 0;
        const obj0 = new clsvTabFeature_SimEN();
        obj0.tabFeatureId = '0';
        obj0.tabFeatureName = '表功能...';
        arrvTabFeature_Sim.value.push(obj0);
        arrObjLstSel.forEach((x) => arrvTabFeature_Sim.value.push(x));
        tabFeatureId4Ddl.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
    */
      async function BindDdl4EditRegionInDiv() {
        // await this.SetDdl_DdlItemsOptionIdInDiv(); //编辑区域
        if (props.isForFeatureFld == false) {
          await getArrDDLItemsOption(); //编辑区域
        }
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        // // await this.SetDdl_DsTabIdInDiv(strCmPrjId); //编辑区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN(strCmPrjId);

        arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(
          clsPrivateSessionStorage.currSelPrjId,
        ); //编辑区域
        varIdCond1.value = '0';

        varIdCond2.value = '0';
      }

      const dialogWidth = ref('800px'); // 设置对话框的宽度

      return {
        GetDataFromPubComboClass,
        ddlTabFeatureId4Ddl_SelectedIndexChanged,
        ddlCtlTypeId_SelectedIndexChanged,
        ddlDsTabId_SelectedIndexChanged,
        ddlDdlItemsOptionId_SelectedIndexChanged,
        hideAllTr,
        getArrvTabFeature_Sim,
        strSubmitButtonText,
        dialogWidth,
        refDivEdit_PubCombo,
        fldId,
        outFldId,
        labelCaption,
        colSpan,
        width,
        seqNum,
        inUse,

        itemsOptionId,
        dsTabId,
        tabFeatureId4Ddl,
        fldIdCond1,
        fldIdCond2,

        varIdCond1,

        varIdCond2,
        dsDataTextFieldId,
        dsDataValueFieldId,
        dsCondFieldId,
        dsSortFieldId,

        dsCondStr,
        dsSqlStr,
        itemsString,
        regionId,

        arrvFieldTab_Sim,
        arrCtlType,
        arrDDLItemsOption,
        arrvPrjTab_Sim,
        arrvTabFeature_Sim,
        arrGCVariable,
        BindDdl4EditRegionInDiv,
        isShowFldIdCond1,
        isShowVarIdCond1,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQryRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        QryRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
