<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 500px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFeatureId">
          <td class="text-right">
            <label
              id="lblApplicationTypeId"
              name="lblApplicationTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId"
              name="ddlApplicationTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFeatureId"
              name="lblFeatureId"
              class="col-form-label text-right"
              style="width: 90px"
              >功能Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFeatureId"
              name="ddlFeatureId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label
              id="lblButtonId"
              name="lblButtonId"
              class="col-form-label text-right"
              style="width: 90px"
              >按钮Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlButtonId"
              name="ddlButtonId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
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
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFeatureButtonRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFeatureButtonRela"
        type="primary"
        @click="btnFeatureButtonRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FeatureButtonRelaCRUDEx from '@/views/PrjFunction/FeatureButtonRelaCRUDEx';
  import FeatureButtonRela_EditEx from '@/views/PrjFunction/FeatureButtonRela_EditEx';
  export default defineComponent({
    name: 'FeatureButtonRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('功能按钮关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFeatureButtonRela':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFeatureButtonRela':
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
          case 'btnCancelFeatureButtonRela':
            return strCancelButtonText.value;
          case 'btnSubmitFeatureButtonRela':
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
        //FeatureButtonRela_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFeatureButtonRela_Edit_Click(strCommandName: string, strKeyId: string) {
        FeatureButtonRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_FeatureButtonRela(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new FeatureButtonRela_EditEx('', new FeatureButtonRelaCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
