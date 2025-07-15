<template>
  <!-- 编辑层 -->
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <!-- 编辑层 -->
        <div id="divEditLayout_Dialog" ref="refDivEdit" class="tab_layout">
          <table
            id="tabEdit"
            style="width: 333px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr>
              <td colspan="2" class="text-right">
                <button
                  id="btnSubmitQryRegionFlds"
                  type="button"
                  class="btn btn-primary"
                  @click="btnQryRegionFlds_Edit_Click('Submit', '')"
                  >{{ strSubmitButtonText }}</button
                >
              </td>
            </tr>
            <tr id="trFldId">
              <td class="text-right">
                <label id="lblFldId" class="col-form-label text-right" style="width: 85px">
                  字段Id
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlFldId"
                  v-model="fldId"
                  class="form-control form-control-sm"
                  style="width: 230px"
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
            <tr id="trOutFldId">
              <td class="text-right">
                <label id="lblOutFldId" class="col-form-label-sm text-right" style="width: 85px">
                  Out字段
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlOutFldId"
                  v-model="outFldId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                >
                  <option
                    v-for="(item, index) in arrvFieldTab_Sim_OutFldId"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trLabelCaption">
              <td class="text-right">
                <label id="lblLabelCaption" class="col-form-label text-right" style="width: 85px">
                  标签标题
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtLabelCaption"
                  v-model="labelCaption"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trDataPropertyName">
              <td class="text-right">
                <label
                  id="lblDataPropertyName"
                  class="col-form-label-sm text-right"
                  style="width: 85px"
                >
                  数据属性名
                </label>
              </td>
              <td class="text-left">
                <span id="lblDataPropertyName_e" class="col-form-label-sm text-right"> </span>
              </td>
            </tr>

            <tr id="trDnPathId">
              <td id="tdDnPathId" colspan="2" class="text-left"> </td>
            </tr>
            <tr id="trColSpan">
              <td class="text-right">
                <label id="lblColSpan" class="col-form-label text-right" style="width: 85px">
                  跨列数
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtColSpan"
                  v-model.number="colSpan"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trWidth">
              <td class="text-right">
                <label id="lblWidth" class="col-form-label text-right" style="width: 85px">
                  宽
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtWidth"
                  v-model.number="width"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trSeqNum">
              <td class="text-right">
                <label id="lblSeqNum" class="col-form-label text-right" style="width: 85px">
                  序号
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtSeqNum"
                  v-model.number="seqNum"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>

            <tr id="trCtlTypeId">
              <td class="text-right">
                <label id="lblCtlTypeId" class="col-form-label text-right" style="width: 85px">
                  控件类型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlCtlTypeId"
                  v-model="ctlTypeId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  @change="ddlCtlTypeId_SelectedIndexChanged"
                >
                  <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                    {{ item.ctlTypeName }}
                  </option></select
                >
              </td>
            </tr>
          </table>
          <pubCombo_EditCom ref="refPubCombo_Edit"></pubCombo_EditCom>
          <table>
            <tr id="trVarId0">
              <td class="text-right">
                <label id="lblVarId" class="col-form-label text-right" style="width: 85px">
                  界面变量
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlVarId"
                  v-model="varId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                >
                  <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                    {{ item.varName }}
                  </option>
                </select>
              </td>
            </tr>
            <tr id="trQueryOptionId">
              <td class="text-right">
                <label id="lblQueryOptionId" class="col-form-label text-right" style="width: 85px">
                  查询方式
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlQueryOptionId"
                  v-model="queryOptionId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                >
                  <option
                    v-for="(item, index) in arrQueryOption"
                    :key="index"
                    :value="item.queryOptionId"
                  >
                    {{ item.queryOptionName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trChangeEvent">
              <td class="text-right">
                <label id="lblChangeEvent" class="col-form-label text-right" style="width: 85px">
                  Change事件
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtChangeEvent"
                  v-model="changeEvent"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  @click="txtChangeEvent_OnClick"
                />
              </td>
            </tr>
            <tr id="trClickEvent">
              <td class="text-right">
                <label id="lblClickEvent" class="col-form-label text-right" style="width: 85px">
                  Click事件
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtClickEvent"
                  v-model="clickEvent"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  @click="txtClickEvent_OnClick"
                />
              </td>
            </tr>
            <tr id="trMemo">
              <td class="text-right">
                <label id="lblMemo" class="col-form-label text-right" style="width: 85px">
                  说明
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtMemo"
                  v-model="memo"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trInUse">
              <td class="text-left" colSpan="2">
                <span class="form-control form-control-sm" style="width: 230px">
                  <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                    for="chkInUse"
                    >是否在用</label
                  >
                </span>
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
            @click="btnQryRegionFlds_Edit_Click('Submit', '')"
            >{{ strSubmitButtonText }}</button
          >
        </div>
      </a-modal>
    </template>
    <template v-else>
      <div id="divEditLayout_Right" ref="refDivEdit" class="tab_layout">
        <div id="divEdit_AddVar"></div>
        <table
          id="tabEdit"
          style="width: 333px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td colspan="2" class="text-right">
              <button
                id="btnSubmitQryRegionFlds"
                type="button"
                class="btn btn-primary"
                @click="btnQryRegionFlds_Edit_Click('Submit', '')"
                >{{ strSubmitButtonText }}</button
              >
            </td>
          </tr>
          <tr id="trFldId">
            <td class="text-right">
              <label id="lblFldId" class="col-form-label text-right" style="width: 85px">
                字段Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 230px"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trOutFldId">
            <td class="text-right">
              <label id="lblOutFldId" class="col-form-label-sm text-right" style="width: 85px">
                Out字段
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOutFldId"
                v-model="outFldId"
                class="form-control form-control-sm"
                style="width: 230px"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trLabelCaption">
            <td class="text-right">
              <label id="lblLabelCaption" class="col-form-label text-right" style="width: 85px">
                标签标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLabelCaption"
                v-model="labelCaption"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trDataPropertyName">
            <td class="text-right">
              <label
                id="lblDataPropertyName"
                class="col-form-label-sm text-right"
                style="width: 85px"
              >
                数据属性名
              </label>
            </td>
            <td class="text-left">
              <span id="lblDataPropertyName_e" class="col-form-label-sm text-right"> </span>
            </td>
          </tr>

          <tr id="trDnPathId">
            <td id="tdDnPathId" colspan="2" class="text-left"> </td>
          </tr>
          <tr id="trColSpan">
            <td class="text-right">
              <label id="lblColSpan" class="col-form-label text-right" style="width: 85px">
                跨列数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtColSpan"
                v-model.number="colSpan"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trWidth">
            <td class="text-right">
              <label id="lblWidth" class="col-form-label text-right" style="width: 85px">
                宽
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtWidth"
                v-model.number="width"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label id="lblSeqNum" class="col-form-label text-right" style="width: 85px">
                序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSeqNum"
                v-model.number="seqNum"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>

          <tr id="trCtlTypeId">
            <td class="text-right">
              <label id="lblCtlTypeId" class="col-form-label text-right" style="width: 85px">
                控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtlTypeId"
                v-model="ctlTypeId"
                class="form-control form-control-sm"
                style="width: 230px"
                @change="ddlCtlTypeId_SelectedIndexChanged"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
          </tr>
        </table>
        <pubCombo_EditCom ref="refPubCombo_Edit"></pubCombo_EditCom>
        <table>
          <tr id="trVarId0">
            <td class="text-right">
              <label id="lblVarId" class="col-form-label text-right" style="width: 85px">
                界面变量
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlVarId"
                v-model="varId"
                class="form-control form-control-sm"
                style="width: 230px"
              >
                <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                  {{ item.varName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trQueryOptionId">
            <td class="text-right">
              <label id="lblQueryOptionId" class="col-form-label text-right" style="width: 85px">
                查询方式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQueryOptionId"
                v-model="queryOptionId"
                class="form-control form-control-sm"
                style="width: 230px"
              >
                <option
                  v-for="(item, index) in arrQueryOption"
                  :key="index"
                  :value="item.queryOptionId"
                >
                  {{ item.queryOptionName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trChangeEvent">
            <td class="text-right">
              <label id="lblChangeEvent" class="col-form-label text-right" style="width: 85px">
                Change事件
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtChangeEvent"
                v-model="changeEvent"
                class="form-control form-control-sm"
                style="width: 230px"
                @click="txtChangeEvent_OnClick()"
              />
            </td>
          </tr>
          <tr id="trClickEvent">
            <td class="text-right">
              <label id="lblClickEvent" class="col-form-label text-right" style="width: 85px">
                Click事件
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClickEvent"
                v-model="clickEvent"
                class="form-control form-control-sm"
                style="width: 230px"
                @click="txtClickEvent_OnClick()"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label id="lblMemo" class="col-form-label text-right" style="width: 85px">
                说明
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-left" colSpan="2">
              <span class="form-control form-control-sm" style="width: 230px">
                <input id="chkInUse" type="checkbox" Text="是否在用" /><label for="chkInUse"
                  >是否在用</label
                >
              </span>
            </td>
          </tr>
        </table>

        <input id="hidOpType" type="hidden" />
        <input id="hidKeyId" type="hidden" />
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

  import QryRegionFlds_EditEx from '@/views/RegionManage/QryRegionFlds_EditEx';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsDDLItemsOptionEN } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsQueryOptionEN, enumQueryOption } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
  import {
    CmPrjId_Local,
    RegionId_Static,
    TabId_Static,
    refDivEdit,
  } from '@/views/RegionManage/QryRegionFldsVueShare';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache,
    vFieldTab_SimEx_BindDdl_FldIdInDivExCache,
    vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache } from '@/ts/L3ForWApiEx/PrjInterface/clsCtlTypeExWApi';
  import pubCombo_EditCom from '@/ts/components/pubCombo_Edit.vue';
  import { refPubCombo_Edit } from '@/ts/components/pubComboVueShare';
  import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { useUserStore } from '@/store/modulesShare/user';
  import {
    PrjTabFldEx_CopyToEx,
    PrjTabFldEx_FuncMapByFldName,
    PrjTabFldEx_GetInFldId,
    PrjTabFldEx_GetObjByFldIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
  import { QryRegionFldsEx_CopyToPubComboEx } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi2';
  import {
    DnPathEx_CreateGraph4DnPathCache,
    DnPathEx_ShowDnPath,
  } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
  import { vDataNode_SimEx_ClearDnPath } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
  import { PubFun4Web_ShowOutFldName } from '@/ts/FunClass/clsPubFun4Web';
  import { clsPubFun4Ddl } from '@/ts/FunClass/clsPubFun4Ddl';
  import { DnPath_GetObjByDnPathIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
  import {
    CheckControlExistInDivObj,
    getTdObjByIdInDivObj,
    getTrObjByIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
  import { QryRegionFldsEx_GetRecCountByCondInUseCache } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi';
  import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
  import { GCVariableEx_GetArrGCVariableByPrjIdCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
  import { GetCtrlIdQueryV2 } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
  import { QryRegionFlds_GetObjBymIdAsync } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';

  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { DDLItemsOption_GetArrDDLItemsOption } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { QueryOption_GetArrQueryOption } from '@/ts/L3ForWApi/PrjInterface/clsQueryOptionWApi';

  export default defineComponent({
    name: 'QryRegionFldsEdit',
    components: {
      // 组件注册
      pubCombo_EditCom,
    },
    props: {
      isDialog: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const userStore = useUserStore();

      const pobjPubFun4Ddl = ref<clsPubFun4Ddl | null>(null);
      const objPubFun4Ddl = () => {
        if (pobjPubFun4Ddl.value == null) {
          pobjPubFun4Ddl.value = new clsPubFun4Ddl('QryRegion', refDivEdit.value);
        }
        return pobjPubFun4Ddl.value;
      };

      const keyId = ref(0);
      const fldId = ref('');
      const outFldId = ref('');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const seqNum = ref(0);
      const inUse = ref(true);
      const ctlTypeId = ref('');
      const ddlItemsOptionId = ref('');
      const dsTabId = ref('');
      const tabFeatureId4Ddl = ref('');
      const varTypeIdCond1 = ref('');
      const varIdCond1 = ref('');
      const varTypeIdCond2 = ref('');
      const varIdCond2 = ref('');
      const dsDataTextFieldId = ref('');
      const dsDataValueFieldId = ref('');
      const dsCondFieldId = ref('');
      const dsSortFieldId = ref('');

      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const regionId = ref('');
      const varId = ref('');
      const queryOptionId = ref('');
      const changeEvent = ref('');
      const clickEvent = ref('');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const dnPathId = ref('');
      const strRegionType = ref(''); //静态变量;//静态变量
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim_OutFldId = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrQueryOption = ref<clsQueryOptionEN[] | null>([]);

      onMounted(async () => {
        // await BindDdl4EditRegionInDiv();
      });

      /** 函数功能:为编辑区绑定下拉框
       (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
      */
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrvFieldTab_Sim_OutFldId.value =
          await vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache(strTabId_Static); //编辑区域

        outFldId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        arrDDLItemsOption.value = await DDLItemsOption_GetArrDDLItemsOption(); //编辑区域
        ddlItemsOptionId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        dsTabId.value = '0';

        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //编辑区域
        varId.value = '0';

        arrQueryOption.value = await QueryOption_GetArrQueryOption(); //编辑区域
        queryOptionId.value = '0';

        const strPrjId = clsPrivateSessionStorage.currSelPrjId; //.value; //静态变量;//Session存储、local存储

        if (strPrjId == '9991') {
          const strMsg = Format("QryRegionFlds_Edit.PrjIdCache='9991'，还没有被赋正确的值,请检查!");
          throw strMsg;
        }
        const strTabId = strTabId_Static;
        await SetDdl_FldIdInDivEx(strTabId, strPrjId); //编辑区域
        await SetDdl_OutFldIdInDivEx(strTabId);
        //await this.SetDdl_OutDataNodeIdInDivEx(strTabId, clsPrivateSessionStorage.cmPrjId);//编辑区域
        await SetDdl_CtlTypeIdInDiv(); //编辑区域
        // await this.SetDdl_DdlItemsOptionIdInDiv(); //编辑区域
      }
      /// <summary>
      /// 设置绑定下拉框，针对字段:[fldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      /// </summary>
      async function SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
        //定义条件字段
        //const strPrjId = "";//定义条件字段
        await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
          refDivEdit.value,
          'ddlFldId',
          strTabId,
          strPrjId,
        ); //编辑区域
      }
      async function SetDdl_OutFldIdInDivEx(strTabId: string) {
        //定义条件字段
        //const strPrjId = "";//定义条件字段
        await vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache(
          refDivEdit.value,
          'ddlOutFldId',
          strTabId,
        ); //编辑区域
      }
      async function SetDdl_CtlTypeIdInDiv() {
        await CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache(refDivEdit.value, 'ddlCtlTypeId'); //
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQryRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQryRegionFldsObj() {
        const pobjQryRegionFldsEN = new clsQryRegionFldsEN();

        if (outFldId.value != '0') {
          pobjQryRegionFldsEN.SetOutFldId(outFldId.value); // 表字段
          const strInFldId = await PrjTabFldEx_GetInFldId(TabId_Static.value, outFldId.value);
          if (strInFldId != '') {
            console.log('objPrjTabFld.inFldId:', strInFldId);
            fldId.value = strInFldId;
          }
        } else {
          pobjQryRegionFldsEN.SetOutFldId('');
        }

        pobjQryRegionFldsEN.SetFldId(fldId.value); // 字段Id

        pobjQryRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjQryRegionFldsEN.SetColSpan(colSpan.value); // 跨列数
        pobjQryRegionFldsEN.SetWidth(width.value); // 宽
        pobjQryRegionFldsEN.SetSeqNum(seqNum.value); // 序号
        pobjQryRegionFldsEN.SetInUse(true); // 是否在用
        pobjQryRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        // pobjQryRegionFldsEN.SetDdlItemsOptionId(ddlItemsOptionId.value); // 下拉选项
        if (refPubCombo_Edit.value.itemsOptionId != '0') {
          pobjQryRegionFldsEN.SetDdlItemsOptionId(refPubCombo_Edit.value.itemsOptionId); // 下拉选项
        }

        pobjQryRegionFldsEN.SetDsTabId(refPubCombo_Edit.value.dsTabId); // 数据源表

        pobjQryRegionFldsEN.SetTabFeatureId4Ddl(refPubCombo_Edit.value.tabFeatureId4Ddl); // 数据源表
        pobjQryRegionFldsEN.SetVarIdCond1(refPubCombo_Edit.value.varIdCond1); // 数据源表
        pobjQryRegionFldsEN.SetVarIdCond2(refPubCombo_Edit.value.varIdCond2); // 数据源表
        pobjQryRegionFldsEN.SetFldIdCond1(refPubCombo_Edit.value.fldIdCond1); // 数据源表
        pobjQryRegionFldsEN.SetFldIdCond2(refPubCombo_Edit.value.fldIdCond2); // 数据源表

        pobjQryRegionFldsEN.SetDsCondStr(refPubCombo_Edit.value.dsCondStr); // 条件串
        pobjQryRegionFldsEN.SetDsSqlStr(refPubCombo_Edit.value.dsSqlStr); // 数据源SQL
        pobjQryRegionFldsEN.SetItemsString(refPubCombo_Edit.value.itemsString); // 列表项串

        pobjQryRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjQryRegionFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 区域Id
        pobjQryRegionFldsEN.SetVarId(varId.value); // 变量Id
        pobjQryRegionFldsEN.SetQueryOptionId(queryOptionId.value); // 查询方式
        pobjQryRegionFldsEN.SetChangeEvent(changeEvent.value); // Change事件
        pobjQryRegionFldsEN.SetClickEvent(clickEvent.value); // Click事件
        pobjQryRegionFldsEN.SetMemo(memo.value); // 说明
        pobjQryRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjQryRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

        pobjQryRegionFldsEN.SetErrMsg(''); // 错误信息

        return pobjQryRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQryRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromQryRegionFldsObj(pobjQryRegionFldsEN: clsQryRegionFldsEN) {
        ddlItemsOptionId.value = pobjQryRegionFldsEN.ddlItemsOptionId; // 下拉选项
        dsTabId.value = pobjQryRegionFldsEN.dsTabId; // 数据源表
        if (pobjPubFun4Ddl.value == null) {
          pobjPubFun4Ddl.value = new clsPubFun4Ddl('QryRegion', refDivEdit.value);
        } else {
          pobjPubFun4Ddl.value.divEdit = refDivEdit.value;
        }
        fldId.value = pobjQryRegionFldsEN.fldId; // 字段Id
        outFldId.value = pobjQryRegionFldsEN.outFldId; // OutFldId
        await PubFun4Web_ShowOutFldName(
          refDivEdit.value,
          'lblDataPropertyName_e',
          fldId.value,
          outFldId.value,
        );
        try {
          //this.outDataNodeId = pobjQryRegionFldsEN.outDataNodeId;// Out数据
          //this.dataPropertyName = pobjQryRegionFldsEN.dataPropertyName;// 属性名
          if (IsNullOrEmpty(outFldId.value) == false) {
            await DnPathEx_ShowDnPath(
              refDivEdit.value,
              'tdDnPathId',
              TabId_Static.value,
              fldId.value,
              outFldId.value,
              clsPrivateSessionStorage.cmPrjId,
            );
          } else {
            vDataNode_SimEx_ClearDnPath(refDivEdit.value, 'tdDnPathId');
          }
        } catch (e) {}

        labelCaption.value = pobjQryRegionFldsEN.labelCaption; // 标签标题
        colSpan.value = pobjQryRegionFldsEN.colSpan; // 跨列数
        width.value = pobjQryRegionFldsEN.width; // 宽
        seqNum.value = pobjQryRegionFldsEN.seqNum; // 序号
        ctlTypeId.value = pobjQryRegionFldsEN.ctlTypeId; // 控件类型

        const objPubComboEN = QryRegionFldsEx_CopyToPubComboEx(pobjQryRegionFldsEN);
        if (pobjQryRegionFldsEN.ctlTypeId == enumCtlType.DropDownList_06) {
          await refPubCombo_Edit.value.GetDataFromPubComboClass(objPubComboEN);
        }

        dsCondStr.value = pobjQryRegionFldsEN.dsCondStr; // 条件串
        dsSqlStr.value = pobjQryRegionFldsEN.dsSqlStr; // 数据源SQL
        itemsString.value = pobjQryRegionFldsEN.itemsString; // 列表项串

        //this.regionId = pobjQryRegionFldsEN.regionId;// 区域Id
        //this.prjId = pobjQryRegionFldsEN.prjId;// 工程ID
        if (IsNullOrEmpty(pobjQryRegionFldsEN.varId) == false) {
          varId.value = pobjQryRegionFldsEN.varId; // 变量Id
        }
        queryOptionId.value = pobjQryRegionFldsEN.queryOptionId; // 查询方式

        changeEvent.value = pobjQryRegionFldsEN.changeEvent; // Change事件
        clickEvent.value = pobjQryRegionFldsEN.clickEvent; // Click事件
        memo.value = pobjQryRegionFldsEN.memo; // 说明
      }

      const strTitle = ref('查询区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQryRegionFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQryRegionFlds':
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
          case 'btnCancelQryRegionFlds':
            return strCancelButtonText.value;
          case 'btnSubmitQryRegionFlds':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
        setTimeout(() => {
          console.log('对话框已经显示!');
        }, 1000);
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
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
        refDivEdit,
        fldId,
        outFldId,
        labelCaption,
        colSpan,
        width,
        seqNum,
        inUse,
        ctlTypeId,
        ddlItemsOptionId,
        dsTabId,
        tabFeatureId4Ddl,
        varTypeIdCond1,
        varIdCond1,
        varTypeIdCond2,
        varIdCond2,
        dsDataTextFieldId,
        dsDataValueFieldId,
        dsCondFieldId,
        dsSortFieldId,

        dsCondStr,
        dsSqlStr,
        itemsString,
        regionId,
        varId,
        queryOptionId,
        changeEvent,
        clickEvent,
        memo,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrvFieldTab_Sim_OutFldId,
        arrCtlType,
        arrDDLItemsOption,
        arrvPrjTab_Sim,
        arrGCVariable,
        arrQueryOption,
        BindDdl4EditRegionInDiv,

        ShowDataFromQryRegionFldsObj,
        GetEditDataQryRegionFldsObj,
        objPubFun4Ddl,
        dnPathId,
        strRegionType,
        keyId,
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
      async ddlFldId_SelectedIndexChanged(ddlFldId: HTMLSelectElement) {
        const vDataNode_SimStore = usevDataNode_SimStore();
        //alert('请在扩展层:EditRegionFlds_EditEx中重写该函数！');
        console.log(ddlFldId);
        const strFldId = this.fldId;
        const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(TabId_Static.value, strFldId);
        if (objPrjTabFld.isForExtendClass == true) {
          const objPrjTabFldEx = PrjTabFldEx_CopyToEx(objPrjTabFld);
          await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objPrjTabFldEx);
          await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_Caption, objPrjTabFldEx);

          if (IsNullOrEmpty(objPrjTabFld.dnPathId) == true) return;
          const objDnPath = await DnPath_GetObjByDnPathIdAsync(objPrjTabFldEx.dnPathId);
          if (objDnPath == null) return;
          this.dnPathId = objDnPath.dnPathId;
          const objDataNode_In = await vDataNode_SimStore.getObj(objDnPath.inDataNodeId);
          if (objDataNode_In == null) return;
          this.fldId = objDataNode_In.fldId;
          this.outFldId = strFldId;

          //this.outDataNodeId = objDnPath.outDataNodeId;
          //this.dataPropertyName = objPrjTabFldEx.fldName;
          //this.headerText = objPrjTabFldEx.caption;
          this.ctlTypeId = enumCtlType.TextBox_16;
          //this.width = 100;
          //this.colSpan = 1;
          const intRecNum_InUSe = await QryRegionFldsEx_GetRecCountByCondInUseCache(
            RegionId_Static.value,
          );
          this.seqNum = intRecNum_InUSe + 1;
          await this.ShowDnPath4Exist(
            'tdDnPathId',
            objPrjTabFldEx.dnPathId,
            clsPrivateSessionStorage.cmPrjId,
          );
        } else {
          const objPrjTabFldEx = PrjTabFldEx_CopyToEx(objPrjTabFld);
          await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objPrjTabFldEx);
          await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_Caption, objPrjTabFldEx);
          this.labelCaption = objPrjTabFldEx.caption; // '0';
        }
        await PubFun4Web_ShowOutFldName(
          this.refDivEdit,
          'lblDataPropertyName_e',
          this.fldId,
          this.outFldId,
        );
      },
      async ShowDnPath4Exist(
        strTdId: string,
        strDnPathId: string,
        strCmPrjId: string,
      ): Promise<string> {
        console.log(strCmPrjId);
        const objDnPath = await DnPath_GetObjByDnPathIdAsync(strDnPathId);
        if (objDnPath == null) return '';
        const divDnPath = await DnPathEx_CreateGraph4DnPathCache(objDnPath.dnPathId);
        const objTd = getTdObjByIdInDivObj(this.refDivEdit, strTdId);
        objTd.innerHTML = '';
        objTd.appendChild(divDnPath);
        return objDnPath.dnPathId;
      },
      async ddlOutFldId_SelectedIndexChanged(ddlOutDataNodeId: HTMLSelectElement) {
        //alert('请在扩展层:DataNode_EditEx中重写该函数！');
        if (IsNullOrEmpty(clsPrivateSessionStorage.cmPrjId) == true) return;
        console.log(ddlOutDataNodeId);
        const strOutFldId = this.outFldId;

        try {
          const strInFldId = await PrjTabFldEx_GetInFldId(TabId_Static.value, strOutFldId);
          if (strInFldId != '') {
            console.log('objPrjTabFld.inFldId:', strInFldId);
            this.fldId = strInFldId;
            // this.fldId = objPrjTabFld.inFldId; // objDataNode_MinDepth.fldId;
          }
          await PubFun4Web_ShowOutFldName(
            this.refDivEdit,
            'lblDataPropertyName_e',
            this.fldId,
            this.outFldId,
          );
        } catch (e: any) {
          // const ss = e;
          console.log(e);
          alert(e);
        }
        //const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(objEndNode.fldId, clsPrivateSessionStorage.cmPrjId);
        //if (objFieldTab == null) {

        //    const strMsg = Format("在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！",
        //        clsPrivateSessionStorage.currSelPrjName, objEndNode.fldId);
        //    console.error(strMsg);
        //    alert(strMsg);
        //    return;
        //}

        //if (string.IsNullOrEmpty( txtDataPropertyName.text) == true)
        //{
        //this.dataPropertyName = objFieldTab.fldName;
        //this.headerText = objFieldTab.caption;
        const dnPathId = await DnPathEx_ShowDnPath(
          this.refDivEdit,
          'tdDnPathId',
          TabId_Static.value,
          this.fldId,
          this.outFldId,
          clsPrivateSessionStorage.cmPrjId,
        );
        this.dnPathId = dnPathId;
      },
      /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
      async ddlCtlTypeId_SelectedIndexChanged() {
        console.log('ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:', this.ctlTypeId);
        this.HideTrInDiv('trDdlItemsOptionId');
        this.HideTrInDiv('trDsTabId');
        this.HideTrInDiv('trTabFeatureId4Ddl');
        // this.HideTrInDiv('t1rVarTypeIdCond1');
        // this.HideTrInDiv('t1rVarTypeIdCond2');

        this.HideTrInDiv('trDsCondStr');
        this.HideTrInDiv('trDsSqlStr');
        this.HideTrInDiv('trItemsString');
        this.HideTrInDiv('trDsDataTextFieldId');
        this.HideTrInDiv('trDsDataValueFieldId');
        this.HideTrInDiv('trDsCondFieldId');
        this.HideTrInDiv('trDsSortFieldId');
        this.HideTrInDiv('trVarId0');
        switch (this.ctlTypeId) {
          // case enumCtlType.CacheClassifyField_37:
          //   this.ShowTrInDiv('trVarId0');
          //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

          //   break;
          case enumCtlType.ViewVariable_38:
            this.ShowTrInDiv('trVarId0');
            // await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
            this.arrGCVariable = await GCVariableEx_GetArrGCVariableByPrjIdCache(
              clsPrivateSessionStorage.currSelPrjId,
            ); //编辑区域
            this.varId = '0';
            break;
          // case enumCtlType.sessionStorage_40:
          //   this.ShowTrInDiv('trVarId0');
          //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
          //   break;
          case enumCtlType.DropDownList_06:
            refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged(this.ctlTypeId);
            //   this.ShowTrInDiv('trTabFeatureId4Ddl');
            //   this.ShowTrInDiv('trDdlItemsOptionId');
            //   this.ShowTrInDiv('trDsTabId');

            //   console.log('QryRegion:', this.strRegionType);
            //   if (this.strRegionType == 'QryRegion') {
            //     this.queryOptionId = enumQueryOption.EqualQuery_01;
            //   }
            break;
          case enumCtlType.DropDownList_Bool_18:
            refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged(this.ctlTypeId);
            //   this.ShowTrInDiv('trDdlItemsOptionId');
            //   this.ddlItemsOptionId = enumDDLItemsOption.TrueAndFalseList_04;
            //   //$('#ddlDdlItemsOptionId').val(enumDDLItemsOption.TrueAndFalseList_04);
            break;
          case enumCtlType.TextBox_16:
            if (this.strRegionType == 'QryRegion') {
              this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            }
            break;
          case enumCtlType.TextArea_41:
            if (this.strRegionType == 'QryRegion') {
              this.queryOptionId = enumQueryOption.FuzzyQuery_02;
            }
            break;
          case enumCtlType.GivenValue_35:
            this.HideTrInDiv('trDdlItemsOptionId');
            break;
          default:
            break;
        }

        //alert("Changed");
      },

      /**
       * 显示表格行 (tr))
       **/
      ShowTrInDiv(strTr: string) {
        CheckControlExistInDivObj(this.refDivEdit, 'tr', strTr);
        const strId = strTr;

        const objTr = getTrObjByIdInDivObj(this.refDivEdit, strId);
        if (objTr) {
          // 显示表行
          objTr.style.display = 'table-row';
        } else {
          // 表行不存在
          console.log(`表行:${strId}不存在`);
        }
      },

      /**
       * 隐藏表格行 (tr))
       **/
      HideTrInDiv(strTr: string) {
        CheckControlExistInDivObj(this.refDivEdit, 'tr', strTr);
        const strId = strTr;
        // objDiv.find(strId).hide();
        const objTr = getTrObjByIdInDivObj(this.refDivEdit, strId);
        if (objTr) {
          // 显示表行
          objTr.style.display = 'none';
        } else {
          // 表行不存在
          console.log(`表行:${strId}不存在`);
        }
      },
      async txtChangeEvent_OnClick() {
        const strThisFuncName = this.txtChangeEvent_OnClick.name;
        try {
          if (IsNullOrEmpty(this.changeEvent) == false) return;

          const lngmId = this.keyId;

          const objQryRegionFlds_Const = await QryRegionFlds_GetObjBymIdAsync(lngmId);
          if (objQryRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdQueryV2(objQryRegionFlds_Const);
          const strDefaEvent = Format('{0}_SelectedIndexChanged', strCtrlId);
          this.changeEvent = strDefaEvent;
          if (IsNullOrEmpty(this.changeEvent) == true) {
            this.changeEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
      async txtClickEvent_OnClick() {
        const strThisFuncName = this.txtClickEvent_OnClick.name;
        try {
          if (IsNullOrEmpty(this.clickEvent) == false) return;

          const lngmId = this.keyId;

          const objQryRegionFlds_Const = await QryRegionFlds_GetObjBymIdAsync(lngmId);
          if (objQryRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdQueryV2(objQryRegionFlds_Const);
          const strDefaEvent = Format('{0}_Clicked', strCtrlId);
          this.clickEvent = strDefaEvent;
          if (IsNullOrEmpty(this.clickEvent) == true) {
            this.clickEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
    },
  });
</script>
<style scoped></style>
