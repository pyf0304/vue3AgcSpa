<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <div
        id="divAddNewRegion"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <ul class="no">
          <li>
            <label>
              <input
                ID="chkCopyReferFilesTemplate"
                type="checkbox"
                class="Check_Defa"
              />复制界面引用文件
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkQueryRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />查询区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkDGRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />列表区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkEditRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />编辑区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkExcelExportRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />Excel导出区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkFeatureRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />功能区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkDetailRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />详细信息区域
            </label>
          </li>
          <li>
            <label>
              <input
                ID="chkTreeViewRegion"
                type="checkbox"
                AutoPostBack="True"
                class="Check_Defa"
              />树区域
            </label>
          </li>
        </ul>
      </div>

      <input id="hidOpType" type="hidden" />
    </div>

    <template #footer>
      <a-button id="btnCancelViewRegion" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewRegion"
        type="primary"
        tool-tip="生成界面区域，生成后编辑界面属性，同时生成界面代码"
        @click="btnViewRegion_Edit_Click('StartGeneRegion', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  // import ViewRegionCRUDEx  from '@/views/RegionManage/ViewRegionCRUDEx';
  import { ViewRegion_MultiCreateEx } from '@/views/RegionManage/ViewRegion_MultiCreateEx';
  export default defineComponent({
    name: 'ViewRegionEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('界面区域编辑');
      const strSubmitButtonText = ref('开始生成');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegion':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnStartGeneRegion':
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
          case 'btnCancelViewRegion':
            return strCancelButtonText.value;
          case 'btnSubmitViewRegion':
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
        //ViewRegion_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewRegion_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewRegion_MultiCreateEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
<!-- 


<script src="../lib/jquery/dist/jquery.js"></script>
    <script src="../lib/bootstrap/dist/js/bootstrap.js"></script>
    @*<script src="../js1/site.js" asp-append-version="true"></script>*@
    <script src="../lib/bootstrap/dist/js/popper.js"></script>
    <script src="../lib/require/require.js" data-main="../js/src/config"></script>
}
<script>

    /*
 按钮单击,用于调用Js函数中btnEdit_Click
(AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_btnEdit_Click)
*/
    function btnViewRegion_Edit_Click(strCommandName, strKeyId) {
        require(["../js/RegionManage/ViewRegion_MultiCreateEx.js"], function (viewregion) {
            viewregion.ViewRegion_MultiCreateEx.btnEdit_Click(strCommandName, strKeyId);
        });
    }

    /*
显示对话框
(AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_ShowDialog)
*/
    function ShowDialog(strDialogName) {
        require(['jquery', 'bootstrap'], function ($) {
            $(strDialogName).modal('show');
        });
    }

    /*
     隐藏对话框
    (AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_HideDialog)
    */
    function HideDialog(strDialogName) {
        require(['jquery', 'bootstrap'], function ($) {
            $(strDialogName).modal('hide');
        });
    }

</script>
<div id="divEditLayout_Sub" class="tab_layout">
    @*-- 编辑层 --*@ -->
