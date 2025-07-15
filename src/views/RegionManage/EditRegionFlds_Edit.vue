<template>
  <!-- 编辑层 -->
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <!-- 编辑层 -->
        <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
          <table
            id="tabEdit"
            style="width: 350px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr id="trFldId">
              <td class="text-right">
                <label
                  id="lblFldId"
                  name="lblFldId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >字段Id
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlFldId"
                  v-model="fldId"
                  class="form-control form-control-sm"
                  style="width: 150px"
                  @change="ddlFldId_SelectedIndexChanged($event)"
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
            <tr id="trLabelCaption">
              <td class="text-right">
                <label
                  id="lblLabelCaption"
                  name="lblLabelCaption"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >标签标题
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtLabelCaption"
                  v-model="labelCaption"
                  class="form-control form-control-sm"
                  style="width: 250px"
                />
              </td>
            </tr>
            <tr id="trWidth">
              <td class="text-right">
                <label
                  id="lblColSpan"
                  name="lblColSpan"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >跨列数
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtColSpan"
                  v-model.number="colSpan"
                  class="form-control form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblWidth"
                  name="lblWidth"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >宽
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtWidth"
                  v-model.number="width"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
              </td>
            </tr>
            <tr id="trSeqNum">
              <td class="text-right">
                <label
                  id="lblInOutTypeId"
                  name="lblInOutTypeId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >In/Out
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlInOutTypeId"
                  v-model="inOutTypeId"
                  class="form-control form-control-sm"
                  style="width: 120px"
                >
                  <option
                    v-for="(item, index) in arrInOutType"
                    :key="index"
                    :value="item.inOutTypeId"
                  >
                    {{ item.inOutTypeName }}
                  </option></select
                >
              </td>
              <td class="text-right">
                <label
                  id="lblSeqNum"
                  name="lblSeqNum"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >序号
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtSeqNum"
                  v-model.number="seqNum"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
              </td>
            </tr>
            <tr id="trCtlTypeId">
              <td class="text-right">
                <label
                  id="lblCtlTypeId"
                  name="lblCtlTypeId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >控件类型
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlCtlTypeId"
                  v-model="ctlTypeId"
                  class="form-control form-control-sm"
                  style="width: 250px"
                  @change="ddlCtlTypeId_SelectedIndexChanged()"
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
            <tr id="trVarId">
              <td class="text-right">
                <label
                  id="lblVarId"
                  name="lblVarId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >变量Id
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <select
                  id="ddlVarId"
                  v-model="varId"
                  class="form-control form-control-sm"
                  style="width: 250px"
                >
                  <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                    {{ item.varName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trClickEvent">
              <td class="text-right">
                <label
                  id="lblClickEvent"
                  name="lblClickEvent"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >Click事件
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtClickEvent"
                  v-model="clickEvent"
                  class="form-control form-control-sm"
                  style="width: 250px"
                  @click="txtClickEvent_OnClick()"
                />
              </td>
            </tr>
            <tr id="trChangeEvent">
              <td class="text-right">
                <label
                  id="lblChangeEvent"
                  name="lblChangeEvent"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >Change事件
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtChangeEvent"
                  v-model="changeEvent"
                  class="form-control form-control-sm"
                  style="width: 250px"
                  @click="txtChangeEvent_OnClick()"
                />
              </td>
            </tr>
            <tr id="trColIndex">
              <td class="text-right">
                <label
                  id="lblColIndex"
                  name="lblColIndex"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >列序号
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtColIndex"
                  name="txtColIndex"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
              </td>
            </tr>
            <tr id="trMemo">
              <td class="text-right">
                <label
                  id="lblMemo"
                  name="lblMemo"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >说明
                </label>
              </td>
              <td class="text-left" ColSpan="3">
                <input
                  id="txtMemo"
                  name="txtMemo"
                  class="form-control form-control-sm"
                  style="width: 250px"
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
            @click="btnEditRegionFlds_Edit_Click('Submit', '')"
            >{{ strSubmitButtonText }}</button
          >
        </div>
      </a-modal>
    </template>
    <template v-else>
      <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
        <table
          id="tabEdit"
          style="width: 333px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr id="trOK">
            <td colspan="4" class="text-left">
              <button
                id="btnSubmitEditRegionFlds"
                type="button"
                class="btn btn-primary"
                @click="btnEditRegionFlds_Edit_Click('Submit', '')"
                >{{ strSubmitButtonText }}</button
              >
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-right">
              <label
                id="lblFldId"
                name="lblFldId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                字段Id
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlFldId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
              <span class="form-control form-control-sm" style="width: 100px">
                <input id="chkInUse" type="checkbox" name="chkInUse" Text="在用" /><label
                  for="chkInUse"
                  >在用</label
                >
              </span>
            </td>
          </tr>
          <tr id="trLabelCaption">
            <td class="text-right">
              <label
                id="lblLabelCaption"
                name="lblLabelCaption"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                标签标题
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtLabelCaption"
                v-model="labelCaption"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>

          <tr id="trCtlTypeId">
            <td class="text-right">
              <label
                id="lblCtlTypeId"
                name="lblCtlTypeId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                控件类型
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <select
                id="ddlCtlTypeId"
                v-model="ctlTypeId"
                class="form-control form-control-sm"
                style="width: 230px"
                @change="ddlCtlTypeId_SelectedIndexChanged()"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trVarId0">
            <td class="text-right">
              <label
                id="lblVarId"
                name="lblVarId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                界面变量
              </label>
            </td>
            <td class="text-left" colSpan="3">
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
        </table>

        <pubCombo_EditCom v-show="isShowCombo" ref="refPubCombo_Edit"></pubCombo_EditCom>
        <table>
          <tr id="trWidth">
            <td class="text-right">
              <label
                id="lblColSpan"
                name="lblColSpan"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                跨列数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtColSpan"
                v-model.number="colSpan"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblWidth"
                name="lblWidth"
                class="col-form-label-sm text-right"
                style="width: 40px"
              >
                宽
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtWidth"
                v-model.number="width"
                class="form-control form-control-sm"
                style="width: 50px"
              />
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label
                id="lblInOutTypeId"
                name="lblInOutTypeId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                In/Out
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInOutTypeId"
                v-model="inOutTypeId"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrInOutType"
                  :key="index"
                  :value="item.inOutTypeId"
                >
                  {{ item.inOutTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblSeqNum"
                name="lblSeqNum"
                class="col-form-label-sm text-right"
                style="width: 40px"
              >
                序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSeqNum"
                v-model.number="seqNum"
                class="form-control form-control-sm"
                style="width: 50px"
              />
            </td>
          </tr>

          <tr id="trClickEvent">
            <td class="text-right">
              <label
                id="lblClickEvent"
                name="lblClickEvent"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                Click事件
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtClickEvent"
                v-model="clickEvent"
                class="form-control form-control-sm"
                style="width: 230px"
                @click="txtClickEvent_OnClick()"
              />
            </td>
          </tr>
          <tr id="trChangeEvent">
            <td class="text-right">
              <label
                id="lblChangeEvent"
                name="lblChangeEvent"
                class="col-form-label-sm text-right"
                style="width: 90px"
              >
                Change事件
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtChangeEvent"
                v-model="changeEvent"
                class="form-control form-control-sm"
                style="width: 230px"
                @click="txtChangeEvent_OnClick()"
              />
            </td>
          </tr>

          <tr id="trColIndex">
            <td class="text-right">
              <label
                id="lblColIndex"
                name="lblColIndex"
                class="col-form-label-sm text-right"
                style="width: 50px"
              >
                列序号
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtColIndex"
                v-model="colIndex"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                说明
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 230px"
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

  import EditRegionFlds_EditEx from './EditRegionFlds_EditEx';
  import pubCombo_EditCom from '@/ts/components/pubCombo_Edit.vue';
  import { refPubCombo_Edit } from '@/ts/components/pubComboVueShare';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';

  import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsDDLItemsOptionEN } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { InOutType_GetArrInOutType } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
  import { CtlTypeEx_GetArrCtlTypeForNotAppleCache } from '@/ts/L3ForWApiEx/PrjInterface/clsCtlTypeExWApi';
  import { DDLItemsOption_GetArrDDLItemsOption } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { GCVariableEx_GetArrGCVariableByPrjIdCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
  import {
    CmPrjId_Local,
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/EditRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { EditRegionFlds_Edit } from '@/viewsBase/RegionManage/EditRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { EditRegionFldsEx_CopyToPubComboEx } from '@/ts/L3ForWApiEx/RegionManage/clsEditRegionFldsExWApi';
  import { CheckControlExistInDivObj, getTrObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { enumQueryOption } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
  import { clsPubFun4Ddl } from '@/ts/FunClass/clsPubFun4Ddl';
  import { EditRegionFlds_GetObjBymIdAsync } from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';
  import { GetCtrlIdEditV2 } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
  export default defineComponent({
    name: 'EditRegionFldsEdit',
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
          pobjPubFun4Ddl.value = new clsPubFun4Ddl('EditRegion', refDivEdit.value);
        }
        return pobjPubFun4Ddl.value;
      };
      const isShowCombo = ref(true); // 是否显示下拉框
      const strRegionType = ref(''); // 区域类型
      const fldId = ref('');
      const inUse = ref('0');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const inOutTypeId = ref('');
      const seqNum = ref(0);
      const ctlTypeId = ref('');
      const ddlItemsOptionId = ref('');
      const dsTabId = ref('');
      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const varId = ref('');
      const clickEvent = ref('');
      const regionId = ref('');
      const changeEvent = ref('');
      const colIndex = ref(0);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrInOutType = ref<clsInOutTypeEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      onMounted(async () => {
        // await BindDdl4EditRegionInDiv();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        if (strTabId_Static == '') {
          const strMsg = Format('EditRegionFldsEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // await this.SetDdl_FldIdInDivEx(strTabId_Static, strPrjId); //编辑区域
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrInOutType.value = await InOutType_GetArrInOutType(); //编辑区域
        inOutTypeId.value = '0';

        //  await this.SetDdl_CtlTypeIdInDiv(); //编辑区域

        arrCtlType.value = await CtlTypeEx_GetArrCtlTypeForNotAppleCache(); //编辑区域
        ctlTypeId.value = '0';

        arrDDLItemsOption.value = await DDLItemsOption_GetArrDDLItemsOption(); //编辑区域
        ddlItemsOptionId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        dsTabId.value = '0';

        //  await this.SetDdl_VarIdInDiv(strPrjId); //编辑区域
        arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(
          clsPrivateSessionStorage.currSelPrjId,
        ); //编辑区域
        console.log(
          'arrGCVariable.value:',
          arrGCVariable.value,
          clsPrivateSessionStorage.currSelPrjId,
        );
        varId.value = '0';

        // public async B1indDdl4EditRegionInDiv() {
      }
      /// <summary>
      /// 设置绑定下拉框，针对字段:[fldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      /// </summary>
      // async function SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      //     divVarSet.refDivEdit,
      //     'ddlFldId',
      //     strTabId,
      //     strPrjId,
      //   ); //编辑区域
      // }

      // async function SetDdl_DsSortFieldIdInDiv(strTabId: string) {
      //   //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsSortFieldId, strTabId);
      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlDsSortFieldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      // async function SetDdl_DsCondFieldIdInDiv(strTabId: string) {
      //   //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsCondFieldId, strTabId);

      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlDsCondFieldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      // async function SetDdl_DsDataTextFieldIdInDiv(strTabId: string) {
      //   //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsDataTextFieldId, strTabId);

      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlDsDataTextFieldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      // async function SetDdl_CtlTypeIdInDiv() {
      //   await CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlCtlTypeId',
      //   ); //
      // }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjEditRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataEditRegionFldsObj() {
        const pobjEditRegionFldsEN = new clsEditRegionFldsEN();
        pobjEditRegionFldsEN.SetFldId(fldId.value); // 字段Id
        pobjEditRegionFldsEN.SetInUse(true); // 在用
        pobjEditRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjEditRegionFldsEN.SetColSpan(Number(colSpan.value)); // 跨列数
        pobjEditRegionFldsEN.SetWidth(Number(width.value)); // 宽
        pobjEditRegionFldsEN.SetInOutTypeId(inOutTypeId.value); // In/Out
        pobjEditRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 序号
        pobjEditRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        // pobjEditRegionFldsEN.SetDdlItemsOptionId(ddlItemsOptionId.value); // 下拉列表
        if (refPubCombo_Edit.value.itemsOptionId != '0') {
          pobjEditRegionFldsEN.SetDdlItemsOptionId(refPubCombo_Edit.value.itemsOptionId); // 下拉列表
        }

        pobjEditRegionFldsEN.SetDsTabId(dsTabId.value); // 数据源表
        pobjEditRegionFldsEN.SetTabFeatureId4Ddl(refPubCombo_Edit.value.tabFeatureId4Ddl); // 数据源表
        if (IsNullOrEmpty(refPubCombo_Edit.value.tabFeatureId4Ddl) == true)
          pobjEditRegionFldsEN.SetTabFeatureId4Ddl('[null]');

        pobjEditRegionFldsEN.SetVarIdCond1(refPubCombo_Edit.value.varIdCond1); // 数据源表
        pobjEditRegionFldsEN.SetVarIdCond2(refPubCombo_Edit.value.varIdCond2); // 数据源表
        pobjEditRegionFldsEN.SetFldIdCond1(refPubCombo_Edit.value.fldIdCond1); // 数据源表
        pobjEditRegionFldsEN.SetFldIdCond2(refPubCombo_Edit.value.fldIdCond2); // 数据源表

        pobjEditRegionFldsEN.SetDsCondStr(refPubCombo_Edit.value.dsCondStr); // 条件串
        pobjEditRegionFldsEN.SetDsSqlStr(refPubCombo_Edit.value.dsSqlStr); // SQL串
        pobjEditRegionFldsEN.SetDsTabId(refPubCombo_Edit.value.dsTabId); // DsTabId

        pobjEditRegionFldsEN.SetItemsString(refPubCombo_Edit.value.itemsString); // 列表项串

        try {
          pobjEditRegionFldsEN.SetVarId(varId.value); // 变量Id
        } catch (e) {
          console.log(e);
        }

        pobjEditRegionFldsEN.SetClickEvent(clickEvent.value); // Click事件
        pobjEditRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjEditRegionFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

        pobjEditRegionFldsEN.SetChangeEvent(changeEvent.value); // Change事件
        pobjEditRegionFldsEN.SetColIndex(Number(colIndex.value)); // 列序号
        pobjEditRegionFldsEN.SetMemo(memo.value); // 说明
        pobjEditRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjEditRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

        pobjEditRegionFldsEN.SetErrMsg(''); // 错误信息
        return pobjEditRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjEditRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromEditRegionFldsObj(pobjEditRegionFldsEN: clsEditRegionFldsEN) {
        if (pobjPubFun4Ddl.value == null) {
          pobjPubFun4Ddl.value = new clsPubFun4Ddl('QryRegion', refDivEdit.value);
        } else {
          pobjPubFun4Ddl.value.divEdit = refDivEdit.value;
        }

        ddlItemsOptionId.value = pobjEditRegionFldsEN.ddlItemsOptionId; // 下拉列表
        dsTabId.value = pobjEditRegionFldsEN.dsTabId; // 数据源表
        dsCondStr.value = pobjEditRegionFldsEN.dsCondStr; // 条件串
        dsSqlStr.value = pobjEditRegionFldsEN.dsSqlStr; // SQL串
        itemsString.value = pobjEditRegionFldsEN.itemsString; // 列表项串

        fldId.value = pobjEditRegionFldsEN.fldId; // 字段Id
        labelCaption.value = pobjEditRegionFldsEN.labelCaption; // 标签标题
        colSpan.value = pobjEditRegionFldsEN.colSpan; // 跨列数
        width.value = pobjEditRegionFldsEN.width; // 宽
        inOutTypeId.value = pobjEditRegionFldsEN.inOutTypeId; // In/Out
        seqNum.value = pobjEditRegionFldsEN.seqNum; // 序号

        ctlTypeId.value = pobjEditRegionFldsEN.ctlTypeId; // 控件类型
        const objPubComboEN = EditRegionFldsEx_CopyToPubComboEx(pobjEditRegionFldsEN);
        if (pobjEditRegionFldsEN.ctlTypeId == enumCtlType.DropDownList_06) {
          await refPubCombo_Edit.value.GetDataFromPubComboClass(objPubComboEN);
        }
        await ddlCtlTypeId_SelectedIndexChanged();

        if (IsNullOrEmpty(pobjEditRegionFldsEN.varId) == false) {
          varId.value = pobjEditRegionFldsEN.varId; // 变量Id
        }
        //this.IsMultiRow = pobjEditRegionFldsEN.IsMultiRow;// 是否多行
        // fldId.value = pobjEditRegionFldsEN.fldId; // 字段Id

        clickEvent.value = pobjEditRegionFldsEN.clickEvent; // Click事件
        changeEvent.value = pobjEditRegionFldsEN.changeEvent; // Change事件
        colIndex.value = pobjEditRegionFldsEN.colIndex; // 列序号
        memo.value = pobjEditRegionFldsEN.memo; // 说明
      }
      /** 函数功能:系统生成的Change事件函数
          (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
        */
      const ddlCtlTypeId_SelectedIndexChanged = async () => {
        // console.log('ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:', ctlTypeId.value);

        HideTrInDiv('trVarId0');
        let strMsg = '';
        switch (ctlTypeId.value) {
          // case enumCtlType.CacheClassifyField_37:
          //   this.ShowTrInDiv('trVarId0');
          //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

          //   break;
          case enumCtlType.ViewVariable_38:
            isShowCombo.value = false;
            ShowTrInDiv('trVarId0');
            // await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

            arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(
              clsPrivateSessionStorage.currSelPrjId,
            ); //编辑区域
            varId.value = '0';
            break;
          // case enumCtlType.sessionStorage_40:
          //   this.ShowTrInDiv('trVarId0');
          //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
          //   break;
          case enumCtlType.DropDownList_06:
            isShowCombo.value = true;
            refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged(ctlTypeId.value);

            break;
          case enumCtlType.DropDownList_Bool_18:
            isShowCombo.value = true;
            // refPubCombo_Edit.value.ddlCtlTypeId_SelectedIndexChanged(
            //   ctlTypeId.value,
            // );

            break;
          case enumCtlType.TextBox_16:
            isShowCombo.value = false;
            if (strRegionType.value == 'QryRegion') {
              queryOptionId.value = enumQueryOption.FuzzyQuery_02;
            }
            break;
          case enumCtlType.TextArea_41:
            isShowCombo.value = false;
            if (strRegionType.value == 'QryRegion') {
              queryOptionId.value = enumQueryOption.FuzzyQuery_02;
            }
            break;
          case enumCtlType.GivenValue_35:
            isShowCombo.value = false;
            HideTrInDiv('trDdlItemsOptionId');
            break;
          case enumCtlType.CheckBox_02:
            // HideTrInDiv('trDdlItemsOptionId');
            isShowCombo.value = false;
            break;
          default:
            strMsg = `控件类型Id:${ctlTypeId.value}, 在函数中没有被处理。（EditRegionFlds_EditEx.ddlCtlTypeId_SelectedIndexChanged）`;
            alert(strMsg);
            break;
        }

        //alert("Changed");
      };

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
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        labelCaption.value = '';
        colSpan.value = 0;
        width.value = 0;
        inOutTypeId.value = '0';
        seqNum.value = 0;
        ctlTypeId.value = '0';
        ddlItemsOptionId.value = '0';
        dsTabId.value = '0';
        dsCondStr.value = '';
        dsSqlStr.value = '';
        itemsString.value = '';
        varId.value = '0';
        clickEvent.value = '';
        changeEvent.value = '';
        colIndex.value = 0;
        memo.value = '';
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
              if (['02', '03', '06'].indexOf(clsEditRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsEditRegionFldsEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsEditRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In EditRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsEditRegionFldsEN._CurrTabName,
                    keyId.value.toString(),
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
      const strTitle = ref('编辑区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<EditRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: EditRegionFlds_EditEx) => {
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

      const outFldId = ref('');

      const tabFeatureId4Ddl = ref('');
      const varTypeIdCond1 = ref('');
      const varIdCond1 = ref('');
      const varTypeIdCond2 = ref('');
      const varIdCond2 = ref('');
      const dsDataTextFieldId = ref('');
      const dsDataValueFieldId = ref('');
      const dsCondFieldId = ref('');
      const dsSortFieldId = ref('');

      const queryOptionId = ref('');

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelEditRegionFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitEditRegionFlds':
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
          case 'btnCancelEditRegionFlds':
            return strCancelButtonText.value;
          case 'btnSubmitEditRegionFlds':
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
        GetEditDataEditRegionFldsObj,
        ShowDataFromEditRegionFldsObj,
        Clear,
        btnSubmit_Click,
        fldId,
        inUse,
        labelCaption,
        colSpan,
        width,
        inOutTypeId,
        seqNum,
        ctlTypeId,
        ddlItemsOptionId,
        dsTabId,
        dsCondStr,
        dsSqlStr,
        itemsString,
        varId,
        clickEvent,
        regionId,
        changeEvent,
        colIndex,
        memo,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrInOutType,
        arrCtlType,
        arrDDLItemsOption,
        arrvPrjTab_Sim,
        arrGCVariable,

        outFldId,

        tabFeatureId4Ddl,
        varTypeIdCond1,
        varIdCond1,
        varTypeIdCond2,
        varIdCond2,
        dsDataTextFieldId,
        dsDataValueFieldId,
        dsCondFieldId,
        dsSortFieldId,

        queryOptionId,

        refPubCombo_Edit,
        SetButtonText,
        GetButtonText,
        ddlCtlTypeId_SelectedIndexChanged,
        pobjPubFun4Ddl,
        objPubFun4Ddl,
        strRegionType,
        keyId,
        BindDdl4EditRegionInDiv,
        isShowCombo,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //EditRegionFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnEditRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        EditRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
          (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
        */
      async ddlFldId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
      },

      async txtClickEvent_OnClick() {
        const strThisFuncName = this.txtClickEvent_OnClick.name;
        try {
          // const strDsTabId = this.dsTabId;

          if (IsNullOrEmpty(this.clickEvent) == false) return;

          const lngmId = Number(this.keyId);
          const objEditRegionFlds_Const = await EditRegionFlds_GetObjBymIdAsync(lngmId);
          if (objEditRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdEditV2(objEditRegionFlds_Const);
          const strDefaEvent = Format('{0}_Clicked', strCtrlId);
          this.clickEvent = strDefaEvent;
          if (IsNullOrEmpty(this.clickEvent) == true) {
            this.clickEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
      async txtChangeEvent_OnClick() {
        const strThisFuncName = this.txtChangeEvent_OnClick.name;
        try {
          if (IsNullOrEmpty(this.changeEvent) == false) return;

          const lngmId = Number(this.keyId);
          const objEditRegionFlds_Const = await EditRegionFlds_GetObjBymIdAsync(lngmId);
          if (objEditRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdEditV2(objEditRegionFlds_Const);
          const strDefaEvent = Format('{0}_SelectedIndexChanged', strCtrlId);
          this.changeEvent = strDefaEvent;
          if (IsNullOrEmpty(this.changeEvent) == true) {
            this.changeEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
    },
  });
</script>
<style scoped>
  /* Styling the select box */
  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    width: 200px;
  }

  /* Styling the dropdown arrow */
  select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer */
  }

  select::after {
    content: '\25BE'; /* Unicode code for down arrow */
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    pointer-events: none;
  }
</style>
