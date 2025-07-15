<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 450px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trProgLangTypeId">
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
            <input
              id="txtProgLangTypeId"
              name="txtProgLangTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trProgLangTypeName">
          <td class="text-right">
            <label
              id="lblProgLangTypeName"
              name="lblProgLangTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeName"
              name="txtProgLangTypeName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trProgLangTypeENName">
          <td class="text-right">
            <label
              id="lblProgLangTypeENName"
              name="lblProgLangTypeENName"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProgLangTypeENName"
              name="txtProgLangTypeENName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trCharEncodingId">
          <td class="text-right">
            <label
              id="lblCharEncodingId"
              name="lblCharEncodingId"
              class="col-form-label text-right"
              style="width: 90px"
              >字符编码
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCharEncodingId"
              name="ddlCharEncodingId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trIsVisible">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsVisible" name="chkIsVisible" type="checkbox" Text="是否显示" /><label
                for="chkIsVisible"
                >是否显示</label
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
              style="width: 200px"
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
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelProgLangType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitProgLangType"
        type="primary"
        @click="btnProgLangType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ProgLangType_EditEx from '@/views/SysPara/ProgLangType_EditEx';
  export default defineComponent({
    name: 'ProgLangTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('编程语言类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelProgLangType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitProgLangType':
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
          case 'btnCancelProgLangType':
            return strCancelButtonText.value;
          case 'btnSubmitProgLangType':
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
        //ProgLangType_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnProgLangType_Edit_Click(strCommandName: string, strKeyId: string) {
        ProgLangType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
