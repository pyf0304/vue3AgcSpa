<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 450px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trCmPrjId">
          <td class="text-right">
            <label
              id="lblCmPrjId"
              name="lblCmPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCmPrjId"
              name="ddlCmPrjId"
              class="form-control form-control-sm"
              style="width: 350px"
            ></select>
          </td>
        </tr>
        <tr id="trApplicationTypeId">
          <td class="text-right">
            <label
              id="lblApplicationTypeId"
              name="lblApplicationTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >应用类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId"
              name="ddlApplicationTypeId"
              class="form-control form-control-sm"
              style="width: 350px"
            ></select>
          </td>
        </tr>
        <tr id="trIsUsePrjMainPath">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 350px">
              <input
                id="chkIsUsePrjMainPath"
                name="chkIsUsePrjMainPath"
                type="checkbox"
                Text="是否使用主路径"
              /><label for="chkIsUsePrjMainPath">是否使用主路径</label></span
            >
          </td>
        </tr>
        <tr id="trIncludeXmlPath">
          <td class="text-right">
            <label
              id="lblIncludeXmlPath"
              name="lblIncludeXmlPath"
              class="col-form-label text-right"
              style="width: 90px"
              >包含表Xml路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIncludeXmlPath"
              name="txtIncludeXmlPath"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trIsTemplate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 350px">
              <input
                id="chkIsTemplate"
                name="chkIsTemplate"
                type="checkbox"
                Text="是否模板"
              /><label for="chkIsTemplate">是否模板</label></span
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
              style="width: 350px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelUserCodePrjMainPath" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitUserCodePrjMainPath"
        type="primary"
        @click="btnUserCodePrjMainPath_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import UserCodePrjMainPath_EditEx from '@/views/SystemSet/UserCodePrjMainPath_EditEx';
  export default defineComponent({
    name: 'UserCodePrjMainPathEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('用户生成项目主路径编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelUserCodePrjMainPath':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitUserCodePrjMainPath':
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
          case 'btnCancelUserCodePrjMainPath':
            return strCancelButtonText.value;
          case 'btnSubmitUserCodePrjMainPath':
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
        //UserCodePrjMainPath_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnUserCodePrjMainPath_Edit_Click(strCommandName: string, strKeyId: string) {
        UserCodePrjMainPath_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
