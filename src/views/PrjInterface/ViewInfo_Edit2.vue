<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 650px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trViewId">
          <td class="text-right">
            <label
              id="lblMainTabId"
              name="lblMainTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >主表ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMainTabId"
              name="ddlMainTabId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblViewId"
              name="lblViewId"
              class="col-form-label text-right"
              style="width: 90px"
              >界面ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewId"
              name="txtViewId"
              class="form-control form-control-sm"
              style="width: 200px"
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
              >应用类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId"
              name="ddlApplicationTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncModuleAgcId">
          <td class="text-right">
            <label
              id="lblFuncModuleAgcId"
              name="lblFuncModuleAgcId"
              class="col-form-label text-right"
              style="width: 90px"
              >功能模块
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncModuleAgcId"
              name="ddlFuncModuleAgcId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trFileName">
          <td class="text-right">
            <label
              id="lblViewName"
              name="lblViewName"
              class="col-form-label text-right"
              style="width: 90px"
              >界面名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewName"
              name="txtViewName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFileName"
              name="lblFileName"
              class="col-form-label text-right"
              style="width: 90px"
              >文件名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFileName"
              name="txtFileName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trDefaMenuName">
          <td class="text-right">
            <label
              id="lblViewCnName"
              name="lblViewCnName"
              class="col-form-label text-right"
              style="width: 90px"
              >中文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewCnName"
              name="txtViewCnName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDefaMenuName"
              name="lblDefaMenuName"
              class="col-form-label text-right"
              style="width: 90px"
              >缺省菜单
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDefaMenuName"
              name="txtDefaMenuName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trIsNeedSetExportFld">
          <td class="text-right">
            <label
              id="lblFilePath"
              name="lblFilePath"
              class="col-form-label text-right"
              style="width: 90px"
              >文件路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFilePath"
              name="txtFilePath"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsNeedSetExportFld"
                name="chkIsNeedSetExportFld"
                type="checkbox"
                Text="是否需要设置导出字段"
              /><label for="chkIsNeedSetExportFld">是否需要设置导出字段</label></span
            >
          </td>
        </tr>
        <tr id="trInRelaTabId">
          <td class="text-right">
            <label
              id="lblInSqlDsTypeId"
              name="lblInSqlDsTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >输入数据源类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInSqlDsTypeId"
              name="ddlInSqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInRelaTabId"
              name="lblInRelaTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >输入表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInRelaTabId"
              name="ddlInRelaTabId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trOutRelaTabId">
          <td class="text-right">
            <label
              id="lblOutSqlDsTypeId"
              name="lblOutSqlDsTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >输出数据源类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutSqlDsTypeId"
              name="ddlOutSqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblOutRelaTabId"
              name="lblOutRelaTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >输出表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutRelaTabId"
              name="ddlOutRelaTabId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trViewFunction">
          <td class="text-right">
            <label
              id="lblViewFunction"
              name="lblViewFunction"
              class="col-form-label text-right"
              style="width: 90px"
              >界面功能
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtViewFunction"
              name="txtViewFunction"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trViewDetail">
          <td class="text-right">
            <label
              id="lblViewDetail"
              name="lblViewDetail"
              class="col-form-label text-right"
              style="width: 90px"
              >界面说明
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtViewDetail"
              name="txtViewDetail"
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
          <td class="text-left" ColSpan="3">
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
      <a-button id="btnCancelViewInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewInfo"
        type="primary"
        @click="btnViewInfo_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ViewInfoCRUDEx0 } from '@/views/PrjInterface/ViewInfoCRUDEx0';
  import { ViewInfo_Edit2Ex } from '@/views/PrjInterface/ViewInfo_Edit2Ex';
  export default defineComponent({
    name: 'ViewInfoEdit2',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('界面编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewInfo':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewInfo':
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
          case 'btnCancelViewInfo':
            return strCancelButtonText.value;
          case 'btnSubmitViewInfo':
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
        //ViewInfo_Edit2Ex.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewInfo_Edit2Ex.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ViewInfo(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ViewInfo_Edit2Ex(new ViewInfoCRUDEx0());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
