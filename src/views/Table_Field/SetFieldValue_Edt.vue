<template>
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditDialog_SetFieldValue" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 400px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label class="col-form-label-sm text-right" style="width: 90px">目标字段</label>
          </td>
          <td class="text-left" colspan="3">
            <select
              id="ddlTargetFieldId"
              v-model="targetFieldId"
              class="form-control-sm"
              style="width: 260px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">{{
                item.fldName
              }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label class="col-form-label-sm text-right" style="width: 90px">设置值</label>
          </td>
          <td class="text-left" colspan="3">
            <input
              id="txtSetValue"
              v-model="setValue"
              class="form-control-sm"
              style="width: 260px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancel_SetFieldValue" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmit_SetFieldValue"
        type="primary"
        @click="btnSetFieldValue_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { SetFieldValue_EdtEx } from './SetFieldValue_EdtEx';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { refDivEdit } from '@/views/Table_Field/TabFeatureEditVueShare';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  export default defineComponent({
    name: 'SetFieldValueEdt',
    setup() {
      const targetFieldId = ref('');
      const setValue = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      onMounted(async () => {});
      async function BindDdl4EditRegionInDiv() {
        const strTabId = SetFieldValue_EdtEx.strTabId4SetFieldValue;
        if (IsNullOrEmpty(strTabId) == true) {
          const strMsg = Format(
            'SetFieldValue_EdtEx.strTabId4SetFieldValue为空，还没有被赋正确的值,请检查!',
          );
          throw strMsg;
        }
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(strTabId);
        targetFieldId.value = '0';
        // value giving modes
        const { ValueGivingMode_GetArrValueGivingMode } = await import(
          '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi'
        );
        arrValueGivingMode.value = await ValueGivingMode_GetArrValueGivingMode();
        valueGivingModeId.value = '0';
      }
      const arrValueGivingMode = ref<Array<any> | null>([]);
      const valueGivingModeId = ref('');
      const strTitle = ref('设置字段值-编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('600px');
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          BindDdl4EditRegionInDiv();
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
      /**
       * 按钮单击,用于调用Js函数中btnEdit_Click
       */
      function btnSetFieldValue_Edit_Click(strCommandName, strKeyId) {
        SetFieldValue_EdtEx.btnEdit_Click(strCommandName, strKeyId);
      }
      return {
        showDialog,
        strSubmitButtonText,
        strCancelButtonText,
        btnSetFieldValue_Edit_Click,
        refDivEdit,
        dialogVisible,
        dialogWidth,
        handleSave,
        hideDialog,
        strTitle,
        targetFieldId,
        setValue,
        arrvFieldTab_Sim,
        arrValueGivingMode,
        valueGivingModeId,
        BindDdl4EditRegionInDiv,
      };
    },
  });
</script>
<style scoped></style>
