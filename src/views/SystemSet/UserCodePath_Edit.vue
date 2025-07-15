<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trTabMainTypeId">
          <td class="text-right">
            <label
              id="lblTabMainTypeId"
              name="lblTabMainTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >表主类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabMainTypeId"
              name="ddlTabMainTypeId"
              class="form-control form-control-sm"
              style="width: 350px"
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
              style="width: 350px"
            ></select>
          </td>
        </tr>
        <tr id="trIsGeneCode">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 350px">
              <input
                id="chkIsGeneCode"
                name="chkIsGeneCode"
                type="checkbox"
                Text="是否生成代码"
              /><label for="chkIsGeneCode">是否生成代码</label></span
            >
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
        <tr id="trProjectFileName">
          <td class="text-right">
            <label
              id="lblProjectFileName"
              name="lblProjectFileName"
              class="col-form-label text-right"
              style="width: 90px"
              >工程文件名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProjectFileName"
              name="txtProjectFileName"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trProjectPath">
          <td class="text-right">
            <label
              id="lblProjectPath"
              name="lblProjectPath"
              class="col-form-label text-right"
              style="width: 90px"
              >工程路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProjectPath"
              name="txtProjectPath"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trGcPathId">
          <td class="text-right">
            <label
              id="lblGcPathId"
              name="lblGcPathId"
              class="col-form-label text-right"
              style="width: 90px"
              >GC路径
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlGcPathId"
              name="ddlGcPathId"
              class="form-control form-control-sm"
              style="width: 350px"
            ></select>
          </td>
        </tr>
        <tr id="trCodePath">
          <td class="text-right">
            <label
              id="lblCodePath"
              name="lblCodePath"
              class="col-form-label text-right"
              style="width: 90px"
              >代码路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodePath"
              name="txtCodePath"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trCodePathBackup">
          <td class="text-right">
            <label
              id="lblCodePathBackup"
              name="lblCodePathBackup"
              class="col-form-label text-right"
              style="width: 90px"
              >备份代码路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodePathBackup"
              name="txtCodePathBackup"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trSuffixPath">
          <td class="text-right">
            <label
              id="lblSuffixPath"
              name="lblSuffixPath"
              class="col-form-label text-right"
              style="width: 90px"
              >后缀路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSuffixPath"
              name="txtSuffixPath"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trPrjFileStateId">
          <td class="text-right">
            <label
              id="lblPrjFileStateId"
              name="lblPrjFileStateId"
              class="col-form-label text-right"
              style="width: 90px"
              >工程文件状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjFileStateId"
              name="ddlPrjFileStateId"
              class="form-control form-control-sm"
              style="width: 350px"
            ></select>
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
      <a-button id="btnCancelUserCodePath" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitUserCodePath"
        type="primary"
        @click="btnUserCodePath_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import UserCodePath_EditEx from '@/views/SystemSet/UserCodePath_EditEx';
  export default defineComponent({
    name: 'UserCodePathEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('用户生成路径编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelUserCodePath':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitUserCodePath':
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
          case 'btnCancelUserCodePath':
            return strCancelButtonText.value;
          case 'btnSubmitUserCodePath':
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
        //UserCodePath_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnUserCodePath_Edit_Click(strCommandName: string, strKeyId: string) {
        UserCodePath_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
