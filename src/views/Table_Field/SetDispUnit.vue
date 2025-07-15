<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="divSetDispUnitObj" class="tab_layout">
      <!-- 标题层 -->
      <div>
        <!-- 查询层 -->
        <div id="divQuery_Sel" class="div_query">
          <table
            id="tabEdit"
            style="width: 600px"
            class="table table-bordered table-hover td table-sm"
          >
            <tr>
              <td class="text-right">
                <label
                  id="lblFldName"
                  name="lblFldName"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  字段名
                </label>
              </td>
              <td class="text-left">
                <span id="spnFldName" class="col-form-label text-right"> </span>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblCtlTypeId_du"
                  name="lblCtlTypeId_du"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  控件类型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlCtlTypeId_du"
                  v-model="ctlTypeId_du"
                  class="form-control form-control-sm"
                  style="width: 150px"
                  @change="ddlCtlTypeIdDu_SelectedIndexChanged()"
                ></select>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblFldDispUnitStyleId"
                  name="lblFldDispUnitStyleId"
                  class="col-form-label text-right"
                  style="width: 120px"
                >
                  字段单元显示样式
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlFldDispUnitStyleId"
                  v-model="fldDispUnitStyleId"
                  class="form-control form-control-sm"
                  style="width: 150px"
                  @change="ddlFldDispUnitStyleId_SelectedIndexChanged()"
                ></select>
              </td>
            </tr>
            <tr class="mt-2">
              <td colspan="2" class="text-center">
                <div class="text-center" style="width: 100%">
                  <span id="spnDispResult"> </span>
                </div>
              </td>
            </tr>
            <tr class="mt-2">
              <td colspan="2" class="text-center">
                <div class="text-center" style="width: 100%">
                  <button
                    id="btnSubmit_SetDispUnitc"
                    name="btnSubmit_SetDispUnitc"
                    class="btn btn-outline-warning btn-sm text-nowrap"
                    onclick="btnEdit_Click('Submit_SetDispUnitc')"
                    >提交</button
                  >
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div style="position: relative; width: 548px; height: 37px; left: 0px; top: 0px">
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTabFld" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjTabFld"
        type="primary"
        @click="btnPrjTabFld_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import PrjTabFld_EditEx from '@/views/Table_Field/PrjTabFld_EditEx';
  import { css_FldDispUnitStyle_BindDdl_FldDispUnitStyleIdByCtlTypeIdInDivCache } from '@/ts/L3ForWApi/CssManage/clscss_FldDispUnitStyleWApi';
  import { SetSpanHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { css_FldDispUnitStyleEx_GetHtml4TitleContent } from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
  import { divSetDispUnitObj } from '@/views/Table_Field/SetDispUnitVueShare';
  export default defineComponent({
    name: 'PrjTabFldEdit',
    components: {
      // 组件注册
    },
    setup() {
      const fldDispUnitStyleId = ref(''); // 字段单元显示样式
      const ctlTypeId_du = ref(''); // 控件类型下拉框
      onMounted(async () => {
        await BindDdl4EditRegionInDiv();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}
      const strTitle = ref('工程表字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTabFld':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPrjTabFld':
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
          case 'btnCancelPrjTabFld':
            return strCancelButtonText.value;
          case 'btnSubmitPrjTabFld':
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
        ctlTypeId_du,
        fldDispUnitStyleId,
        divSetDispUnitObj,
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
        //PrjTabFld_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjTabFld_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjTabFld_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_PrjTabFld(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new PrjTabFld_EditEx(new PrjTabFldCRUDEx());
        // objPage.btnSubmit_Click();
      },
      async ddlFldDispUnitStyleId_SelectedIndexChanged() {
        const strCtlTypeId = this.ctlTypeId_du;
        if (IsNullOrEmpty(strCtlTypeId)) {
          return;
          //alert('请选择一个有在扩展层:css_FldDispUnitStyle_EditExEx中重写该函数！');
        }
        await this.ShowResult(); //编辑区域
      },
      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
       **/
      async ddlCtlTypeIdDu_SelectedIndexChanged() {
        const strCtlTypeId = this.ctlTypeId_du;
        if (IsNullOrEmpty(strCtlTypeId)) {
          return;
          //alert('请选择一个有在扩展层:css_FldDispUnitStyle_EditExEx中重写该函数！');
        }
        await this.SetDdl_ddlFldDispUnitStyleIdInDiv(strCtlTypeId); //编辑区域
      },
      async ShowResult() {
        const strFldDispUnitStyleId = this.fldDispUnitStyleId;
        if (IsNullOrEmpty(strFldDispUnitStyleId) == true) return;
        const strDispResult = await css_FldDispUnitStyleEx_GetHtml4TitleContent(
          strFldDispUnitStyleId,
          '标题',
          '内容',
        );
        SetSpanHtmlByIdInDivObj(this.divSetDispUnitObj, 'spnDispResult', strDispResult);
      },

      async SetDdl_ddlFldDispUnitStyleIdInDiv(strCtlTypeId: string) {
        await css_FldDispUnitStyle_BindDdl_FldDispUnitStyleIdByCtlTypeIdInDivCache(
          this.divSetDispUnitObj,
          'ddlFldDispUnitStyleId',
          strCtlTypeId,
        ); //
      },
    },
  });
</script>
<style scoped></style>

<!-- <script>

    /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    **/
    function btnEdit_Click(strCommandName, strKeyId) {
        require(["../js/Table_Field/SetDispUnitEx.js"], function (dnpath) {
            dnpath.SetDispUnitEx.btnEdit_Click(strCommandName, strKeyId);
        });
    }

    /**
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    **/
    window.onload = function () {
        require(["../js/Table_Field/SetDispUnitEx.js"], function (dnpath) {
            var objPage = new dnpath.SetDispUnitEx();
            objPage.Page_LoadCache();
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

</script> -->
