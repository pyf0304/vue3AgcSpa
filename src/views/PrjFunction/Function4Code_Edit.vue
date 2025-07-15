<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFuncId4Code">
          <td class="text-right">
            <label
              id="lblFuncId4Code"
              name="lblFuncId4Code"
              class="col-form-label text-right"
              style="width: 90px"
              >函数Id4Code
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncId4Code"
              name="txtFuncId4Code"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFuncName4Code">
          <td class="text-right">
            <label
              id="lblFuncName4Code"
              name="lblFuncName4Code"
              class="col-form-label text-right"
              style="width: 90px"
              >函数名4Code
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncName4Code"
              name="txtFuncName4Code"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFuncCHName4Code">
          <td class="text-right">
            <label
              id="lblFuncCHName4Code"
              name="lblFuncCHName4Code"
              class="col-form-label text-right"
              style="width: 90px"
              >函数中文名4Code
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncCHName4Code"
              name="txtFuncCHName4Code"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trApplicationTypeId">
          <td class="text-right">
            <label
              id="lblApplicationTypeId"
              name="lblApplicationTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >应用
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId"
              name="ddlApplicationTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trReturnTypeID">
          <td class="text-right">
            <label
              id="lblReturnTypeID"
              name="lblReturnTypeID"
              class="col-form-label text-right"
              style="width: 90px"
              >返回类型ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlReturnTypeId"
              name="ddlReturnTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncTypeId">
          <td class="text-right">
            <label
              id="lblFuncTypeId"
              name="lblFuncTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncTypeId"
              name="ddlFuncTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trTabName">
          <td class="text-right">
            <label
              id="lblTabName"
              name="lblTabName"
              class="col-form-label text-right"
              style="width: 90px"
              >表名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabName"
              name="txtTabName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trClassName">
          <td class="text-right">
            <label
              id="lblClassName"
              name="lblClassName"
              class="col-form-label text-right"
              style="width: 90px"
              >类名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClsName"
              name="txtClsName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trOrderNum">
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
              style="width: 400px"
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
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFunction4Code" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunction4Code"
        type="primary"
        @click="btnFunction4Code_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';

  import Function4Code_EditEx from '@/views/PrjFunction/Function4Code_EditEx';
  export default defineComponent({
    name: 'Function4CodeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('函数4Code编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunction4Code':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFunction4Code':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunction4Code':
            return strCancelButtonText.value;
          case 'btnSubmitFunction4Code':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
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
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
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
        //Function4Code_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFunction4Code_Edit_Click(strCommandName: string, strKeyId: string) {
        Function4Code_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
