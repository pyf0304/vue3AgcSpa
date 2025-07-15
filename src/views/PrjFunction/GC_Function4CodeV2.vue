<template>
  <!-- 编辑层 -->

  <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
    <div style="width: 100%">
      <div class="mt-3">
        <table id="tabContainer" class="table table-bordered table-striped"></table>
      </div>
    </div>
    <div style="width: 100%" class="mt-3">
      <textarea id="txtCode" rows="30" style="width: 95%"></textarea>
      <input id="hidCode" type="hidden" />
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <div>
      <ul class="nav">
        <li class="nav-item">
          <button id="btnGeneCode0" class="btn btn-outline-info btn-sm" click="btnGeneCode_Click"
            >生成整个代码(备用)</button
          >
        </li>
        <li class="nav-item">
          <label id="lblGC0">Label</label>
        </li>
      </ul>
    </div>
  </div>
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
      const btnGeneCode_Click = () => {
        return true;
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
        btnGeneCode_Click,
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

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Function4Code(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new Function4Code_EditEx(new Function4CodeCRUDEx());
        // objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped>
  tr {
    text-align: center;
  }

  td {
    text-align: center;
  }

  .centered-td {
    text-align: center;
  }
</style>
