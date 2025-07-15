<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 450px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFunctionTemplateId">
          <td class="text-right">
            <label
              id="lblFunctionTemplateId"
              name="lblFunctionTemplateId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数模板
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFunctionTemplateId"
              name="ddlFunctionTemplateId"
              class="form-control form-control-sm"
              style="width: 300px"
            ></select>
          </td>
        </tr>
        <tr id="trCodeTypeId">
          <td class="text-right">
            <label
              id="lblCodeTypeId"
              name="lblCodeTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTypeId"
              name="ddlCodeTypeId"
              class="form-control form-control-sm"
              style="width: 300px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncId4GC">
          <td class="text-right">
            <label
              id="lblFuncId4GC"
              name="lblFuncId4GC"
              class="col-form-label text-right"
              style="width: 90px"
              >函数
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncId4GC"
              name="ddlFuncId4GC"
              class="form-control form-control-sm"
              style="width: 300px"
            ></select>
          </td>
        </tr>
        <tr id="trMethodModifierId">
          <td class="text-right">
            <label
              id="lblMethodModifierId"
              name="lblMethodModifierId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数修饰语
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMethodModifierId"
              name="ddlMethodModifierId"
              class="form-control form-control-sm"
              style="width: 300px"
            ></select>
          </td>
        </tr>
        <tr id="trIsForAllTemplate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 300px">
              <input
                id="chkIsForAllTemplate"
                name="chkIsForAllTemplate"
                type="checkbox"
                Text="是否针对所有模板"
              /><label for="chkIsForAllTemplate">是否针对所有模板</label></span
            >
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
              style="width: 300px"
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
              style="width: 300px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelTabFunctionProp" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitTabFunctionProp"
        type="primary"
        @click="btnTabFunctionProp_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import TabFunctionProp_EditEx from '@/views/PrjFunction/TabFunctionProp_EditEx';
  export default defineComponent({
    name: 'TabFunctionPropEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('表函数属性编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTabFunctionProp':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTabFunctionProp':
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
          case 'btnCancelTabFunctionProp':
            return strCancelButtonText.value;
          case 'btnSubmitTabFunctionProp':
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
        //TabFunctionProp_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTabFunctionProp_Edit_Click(strCommandName: string, strKeyId: string) {
        TabFunctionProp_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
