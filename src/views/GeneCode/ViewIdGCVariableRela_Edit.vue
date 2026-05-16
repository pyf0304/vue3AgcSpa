<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <a-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></a-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trVarId">
          <td class="text-right">
            <label
              id="lblVarId"
              name="lblVarId"
              class="col-form-label text-right"
              style="width: 90px"
              >变量
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId"
              v-model="varId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trDsTabId">
          <td class="text-right">
            <label
              id="lblDsTabId"
              name="lblDsTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >数据源表ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDsTabId"
              v-model="dsTabId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="onDsTabIdChanged($event)"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}({{ item.tabId }})
              </option>
            </select>
          </td>
        </tr>
        <tr id="trInitValue">
          <td class="text-right">
            <label
              id="lblInitValue"
              name="lblInitValue"
              class="col-form-label text-right"
              style="width: 90px"
              >InitValue
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInitValue"
              v-model="initValue"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrInitValue" :key="index" :value="item.value">
                {{ item.text }}
              </option>
            </select>
          </td>
        </tr>
        <tr id="trRetrievalMethodId">
          <td class="text-right">
            <label
              id="lblRetrievalMethodId"
              name="lblRetrievalMethodId"
              class="col-form-label text-right"
              style="width: 90px"
              >获取方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRetrievalMethodId"
              v-model="retrievalMethodId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrRetrievalMethod"
                :key="index"
                :value="item.retrievalMethodId"
              >
                {{ item.retrievalMethodName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsUseInRegion">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsUseInRegion"
                v-model="isUseInRegion"
                type="checkbox"
                Text="是否在区域中使用"
              /><label for="chkIsUseInRegion">是否在区域中使用</label></span
            >
          </td>
        </tr>
        <tr id="trRegionTypeNames">
          <td class="text-right">
            <label
              id="lblRegionTypeNames"
              name="lblRegionTypeNames"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型名s
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionTypeNames"
              v-model="regionTypeNames"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewIdGCVariableRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewIdGCVariableRela"
        type="primary"
        @click="btnViewIdGCVariableRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, watch } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewIdGCVariableRela_EditEx from '@/views/GeneCode/ViewIdGCVariableRela_EditEx';
  import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
  import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { vFieldTab_SimEx_GetObjLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';

  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { GCVariablePrjIdRela_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
  import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
  import { PrjTabFldEx_getTabIdLstByFldId } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { RetrievalMethod_GetArrRetrievalMethod } from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
  import { PubDataBase_GetFieldValue } from '@/ts/FunClass/PubDataBaseWApi';
  import {
    PrjId_Session,
    ViewId_Main_Session,
  } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { useUserStore } from '@/store/modulesShare/user';

  export default defineComponent({
    name: 'ViewIdGCVariableRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const varId = ref('0');
      const viewId = ref('');
      const dsTabId = ref('');
      const initValue = ref('');
      const retrievalMethodId = ref('0');
      const isUseInRegion = ref(true);
      const regionTypeNames = ref('');
      const prjId = ref('0');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrRetrievalMethod = ref<clsRetrievalMethodEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrAllPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrInitValue = ref<Array<{ value: string; text: string }>>([]);
      let initValueReqNo = 0;
      let isSyncingVarExt = false;
      let skipNextDsTabWatch = false;

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //编辑区域
        varId.value = '0';
        dsTabId.value = '';
        initValue.value = '';

        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        if (strCmPrjId != '') {
          arrAllPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN(
            strCmPrjId,
          );
        }
        if (arrAllPrjTab_Sim.value == null || arrAllPrjTab_Sim.value.length == 0) {
          arrAllPrjTab_Sim.value = await vPrjTab_Sim_GetObjLstCache(PrjId_Session.value);
        }
        arrvPrjTab_Sim.value = [];
        arrInitValue.value = [];

        arrRetrievalMethod.value = await RetrievalMethod_GetArrRetrievalMethod(); //编辑区域
        retrievalMethodId.value = '0';
      }

      async function LoadDsTabByVarRule(strVarId: string) {
        if (strVarId == '' || strVarId == '0') {
          arrvPrjTab_Sim.value = [];
          dsTabId.value = '';
          return;
        }

        const strFldId = await GCVariablePrjIdRela_func(
          clsGCVariablePrjIdRelaEN.con_VarId,
          clsGCVariablePrjIdRelaEN.con_PrjId,
          clsGCVariablePrjIdRelaEN.con_FldId,
          strVarId,
          PrjId_Session.value,
        );
        if (strFldId == '') {
          arrvPrjTab_Sim.value = [];
          dsTabId.value = '';
          return;
        }

        const arrTabId = await PrjTabFldEx_getTabIdLstByFldId(strFldId);
        const arrTabIdDistinct = Array.from(new Set((arrTabId ?? []).filter((x) => x != '')));
        const arrTabSource = arrAllPrjTab_Sim.value ?? [];
        arrvPrjTab_Sim.value = arrTabSource.filter((x) => arrTabIdDistinct.indexOf(x.tabId) > -1);

        const hasCurrDsTabId = (arrvPrjTab_Sim.value ?? []).some((x) => x.tabId == dsTabId.value);
        if (hasCurrDsTabId == false) {
          dsTabId.value = '';
        }
      }

      async function getNameFieldNameByTabId(
        strTabId: string,
        arrFieldTab: Array<{ fldId: string; fldName: string }>,
      ): Promise<string> {
        if (strTabId == '') return '';
        const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
        const objNamePrjTabFld = (arrPrjTabFld ?? []).find((x) => x.fieldTypeId == '03');
        if (objNamePrjTabFld == null || objNamePrjTabFld.fldId == '') return '';
        const objNameField = (arrFieldTab ?? []).find((x) => x.fldId == objNamePrjTabFld.fldId);
        return objNameField?.fldName ?? '';
      }

      async function getPrimaryKeyFieldNameByTabId(
        strTabId: string,
        arrFieldTab: Array<{ fldId: string; fldName: string }>,
      ): Promise<string> {
        if (strTabId == '') return '';
        const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
        const objPkPrjTabFld = (arrPrjTabFld ?? []).find((x) => x.fieldTypeId == '02');
        if (objPkPrjTabFld == null || objPkPrjTabFld.fldId == '') return '';
        const objPkField = (arrFieldTab ?? []).find((x) => x.fldId == objPkPrjTabFld.fldId);
        return objPkField?.fldName ?? '';
      }

      async function LoadInitValueByDsTabId(strDsTabId: string) {
        const currReqNo = ++initValueReqNo;
        try {
          if (strDsTabId == '' || strDsTabId == '0') {
            if (currReqNo != initValueReqNo) return;
            arrInitValue.value = [];
            initValue.value = '';
            return;
          }
          const objTab = (arrAllPrjTab_Sim.value ?? []).find((x) => x.tabId == strDsTabId);
          if (objTab == null || objTab.tabName == '') {
            if (currReqNo != initValueReqNo) return;
            arrInitValue.value = [];
            initValue.value = '';
            return;
          }
          const arrFieldTab = await vFieldTab_SimEx_GetObjLstByTabIdCache(
            PrjId_Session.value,
            strDsTabId,
          );
          if (currReqNo != initValueReqNo) return;
          const strKeyFldName = await getPrimaryKeyFieldNameByTabId(strDsTabId, arrFieldTab ?? []);
          const strTextFldName = await getNameFieldNameByTabId(strDsTabId, arrFieldTab ?? []);
          if (strKeyFldName == '' && strTextFldName == '') {
            arrInitValue.value = [];
            initValue.value = '';
            return;
          }

          let arrKeyValue: Array<string> = [];
          let arrTextValue: Array<string> = [];
          try {
            arrKeyValue = await PubDataBase_GetFieldValue(objTab.tabName, strKeyFldName, '1=1');
            if (currReqNo != initValueReqNo) return;
          } catch (error) {
            // 某些表的关键字段不支持该接口查询时，降级为使用名称字段作为值与文本。
            console.warn('LoadInitValueByDsTabId key field query failed, fallback to text field.', {
              tabName: objTab.tabName,
              keyField: strKeyFldName,
              error,
            });
            arrKeyValue = [];
          }

          if (strTextFldName != '' && strTextFldName != strKeyFldName) {
            try {
              arrTextValue = await PubDataBase_GetFieldValue(objTab.tabName, strTextFldName, '');
              if (currReqNo != initValueReqNo) return;
            } catch (error) {
              console.warn('LoadInitValueByDsTabId text field query failed.', {
                tabName: objTab.tabName,
                textField: strTextFldName,
                error,
              });
              arrTextValue = [];
            }
          }

          if (arrKeyValue.length == 0 && arrTextValue.length > 0) {
            arrKeyValue = arrTextValue;
          }

          const arrOption: Array<{ value: string; text: string }> = [];
          const mapDistinct = new Map<string, boolean>();
          const intCount = arrKeyValue?.length ?? 0;
          for (let i = 0; i < intCount; i++) {
            const strValue = (arrKeyValue[i] ?? '').toString().trim();
            if (strValue == '' || mapDistinct.has(strValue)) continue;
            const strText =
              (arrTextValue[i] ?? '').toString().trim() == ''
                ? strValue
                : (arrTextValue[i] ?? '').toString().trim();
            arrOption.push({ value: strValue, text: strText });
            mapDistinct.set(strValue, true);
          }
          arrInitValue.value = arrOption;
          if (
            arrInitValue.value.length > 0 &&
            arrInitValue.value.some((x) => x.value == initValue.value) == false
          ) {
            initValue.value = arrInitValue.value[0].value;
          }
        } catch (error) {
          console.error('LoadInitValueByDsTabId failed.', { strDsTabId, error });
          if (currReqNo != initValueReqNo) return;
          arrInitValue.value = [];
          initValue.value = '';
        }
      }

      async function SyncVarExtFields(strVarId: string, strInitDsTabId = '', strInitValue = '') {
        await LoadDsTabByVarRule(strVarId);
        if (strVarId == '' || strVarId == '0') {
          dsTabId.value = '';
          initValue.value = '';
          return;
        }

        const hasDsTab =
          strInitDsTabId != '' &&
          (arrvPrjTab_Sim.value ?? []).some((x) => x.tabId == strInitDsTabId);

        skipNextDsTabWatch = true;
        dsTabId.value = hasDsTab ? strInitDsTabId : '';
        initValue.value = strInitValue;
        await LoadInitValueByDsTabId(dsTabId.value);
      }

      async function onDsTabIdChanged(event: Event) {
        const objSelect = event.target as HTMLSelectElement | null;
        const strNewDsTabId = objSelect?.value ?? dsTabId.value;
        dsTabId.value = strNewDsTabId;
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewIdGCVariableRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewIdGCVariableRelaObj() {
        const pobjViewIdGCVariableRelaEN = new clsViewIdGCVariableRelaEN();
        pobjViewIdGCVariableRelaEN.SetVarId(varId.value); // 变量
        pobjViewIdGCVariableRelaEN.SetViewId(ViewId_Main_Session.value); // 界面Id
        pobjViewIdGCVariableRelaEN.SetDsTabId(dsTabId.value); // 数据源表ID
        pobjViewIdGCVariableRelaEN.SetInitValue(initValue.value); // 初始值
        pobjViewIdGCVariableRelaEN.SetRetrievalMethodId(retrievalMethodId.value); // 获取方式
        pobjViewIdGCVariableRelaEN.SetIsUseInRegion(isUseInRegion.value); // 是否在区域中使用
        pobjViewIdGCVariableRelaEN.SetRegionTypeNames(regionTypeNames.value); // 区域类型名s
        pobjViewIdGCVariableRelaEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjViewIdGCVariableRelaEN.SetMemo(memo.value); // 说明
        pobjViewIdGCVariableRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewIdGCVariableRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewIdGCVariableRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewIdGCVariableRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromViewIdGCVariableRelaObj(
        pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
      ) {
        isSyncingVarExt = true;
        varId.value = pobjViewIdGCVariableRelaEN.varId; // 变量
        await SyncVarExtFields(
          varId.value,
          pobjViewIdGCVariableRelaEN.dsTabId,
          pobjViewIdGCVariableRelaEN.initValue,
        );
        isSyncingVarExt = false;
        retrievalMethodId.value = pobjViewIdGCVariableRelaEN.retrievalMethodId; // 获取方式
        isUseInRegion.value = pobjViewIdGCVariableRelaEN.isUseInRegion; // 是否在区域中使用
        regionTypeNames.value = pobjViewIdGCVariableRelaEN.regionTypeNames; // 区域类型名s
        memo.value = pobjViewIdGCVariableRelaEN.memo; // 说明
      }
      const strTitle = ref('界面变量关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      onMounted(async () => {
        await BindDdl4EditRegionInDiv();
      });
      watch(varId, async (newVarId) => {
        if (isSyncingVarExt) return;
        await SyncVarExtFields(newVarId);
      });
      watch(dsTabId, async (newDsTabId, oldDsTabId) => {
        if (newDsTabId == oldDsTabId) return;
        if (skipNextDsTabWatch) {
          skipNextDsTabWatch = false;
          return;
        }
        await LoadInitValueByDsTabId(newDsTabId);
      });
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        varId.value = '0';
        dsTabId.value = '';
        initValue.value = '';
        retrievalMethodId.value = '0';
        isUseInRegion.value = false;
        regionTypeNames.value = '';
        memo.value = '';
      }
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataViewIdGCVariableRelaObj,
        ShowDataFromViewIdGCVariableRelaObj,
        varId,
        viewId,
        dsTabId,
        initValue,
        retrievalMethodId,
        isUseInRegion,
        regionTypeNames,
        prjId,
        memo,
        updUser,
        updDate,
        arrGCVariable,
        arrRetrievalMethod,
        arrvPrjTab_Sim,
        arrInitValue,
        onDsTabIdChanged,
        Clear,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewIdGCVariableRela_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewIdGCVariableRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
