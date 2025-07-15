<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trCtlTypeId">
          <td class="text-right">
            <label
              id="lblCtlTypeId"
              name="lblCtlTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeId"
              name="txtCtlTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCtlTypeName">
          <td class="text-right">
            <label
              id="lblCtlTypeName"
              name="lblCtlTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeName"
              name="txtCtlTypeName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCtlTypeENName">
          <td class="text-right">
            <label
              id="lblCtlTypeENName"
              name="lblCtlTypeENName"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeENName"
              name="txtCtlTypeENName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCtlCnName">
          <td class="text-right">
            <label
              id="lblCtlCnName"
              name="lblCtlCnName"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型中文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlCnName"
              name="txtCtlCnName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCtlTypeAbbr">
          <td class="text-right">
            <label
              id="lblCtlTypeAbbr"
              name="lblCtlTypeAbbr"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型缩写
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeAbbr"
              name="txtCtlTypeAbbr"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trHtmlCtrlTypeName">
          <td class="text-right">
            <label
              id="lblHtmlCtrlTypeName"
              name="lblHtmlCtrlTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >Html控件类型
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtHtmlCtrlTypeName"
              name="txtHtmlCtrlTypeName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trIsForApple">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsForApple"
                name="chkIsForApple"
                type="checkbox"
                Text="Is针对ISO"
              /><label for="chkIsForApple">Is针对ISO</label></span
            >
          </td>
        </tr>
        <tr id="trInUse">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input id="chkInUse" name="chkInUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              ></span
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
      <a-button id="btnCancelCtlType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button id="btnSubmitCtlType" type="primary" @click="btnCtlType_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import CtlType_EditEx from '@/views/PrjInterface/CtlType_EditEx';
  export default defineComponent({
    name: 'CtlTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('控件类型缩写编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCtlType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitCtlType':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId}在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCtlType':
            return strCancelButtonText.value;

          case 'btnSubmitCtlType':
            return strSubmitButtonText.value;

          default:
            strMsg = `按钮Id:${strButtonId}在函数中没有被处理！`;
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
        //CtlType_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnCtlType_Edit_Click(strCommandName: string, strKeyId: string) {
        CtlType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_CtlType(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new CtlType_EditEx(new CtlTypeCRUDEx());
        // objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
