<template>
  <!-- 编辑层 -->
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <!-- 编辑层 -->
        <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
          <table
            id="tabEdit"
            style="width: 400px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr id="trInUse">
              <td class="text-right">
                <label id="lblFeatureId" class="col-form-label text-right" style="width: 90px"
                  >功能
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlFeatureId"
                  v-model="featureId"
                  class="form-control form-control-sm"
                  style="width: 120px"
                  @change="ddlFeatureId_SelectedIndexChanged($event)"
                >
                  <option
                    v-for="(item, index) in arrPrjFeature"
                    :key="index"
                    :value="item.featureId"
                  >
                    {{ item.featureName }}
                  </option></select
                >
              </td>
              <td class="text-left" ColSpan="2">
                <span class="form-control form-control-sm" style="width: 100px">
                  <input id="chkInUse" v-model="inUse" type="checkbox" Text="在用" /><label
                    for="chkInUse"
                    >在用</label
                  ></span
                >
              </td>
            </tr>
            <tr id="trKeyIdGetModeId">
              <td class="text-right">
                <label id="lblKeyIdGetModeId" class="col-form-label text-right" style="width: 90px"
                  >获取方式
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlKeyIdGetModeId"
                  v-model="keyIdGetModeId"
                  class="form-control form-control-sm"
                  style="width: 280px"
                  @change="ddlKeyIdGetModeId_SelectedIndexChanged($event)"
                >
                  <option
                    v-for="(item, index) in arrGCVariableType"
                    :key="index"
                    :value="item.varTypeId"
                  >
                    {{ item.varTypeName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trSeqNum">
              <td class="text-right">
                <label id="lblCtlTypeId" class="col-form-label text-right" style="width: 90px"
                  >控件类型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlCtlTypeId"
                  v-model="ctlTypeId"
                  class="form-control form-control-sm"
                  style="width: 120px"
                  @change="ddlCtlTypeId_SelectedIndexChanged($event)"
                >
                  <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                    {{ item.ctlTypeName }}
                  </option></select
                >
              </td>
              <td class="text-right">
                <label id="lblSeqNum" class="col-form-label text-right" style="width: 90px"
                  >序号
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtSeqNum"
                  v-model.number="seqNum"
                  class="form-control form-control-sm"
                  style="width: 80px"
                />
              </td>
            </tr>
            <tr id="trButtonName">
              <td class="text-right">
                <label id="lblButtonName" class="col-form-label text-right" style="width: 90px"
                  >按钮名称
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtButtonName"
                  v-model="buttonName"
                  class="form-control form-control-sm"
                  style="width: 280px"
                />
              </td>
            </tr>
            <tr id="trText">
              <td class="text-right">
                <label id="lblText" class="col-form-label text-right" style="width: 90px"
                  >文本
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtText"
                  v-model="text"
                  class="form-control form-control-sm"
                  style="width: 280px"
                />
              </td>
            </tr>
            <tr id="trWidth">
              <td class="text-right">
                <label id="lblCssClass" class="col-form-label text-right" style="width: 90px"
                  >样式表
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtCssClass"
                  v-model="cssClass"
                  class="form-control form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label id="lblWidth" class="col-form-label text-right" style="width: 90px"
                  >宽
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtWidth"
                  v-model.number="width"
                  class="form-control form-control-sm"
                  style="width: 80px"
                />
              </td>
            </tr>
            <tr id="trViewImplId">
              <td class="text-right">
                <label id="lblViewImplId" class="col-form-label text-right" style="width: 90px"
                  >实现区域
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlViewImplId"
                  v-model="viewImplId"
                  class="form-control form-control-sm"
                  style="width: 280px"
                >
                  <option
                    v-for="(item, index) in arrViewImplementation"
                    :key="index"
                    :value="item.viewImplId"
                  >
                    {{ item.viewImplName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trTabFeatureId">
              <td class="text-right">
                <label id="lblTabFeatureId" class="col-form-label text-right" style="width: 90px"
                  >表功能
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlTabFeatureId"
                  v-model="tabFeatureId"
                  class="form-control form-control-sm"
                  style="width: 280px"
                >
                  <option
                    v-for="(item, index) in arrvTabFeature_Sim"
                    :key="index"
                    :value="item.tabFeatureId"
                  >
                    {{ item.tabFeatureName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trFieldTypeId">
              <td class="text-right">
                <label id="lblFieldTypeId" class="col-form-label text-right" style="width: 90px"
                  >字段类型
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlFieldTypeId"
                  v-model="fieldTypeId"
                  class="form-control form-control-sm"
                  style="width: 280px"
                >
                  <option
                    v-for="(item, index) in arrFieldType"
                    :key="index"
                    :value="item.fieldTypeId"
                  >
                    {{ item.fieldTypeName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trReleFldId">
              <td class="text-right">
                <label id="lblReleFldId" class="col-form-label text-right" style="width: 90px"
                  >相关字段
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlReleFldId"
                  v-model="releFldId"
                  class="form-control form-control-sm"
                  style="width: 280px"
                >
                  <option
                    v-for="(item, index) in arrvFieldTab_Sim"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trDefaultValue">
              <td class="text-right">
                <label
                  id="lblValueGivingModeId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >给值方式
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlValueGivingModeId"
                  v-model="valueGivingModeId"
                  class="form-control form-control-sm"
                  style="width: 120px"
                  @change="ddlValueGivingModeId_SelectedIndexChanged($event)"
                >
                  <option
                    v-for="(item, index) in arrValueGivingMode"
                    :key="index"
                    :value="item.valueGivingModeId"
                  >
                    {{ item.valueGivingModeName }}
                  </option></select
                >
              </td>
              <td class="text-right">
                <label id="lblDefaultValue" class="col-form-label text-right" style="width: 90px"
                  >缺省值
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtDefaultValue"
                  v-model="defaultValue"
                  class="form-control form-control-sm"
                  style="width: 80px"
                />
              </td>
            </tr>
            <tr id="trFuncName">
              <td class="text-right">
                <label id="lblFuncName" class="col-form-label text-right" style="width: 90px"
                  >调用函数
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtFuncName"
                  v-model="funcName"
                  class="form-control form-control-sm"
                  style="width: 280px"
                />
              </td>
            </tr>
          </table>
        </div>

        <div class="modal-footer">
          <button
            id="btnCancelDGRegionFlds"
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
            >{{ strCancelButtonText }}</button
          >
          <button
            id="btnSubmitDGRegionFlds"
            type="button"
            class="btn btn-primary"
            @click="btnFeatureRegionFlds_Edit_Click('Submit', '')"
            >{{ strSubmitButtonText }}</button
          >
        </div>
      </a-modal>
    </template>
    <template v-else>
      <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
        <table id="tabEdit" style="width: 333px" class="border border-info table-bordered">
          <tr>
            <td colspan="4" class="text-right">
              <button
                id="btnSubmitFeatureRegionFlds"
                type="button"
                class="btn btn-primary"
                @click="btnFeatureRegionFlds_Edit_Click('Submit', '')"
                >{{ strSubmitButtonText }}</button
              >
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-right">
              <label id="lblFeatureId" class="col-form-label-sm text-right" style="width: 70px">
                功能
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFeatureId"
                v-model="featureId"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlFeatureId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrPrjFeature" :key="index" :value="item.featureId">
                  {{ item.featureName }}
                </option></select
              >
            </td>
            <td class="text-left" colSpan="2">
              <span class="form-control form-control-sm" style="width: 100px">
                <input id="chkInUse" type="checkbox" Text="在用" /><label for="chkInUse"
                  >在用</label
                >
              </span>
            </td>
          </tr>
          <tr id="trKeyIdGetModeId">
            <td class="text-right">
              <label
                id="lblKeyIdGetModeId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                获取方式
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlKeyIdGetModeId"
                v-model="keyIdGetModeId"
                class="form-control form-control-sm"
                style="width: 240px"
                @change="ddlKeyIdGetModeId_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrGCVariableType"
                  :key="index"
                  :value="item.varTypeId"
                >
                  {{ item.varTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label id="lblCtlTypeId" class="col-form-label-sm text-right" style="width: 70px">
                控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtlTypeId"
                v-model="ctlTypeId"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlCtlTypeId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label id="lblSeqNum" class="col-form-label-sm text-right" style="width: 40px">
                序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSeqNum"
                v-model.number="seqNum"
                class="form-control form-control-sm"
                style="width: 70px"
              />
            </td>
          </tr>
          <tr id="trButtonName">
            <td class="text-right">
              <label id="lblButtonName" class="col-form-label-sm text-right" style="width: 70px">
                按钮名称
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtButtonName"
                v-model="buttonName"
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr>
          <tr id="trCommandName">
            <td class="text-right">
              <label id="lblCommandName" class="col-form-label-sm text-right" style="width: 70px">
                命令名
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtCommandName"
                v-model="commandName"
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr>
          <tr id="trText">
            <td class="text-right">
              <label id="lblText" class="col-form-label-sm text-right" style="width: 70px">
                文本
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtText"
                v-model="text"
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr>

          <tr id="trViewImplId">
            <td class="text-right">
              <label id="lblViewImplId" class="col-form-label-sm text-right" style="width: 70px">
                实现区域
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlViewImplId"
                v-model="viewImplId"
                class="form-control form-control-sm"
                style="width: 240px"
              >
                <option
                  v-for="(item, index) in arrViewImplementation"
                  :key="index"
                  :value="item.viewImplId"
                >
                  {{ item.viewImplName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trTabFeatureId">
            <td class="text-right">
              <label id="lblTabFeatureId" class="col-form-label-sm text-right" style="width: 70px">
                表功能
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlTabFeatureId"
                v-model="tabFeatureId"
                class="form-control form-control-sm"
                style="width: 240px"
              >
                <option
                  v-for="(item, index) in arrvTabFeature_Sim"
                  :key="index"
                  :value="item.tabFeatureId"
                >
                  {{ item.tabFeatureName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFieldTypeId">
            <td class="text-right">
              <label id="lblFieldTypeId" class="col-form-label-sm text-right" style="width: 70px">
                字段类型
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlFieldTypeId"
                v-model="fieldTypeId"
                class="form-control form-control-sm"
                style="width: 240px"
              >
                <option
                  v-for="(item, index) in arrFieldType"
                  :key="index"
                  :value="item.fieldTypeId"
                >
                  {{ item.fieldTypeName }}
                </option></select
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
              <select
                id="ddlReleFldId"
                v-model="releFldId"
                class="form-control form-control-sm"
                style="width: 240px"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trDefaultValue">
            <td class="text-right">
              <label
                id="lblValueGivingModeId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                给值方式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlValueGivingModeId"
                v-model="valueGivingModeId"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlValueGivingModeId_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrValueGivingMode"
                  :key="index"
                  :value="item.valueGivingModeId"
                >
                  {{ item.valueGivingModeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label id="lblDefaultValue" class="col-form-label-sm text-right" style="width: 50px">
                缺省值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDefaultValue"
                v-model="defaultValue"
                class="form-control form-control-sm"
                style="width: 70px"
              />
            </td>
          </tr>

          <tr id="trFuncName">
            <td class="text-right">
              <label id="lblFuncName" class="col-form-label-sm text-right" style="width: 70px">
                调用函数
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtFuncName"
                v-model="funcName"
                class="form-control form-control-sm"
                style="width: 240px"
              />
            </td>
          </tr>
          <tr id="trWidth">
            <td class="text-right">
              <label id="lblCssClass" class="col-form-label-sm text-right" style="width: 70px">
                样式表
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCssClass"
                v-model="cssClass"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label id="lblWidth" class="col-form-label-sm text-right" style="width: 40px">
                宽
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtWidth"
                v-model.number="width"
                class="form-control form-control-sm"
                style="width: 70px"
              />
            </td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  // import  FeatureRegionFldsCRUDEx from '@/views/RegionManage/FeatureRegionFldsCRUDEx';
  import FeatureRegionFlds_EditEx from '@/views/RegionManage/FeatureRegionFlds_EditEx';
  import {
    FeatureTypeId_Static,
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/FeatureRegionFldsVueShare';
  import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { FeatureRegionFlds_Edit } from '@/viewsBase/RegionManage/FeatureRegionFlds_Edit';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { ValueGivingMode_GetArrValueGivingMode } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { FieldType_GetArrFieldType } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  import { vTabFeature_SimEx_GetArrvTabFeature_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
  import { ViewImplementation_GetArrViewImplementation } from '@/ts/L3ForWApi/PrjInterface/clsViewImplementationWApi';
  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { GCVariableType_GetArrGCVariableType } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
  import { PrjFeature_GetArrPrjFeatureByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
  import { clsValueGivingModeEN } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsPrjFeatureEN, enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
  import { clsViewImplementationEN } from '@/ts/L0Entity/PrjInterface/clsViewImplementationEN';
  import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
  import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
  import { useUserStore } from '@/store/modulesShare/user';
  import {
    HideTrInDivObj,
    SetSelectValueByIdInDivObj,
    ShowTrInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { enumQueryOption } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
  import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';

  export default defineComponent({
    name: 'FeatureRegionFldsEdit',
    components: {
      // 组件注册
    },
    props: {
      isDialog: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const userStore = useUserStore();
      const featureId = ref('');
      const inUse = ref(true);
      const keyIdGetModeId = ref('');
      const ctlTypeId = ref('');
      const seqNum = ref(0);
      const buttonName = ref('');
      const text = ref('');
      const regionId = ref('');
      const cssClass = ref('');
      const width = ref(0);
      const viewImplId = ref('');
      const tabFeatureId = ref('');
      const fieldTypeId = ref('');
      const releFldId = ref('');
      const valueGivingModeId = ref('');
      const defaultValue = ref('');
      const funcName = ref('');
      const updUser = ref('');
      const updDate = ref('');
      const commandName = ref('');

      const queryOptionId = ref(enumQueryOption.EqualQuery_01);
      const arrPrjFeature = ref<clsPrjFeatureEN[] | null>([]);
      const arrGCVariableType = ref<clsGCVariableTypeEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrViewImplementation = ref<clsViewImplementationEN[] | null>([]);
      const arrvTabFeature_Sim = ref<clsvTabFeature_SimEN[] | null>([]);
      const arrFieldType = ref<clsFieldTypeEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrValueGivingMode = ref<clsValueGivingModeEN[] | null>([]);

      onMounted(async () => {
        // await BindDdl4EditRegionInDiv();
        //this.myonload();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        if (strTabId_Static == '') {
          const strMsg = Format('FeatureRegionFldsEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        arrPrjFeature.value = await PrjFeature_GetArrPrjFeatureByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //编辑区域
        featureId.value = '0';

        arrGCVariableType.value = await GCVariableType_GetArrGCVariableType(); //编辑区域
        keyIdGetModeId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        arrViewImplementation.value = await ViewImplementation_GetArrViewImplementation(); //编辑区域
        viewImplId.value = '0';

        arrvTabFeature_Sim.value = await vTabFeature_SimEx_GetArrvTabFeature_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        tabFeatureId.value = '0';

        arrFieldType.value = await FieldType_GetArrFieldType(); //编辑区域
        fieldTypeId.value = '0';

        //  await this.SetDdl_ReleFldIdByTabIdInDiv(strTabId); //编辑区域
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        releFldId.value = '0';

        arrValueGivingMode.value = await ValueGivingMode_GetArrValueGivingMode(); //编辑区域
        valueGivingModeId.value = '0';

        // public async B1indDdl4EditRegionInDiv() {
      }

      /**
       * 设置绑定下拉框，针对字段:[releFldId]
       * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
       */
      // async function SetDdl_ReleFldIdByTabIdInDiv(strTabId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlReleFldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFeatureRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFeatureRegionFldsObj() {
        const pobjFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        pobjFeatureRegionFldsEN.SetFeatureId(featureId.value); // 功能
        pobjFeatureRegionFldsEN.SetInUse(inUse.value); // 在用
        pobjFeatureRegionFldsEN.SetKeyIdGetModeId(keyIdGetModeId.value); // 获取方式
        pobjFeatureRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjFeatureRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 序号
        pobjFeatureRegionFldsEN.SetButtonName(buttonName.value); // 按钮名称
        pobjFeatureRegionFldsEN.SetText(text.value); // 文本
        pobjFeatureRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjFeatureRegionFldsEN.SetCssClass(cssClass.value); // 样式表
        pobjFeatureRegionFldsEN.SetWidth(Number(width.value)); // 宽
        pobjFeatureRegionFldsEN.SetViewImplId(viewImplId.value); // 实现区域
        pobjFeatureRegionFldsEN.SetTabFeatureId(tabFeatureId.value); // 表功能
        pobjFeatureRegionFldsEN.SetFieldTypeId(fieldTypeId.value); // 字段类型
        pobjFeatureRegionFldsEN.SetReleFldId(releFldId.value); // 相关字段
        pobjFeatureRegionFldsEN.SetValueGivingModeId(valueGivingModeId.value); // 给值方式
        pobjFeatureRegionFldsEN.SetDefaultValue(defaultValue.value); // 缺省值
        pobjFeatureRegionFldsEN.SetFuncName(funcName.value); // 调用函数
        pobjFeatureRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFeatureRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

        pobjFeatureRegionFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
        pobjFeatureRegionFldsEN.SetCommandName(commandName.value); // 命令名
        return pobjFeatureRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFeatureRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromFeatureRegionFldsObj(
        pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
      ) {
        const strThisFuncName = ShowDataFromFeatureRegionFldsObj;
        featureId.value = pobjFeatureRegionFldsEN.featureId; // 功能
        const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(featureId.value);
        if (objPrjFeature == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0})',

            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        let strMsg;
        switch (featureId.value) {
          case enumPrjFeature.AddNewRecordWithMaxId_0183:
          case enumPrjFeature.AddNewRecord_0136:
          case enumPrjFeature.AddNewRecord_0197:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); // 'divEdit_Loc_Sub');

            break;
          case enumPrjFeature.DetailRecord_0239:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); // 'divEdit_Loc_Sub');

            break;
          case enumPrjFeature.CopyRecord_0141:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); //HideDiv('divEdit_Loc_Sub');

            break;
          case enumPrjFeature.UpdateRecord_0137:
          case enumPrjFeature.UpdateRecord_Gv_0174:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); //HideDiv('divEdit_Loc_Sub');
            break;
          case enumPrjFeature.SetFieldValue_0148:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // ShowDivObj(refDivEdit);
            HideTrInDivObj(refDivEdit.value, 'trTabFeatureId');
            // HideTrInDivObj(refDivEdit.value, 'trOrderNum');

            break;
          case enumPrjFeature.AdjustOrderNum_1196:
            ShowTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // ShowDivObj(refDivEdit);
            ShowTrInDivObj(refDivEdit.value, 'trTabFeatureId');
            // HideTrInDivObj(refDivEdit.value, 'trOrderNum');
            // HideTrInDivObj(refDivEdit.value, 'trDdlItemsOptionId');

            break;

          case enumPrjFeature.DelRecord_0138:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); //HideDiv('divEdit_Loc_Sub');
            break;
          case enumPrjFeature.Query_0139:
          case enumPrjFeature.ExportToFile_0143:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            // HideDivObj(refDivEdit); //HideDiv('divEdit_Loc_Sub');
            break;
          case enumPrjFeature.DefaultFeature_0240:
            HideTrInDivObj(refDivEdit.value, 'trKeyIdGetModeId');
            HideTrInDivObj(refDivEdit.value, 'trFieldTypeId');
            HideTrInDivObj(refDivEdit.value, 'trReleFldId');
            HideTrInDivObj(refDivEdit.value, 'trDefaultValue');
            break;
          default:
            strMsg = Format(
              '功能:[{0}({1})] 在函数({2})中没有被处理！',
              objPrjFeature.featureName,
              objPrjFeature.featureId,

              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            break;
        }

        featureId.value = pobjFeatureRegionFldsEN.featureId; // 功能
        inUse.value = pobjFeatureRegionFldsEN.inUse; // 在用
        keyIdGetModeId.value = pobjFeatureRegionFldsEN.keyIdGetModeId; // 获取方式
        ctlTypeId.value = pobjFeatureRegionFldsEN.ctlTypeId; // 控件类型
        seqNum.value = pobjFeatureRegionFldsEN.seqNum; // 序号
        buttonName.value = pobjFeatureRegionFldsEN.buttonName; // 按钮名称
        text.value = pobjFeatureRegionFldsEN.text; // 文本
        cssClass.value = pobjFeatureRegionFldsEN.cssClass; // 样式表
        width.value = pobjFeatureRegionFldsEN.width; // 宽
        viewImplId.value = pobjFeatureRegionFldsEN.viewImplId; // 实现区域
        tabFeatureId.value = pobjFeatureRegionFldsEN.tabFeatureId; // 表功能
        fieldTypeId.value = pobjFeatureRegionFldsEN.fieldTypeId; // 字段类型
        releFldId.value = pobjFeatureRegionFldsEN.releFldId; // 相关字段
        valueGivingModeId.value = pobjFeatureRegionFldsEN.valueGivingModeId; // 给值方式
        defaultValue.value = pobjFeatureRegionFldsEN.defaultValue; // 缺省值
        funcName.value = pobjFeatureRegionFldsEN.funcName; // 调用函数

        //this.regionId = pobjFeatureRegionFldsEN.regionId;// 区域Id

        commandName.value = pobjFeatureRegionFldsEN.commandName; // 命令名
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        featureId.value = '0';
        inUse.value = false;
        keyIdGetModeId.value = '0';
        ctlTypeId.value = '0';
        seqNum.value = 0;
        buttonName.value = '';
        text.value = '';
        cssClass.value = '';
        width.value = 0;
        viewImplId.value = '0';
        tabFeatureId.value = '0';
        fieldTypeId.value = '0';
        releFldId.value = '0';
        valueGivingModeId.value = '0';
        defaultValue.value = '';
        funcName.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let returnKeyId = '';
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsFeatureRegionFldsEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (FeatureRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFeatureRegionFldsEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FeatureRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFeatureRegionFldsEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FeatureRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FeatureRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsFeatureRegionFldsEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('功能区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FeatureRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: FeatureRegionFlds_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      const isShowRelaFld = ref(false);

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFeatureRegionFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFeatureRegionFlds':
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
          case 'btnCancelFeatureRegionFlds':
            return strCancelButtonText.value;
          case 'btnSubmitFeatureRegionFlds':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataFeatureRegionFldsObj,
        ShowDataFromFeatureRegionFldsObj,
        Clear,
        btnSubmit_Click,
        featureId,
        inUse,
        keyIdGetModeId,
        ctlTypeId,
        seqNum,
        buttonName,
        text,
        regionId,
        cssClass,
        width,
        viewImplId,
        tabFeatureId,
        fieldTypeId,
        releFldId,
        valueGivingModeId,
        defaultValue,
        funcName,
        updUser,
        updDate,
        commandName,
        arrPrjFeature,
        arrGCVariableType,
        arrCtlType,
        arrViewImplementation,
        arrvTabFeature_Sim,
        arrFieldType,
        arrvFieldTab_Sim,
        arrValueGivingMode,

        SetButtonText,
        GetButtonText,
        isShowRelaFld,
        queryOptionId,
        BindDdl4EditRegionInDiv,
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
        //FeatureRegionFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFeatureRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        FeatureRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_FeatureRegionFlds(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new FeatureRegionFlds_EditEx(new FeatureRegionFldsCRUDEx());
        // objPage.btnSubmit_Click();
      },
      // 方法定义

      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlFeatureId_SelectedIndexChanged(e: Event) {
        console.log(e);

        console.log('ddlFeatureId_SelectedIndexChanged--this.featureId:', this.featureId);

        HideTrInDivObj(this.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
        HideTrInDivObj(this.refDivEdit, 'trDsTabId');
        HideTrInDivObj(this.refDivEdit, 'trDsCondStr');
        HideTrInDivObj(this.refDivEdit, 'trDsSqlStr');
        HideTrInDivObj(this.refDivEdit, 'trItemsString');
        HideTrInDivObj(this.refDivEdit, 'trDsDataTextFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsDataValueFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsCondFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsSortFieldId');
        HideTrInDivObj(this.refDivEdit, 'trVarId0');
        switch (this.featureId) {
          case enumPrjFeature.CopyRecord_0141:
          case enumPrjFeature.CopyRecord_0198:
            ShowTrInDivObj(this.refDivEdit, 'trKeyIdGetModeId');
            //this.keyIdGetModeId = enumGCKeyIdGetMode.
            // ShowTrInDivObj(this.refDivEdit,'trVarId0');
            break;
          case enumCtlType.DropDownList_06:
            ShowTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');

            this.queryOptionId = enumQueryOption.EqualQuery_01;
            break;
          case enumCtlType.DropDownList_Bool_18:
            ShowTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
            SetSelectValueByIdInDivObj(
              this.refDivEdit,
              'ddlDdlItemsOptionId',
              enumDDLItemsOption.TrueAndFalseList_04,
            );
            break;
          case enumCtlType.TextBox_16:
            this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            break;
          case enumCtlType.TextArea_41:
            this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            break;
          case enumCtlType.GivenValue_35:
            HideTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
            break;
          default:
            break;
        }

        //alert("Changed");
      },
      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlKeyIdGetModeId_SelectedIndexChanged(e: Event) {
        console.log(e);

        alert('请在扩展层:FeatureRegionFlds_EditEx中重写该函数！');
      },
      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlCtlTypeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        console.log('ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:', this.ctlTypeId);
        HideTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
        HideTrInDivObj(this.refDivEdit, 'trDsTabId');
        HideTrInDivObj(this.refDivEdit, 'trDsCondStr');
        HideTrInDivObj(this.refDivEdit, 'trDsSqlStr');
        HideTrInDivObj(this.refDivEdit, 'trItemsString');
        HideTrInDivObj(this.refDivEdit, 'trDsDataTextFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsDataValueFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsCondFieldId');
        HideTrInDivObj(this.refDivEdit, 'trDsSortFieldId');
        HideTrInDivObj(this.refDivEdit, 'trVarId0');
        switch (this.ctlTypeId) {
          case enumCtlType.ViewVariable_38:
            ShowTrInDivObj(this.refDivEdit, 'trVarId0');
            break;
          // case enumCtlType.sessionStorage_40:
          //   ShowTrInDivObj(this.refDivEdit, 'trVarId0');
          //   break;
          case enumCtlType.DropDownList_06:
            ShowTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
            this.queryOptionId = enumQueryOption.EqualQuery_01;
            break;
          case enumCtlType.DropDownList_Bool_18:
            ShowTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
            SetSelectValueByIdInDivObj(
              this.refDivEdit,
              'ddlDdlItemsOptionId',
              enumDDLItemsOption.TrueAndFalseList_04,
            );
            break;
          case enumCtlType.TextBox_16:
            this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            break;
          case enumCtlType.TextArea_41:
            this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            break;
          case enumCtlType.GivenValue_35:
            HideTrInDivObj(this.refDivEdit, 'trDdlItemsOptionId');
            break;
          default:
            break;
        }

        //alert("Changed");
      },
      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlValueGivingModeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在扩展层:FeatureRegionFlds_EditEx中重写该函数！');
      },
    },
  });
</script>
<style scoped></style>
