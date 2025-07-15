<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trApplicationTypeSimName">
          <td class="text-right">
            <label
              id="lblApplicationTypeName"
              name="lblApplicationTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeName"
              name="txtApplicationTypeName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeSimName"
              name="lblApplicationTypeSimName"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型简称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeSimName"
              name="txtApplicationTypeSimName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trProgLangTypeId">
          <td class="text-right">
            <label
              id="lblApplicationTypeENName"
              name="lblApplicationTypeENName"
              class="col-form-label text-right"
              style="width: 90px"
              >应用类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeENName"
              name="txtApplicationTypeENName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId"
              name="lblProgLangTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlProgLangTypeId"
              name="ddlProgLangTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trProgLangTypeId3">
          <td class="text-right">
            <label
              id="lblProgLangTypeId2"
              name="lblProgLangTypeId2"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id2
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeId2"
              name="txtProgLangTypeId2"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId3"
              name="lblProgLangTypeId3"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id3
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeId3"
              name="txtProgLangTypeId3"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trProgLangTypeId5">
          <td class="text-right">
            <label
              id="lblProgLangTypeId4"
              name="lblProgLangTypeId4"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id4
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeId4"
              name="txtProgLangTypeId4"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId5"
              name="lblProgLangTypeId5"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id5
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeId5"
              name="txtProgLangTypeId5"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trVisitedNum">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsVisible" name="chkIsVisible" type="checkbox" Text="是否显示" /><label
                for="chkIsVisible"
                >是否显示</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblVisitedNum"
              name="lblVisitedNum"
              class="col-form-label text-right"
              style="width: 90px"
              >访问数
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVisitedNum"
              name="txtVisitedNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
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
      <a-button id="btnCancelApplicationType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitApplicationType"
        type="primary"
        @click="btnApplicationType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ApplicationType_EditEx from '@/views/GeneCode/ApplicationType_EditEx';
  export default defineComponent({
    name: 'ApplicationTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('应用程序类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelApplicationType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitApplicationType':
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
          case 'btnCancelApplicationType':
            return strCancelButtonText.value;
          case 'btnSubmitApplicationType':
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
        //ApplicationType_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnApplicationType_Edit_Click(strCommandName: string, strKeyId: string) {
        ApplicationType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ApplicationType(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new ApplicationType_EditEx(new ApplicationTypeCRUDEx());
        // objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
