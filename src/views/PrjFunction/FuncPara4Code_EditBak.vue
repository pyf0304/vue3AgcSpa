<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFuncParaId4Code">
          <td class="text-right">
            <label
              id="lblFuncParaId4Code"
              name="lblFuncParaId4Code"
              class="col-form-label text-right"
              style="width: 90px"
              >参数Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncParaId4Code"
              name="txtFuncParaId4Code"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trParaName">
          <td class="text-right">
            <label
              id="lblParaName"
              name="lblParaName"
              class="col-form-label text-right"
              style="width: 90px"
              >参数名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParaName"
              name="txtParaName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trParaCnName">
          <td class="text-right">
            <label
              id="lblParaCnName"
              name="lblParaCnName"
              class="col-form-label text-right"
              style="width: 90px"
              >参数中文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParaCnName"
              name="txtParaCnName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trDataTypeId">
          <td class="text-right">
            <label
              id="lblDataTypeId"
              name="lblDataTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >数据类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataTypeId"
              name="ddlDataTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trParameterType">
          <td class="text-right">
            <label
              id="lblParameterType"
              name="lblParameterType"
              class="col-form-label text-right"
              style="width: 90px"
              >参数类型
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParameterType"
              name="txtParameterType"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trParameterTypeFullName">
          <td class="text-right">
            <label
              id="lblParameterTypeFullName"
              name="lblParameterTypeFullName"
              class="col-form-label text-right"
              style="width: 90px"
              >参数类型全名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParameterTypeFullName"
              name="txtParameterTypeFullName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trIsByRef">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsByRef"
                name="chkIsByRef"
                type="checkbox"
                Text="是否引用型参数"
              /><label for="chkIsByRef">是否引用型参数</label></span
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFuncPara4Code" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFuncPara4Code"
        type="primary"
        @click="btnFuncPara4Code_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FuncPara4Code_EditEx from '@/views/PrjFunction/FuncPara4Code_EditEx';
  export default defineComponent({
    name: 'FuncPara4CodeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('函数参数4Code编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFuncPara4Code':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFuncPara4Code':
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
          case 'btnCancelFuncPara4Code':
            return strCancelButtonText.value;
          case 'btnSubmitFuncPara4Code':
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
        //FuncPara4Code_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFuncPara4Code_Edit_Click(strCommandName: string, strKeyId: string) {
        FuncPara4Code_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
