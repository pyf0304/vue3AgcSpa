<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFldId">
          <td class="text-right">
            <label
              id="lblTabFeatureId"
              name="lblTabFeatureId"
              class="col-form-label text-right"
              style="width: 90px"
              >表功能Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabFeatureId"
              name="ddlTabFeatureId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFldId"
              name="lblFldId"
              class="col-form-label text-right"
              style="width: 90px"
              >字段Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId"
              name="ddlFldId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncName">
          <td class="text-right">
            <label
              id="lblFieldTypeId"
              name="lblFieldTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >字段类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFieldTypeId"
              name="ddlFieldTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFuncName"
              name="lblFuncName"
              class="col-form-label text-right"
              style="width: 90px"
              >函数名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncName"
              name="txtFuncName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trDefaultValue">
          <td class="text-right">
            <label
              id="lblValueGivingModeId"
              name="lblValueGivingModeId"
              class="col-form-label text-right"
              style="width: 90px"
              >给值方式Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlValueGivingModeId"
              name="ddlValueGivingModeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblDefaultValue"
              name="lblDefaultValue"
              class="col-form-label text-right"
              style="width: 90px"
              >缺省值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDefaultValue"
              name="txtDefaultValue"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trInUse">
          <td class="text-right">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
              >序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOrderNum"
              name="txtOrderNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkInUse" name="chkInUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              ></span
            >
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
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelTabFeatureFlds" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitTabFeatureFlds"
        type="primary"
        @click="btnTabFeatureFlds_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import TabFeatureFldsCRUDEx from '@/views/Table_Field/TabFeatureFldsCRUDEx';
  import TabFeatureFlds_EditEx from '@/views/Table_Field/TabFeatureFlds_EditEx';
  export default defineComponent({
    name: 'TabFeatureFldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('表功能字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTabFeatureFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTabFeatureFlds':
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
          case 'btnCancelTabFeatureFlds':
            return strCancelButtonText.value;
          case 'btnSubmitTabFeatureFlds':
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
      return {
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
        //TabFeatureFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTabFeatureFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        TabFeatureFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_TabFeatureFlds(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new TabFeatureFlds_EditEx('', new TabFeatureFldsCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
