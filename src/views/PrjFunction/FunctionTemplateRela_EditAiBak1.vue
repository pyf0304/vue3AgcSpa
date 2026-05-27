<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trCodeTypeId">
          <td class="text-right">
            <label
              id="lblFunctionTemplateId"
              name="lblFunctionTemplateId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数模板Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFunctionTemplateId"
              v-model="formData.FunctionTemplateId"
              name="ddlFunctionTemplateId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblCodeTypeId"
              name="lblCodeTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTypeId"
              v-model="formData.CodeTypeId"
              name="ddlCodeTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncCodeTypeId">
          <td class="text-right">
            <label
              id="lblRegionTypeId"
              name="lblRegionTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId"
              v-model="formData.RegionTypeId"
              name="ddlRegionTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFuncCodeTypeId"
              name="lblFuncCodeTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数代码类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncCodeTypeId"
              v-model="formData.FuncCodeTypeId"
              name="ddlFuncCodeTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIsGeneCode">
          <td class="text-right">
            <label
              id="lblFuncId4GC"
              name="lblFuncId4GC"
              class="col-form-label text-right"
              style="width: 90px"
              >函数ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncId4GC"
              v-model="formData.FuncId4GC"
              name="ddlFuncId4GC"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsGeneCode"
                v-model="formData.IsGeneCode"
                name="chkIsGeneCode"
                type="checkbox"
                Text="是否生成代码"
              /><label for="chkIsGeneCode">是否生成代码</label></span
            >
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
              v-model="formData.OrderNum"
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
              v-model="formData.Memo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" v-model="formData.hidOpType" type="hidden" />
      <input id="hidKeyId" v-model="formData.hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFunctionTemplateRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunctionTemplateRela"
        type="primary"
        @click="btnFunctionTemplateRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FunctionTemplateRela_EditEx from '@/views/PrjFunction/FunctionTemplateRela_EditEx';
  import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';

  export default defineComponent({
    name: 'FunctionTemplateRelaEditAi',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('函数与模板关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');

      // 表单数据对象
      const formData = reactive({
        mId: 0,
        FunctionTemplateId: '',
        CodeTypeId: '',
        RegionTypeId: '',
        FuncCodeTypeId: '',
        FuncId4GC: '',
        IsGeneCode: false,
        OrderNum: '',
        Memo: '',
        hidOpType: '',
        hidKeyId: '',
      });

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunctionTemplateRela':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFunctionTemplateRela':
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
          case 'btnCancelFunctionTemplateRela':
            return strCancelButtonText.value;
          case 'btnSubmitFunctionTemplateRela':
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

      /**
       * 清空表单数据
       */
      const Clear = () => {
        formData.mId = 0;
        formData.FunctionTemplateId = '';
        formData.CodeTypeId = '';
        formData.RegionTypeId = '';
        formData.FuncCodeTypeId = '';
        formData.FuncId4GC = '';
        formData.IsGeneCode = false;
        formData.OrderNum = '';
        formData.Memo = '';
        formData.hidOpType = '';
        formData.hidKeyId = '';
      };

      /**
       * 显示对话框
       */
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

      /**
       * 隐藏对话框
       */
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      /**
       * 获取编辑的数据对象
       */
      const GetEditDataFunctionTemplateRelaObj = (): clsFunctionTemplateRelaENEx => {
        const obj = new clsFunctionTemplateRelaENEx();
        obj.mId = parseInt(formData.mId as any) || 0;
        obj.FunctionTemplateId = formData.FunctionTemplateId;
        obj.CodeTypeId = formData.CodeTypeId;
        obj.RegionTypeId = formData.RegionTypeId;
        obj.FuncCodeTypeId = formData.FuncCodeTypeId;
        obj.FuncId4GC = formData.FuncId4GC;
        obj.IsGeneCode = formData.IsGeneCode;
        obj.OrderNum = formData.OrderNum;
        obj.Memo = formData.Memo;
        return obj;
      };

      /**
       * 设置编辑的数据对象
       */
      const SetEditDataFunctionTemplateRelaObj = (obj: clsFunctionTemplateRelaENEx) => {
        formData.mId = obj.mId || 0;
        formData.FunctionTemplateId = obj.FunctionTemplateId || '';
        formData.CodeTypeId = obj.CodeTypeId || '';
        formData.RegionTypeId = obj.RegionTypeId || '';
        formData.FuncCodeTypeId = obj.FuncCodeTypeId || '';
        formData.FuncId4GC = obj.FuncId4GC || '';
        formData.IsGeneCode = obj.IsGeneCode || false;
        formData.OrderNum = obj.OrderNum || '';
        formData.Memo = obj.Memo || '';
      };

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        formData,
        showDialog,
        handleSave,
        hideDialog,
        Clear,
        GetEditDataFunctionTemplateRelaObj,
        SetEditDataFunctionTemplateRelaObj,
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
        //FunctionTemplateRela_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFunctionTemplateRela_Edit_Click(strCommandName: string, strKeyId: string) {
        FunctionTemplateRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
