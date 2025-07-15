<template>
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <a-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></a-button>
      </div>
    </template>
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span id="spnRootFuncId_d" name="spnRootFuncId_d" CssClass="col-form-label text-right"
                >根函数Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRootFuncId_d"
                name="lblRootFuncId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ rootFuncId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFuncName4Code_d"
                name="spnFuncName4Code_d"
                CssClass="col-form-label text-right"
                >函数名4Code</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncName4Code_d"
                name="lblFuncName4Code_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcName4Code }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncCHName4Code_d"
                name="spnFuncCHName4Code_d"
                CssClass="col-form-label text-right"
                >函数中文名4Code</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncCHName4Code_d"
                name="lblFuncCHName4Code_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcCHName4Code }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnPrevFuncId_d" name="spnPrevFuncId_d" CssClass="col-form-label text-right"
                >前函数Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrevFuncId_d"
                name="lblPrevFuncId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prevFuncId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnApplicationTypeId_d"
                name="spnApplicationTypeId_d"
                CssClass="col-form-label text-right"
                >应用程序类型ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblApplicationTypeId_d"
                name="lblApplicationTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ applicationTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFuncGCTypeId_d"
                name="spnFuncGCTypeId_d"
                CssClass="col-form-label text-right"
                >函数生成代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncGCTypeId_d"
                name="lblFuncGCTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcGCTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFunctionSignatureSim_d"
                name="spnFunctionSignatureSim_d"
                CssClass="col-form-label text-right"
                >函数签名_Sim</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFunctionSignatureSim_d"
                name="lblFunctionSignatureSim_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ functionSignatureSim }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnReturnTypeFullName_d"
                name="spnReturnTypeFullName_d"
                CssClass="col-form-label text-right"
                >返回类型全名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReturnTypeFullName_d"
                name="lblReturnTypeFullName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ returnTypeFullName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnReturnTypeId_d"
                name="spnReturnTypeId_d"
                CssClass="col-form-label text-right"
                >返回类型ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReturnTypeId_d"
                name="lblReturnTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ returnTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnCodeTypeId_d" name="spnCodeTypeId_d" CssClass="col-form-label text-right"
                >代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCodeTypeId_d"
                name="lblCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ codeTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTabName_d" name="spnTabName_d" CssClass="col-form-label text-right"
                >表名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabName_d"
                name="lblTabName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ tabName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnClsName_d" name="spnClsName_d" CssClass="col-form-label text-right"
                >类名</span
              >
            </td>
            <td class="text-left">
              <label id="lblClsName_d" name="lblClsName_d" class="text-primary">
                {{ clsName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncPurposeId_d"
                name="spnFuncPurposeId_d"
                CssClass="col-form-label text-right"
                >函数用途Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncPurposeId_d"
                name="lblFuncPurposeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcPurposeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFuncTypeId_d" name="spnFuncTypeId_d" CssClass="col-form-label text-right"
                >函数类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncTypeId_d"
                name="lblFuncTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnSourceFunction_d"
                name="spnSourceFunction_d"
                CssClass="col-form-label text-right"
                >来源函数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSourceFunction_d"
                name="lblSourceFunction_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ sourceFunction }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
                >序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOrderNum_d"
                name="lblOrderNum_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ orderNum }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFunction4Code" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import Function4Code_DetailEx from '@/views/PrjFunction/Function4Code_DetailEx';
  import { clsFunction4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeENEx';
  export default defineComponent({
    name: 'Function4CodeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const rootFuncId = ref('');
      const funcName4Code = ref('');
      const funcCHName4Code = ref('');
      const prevFuncId = ref('');
      const applicationTypeId = ref(0);
      const funcGCTypeId = ref('');
      const functionSignatureSim = ref('');
      const returnTypeFullName = ref('');
      const returnTypeId = ref('');
      const codeTypeId = ref('');
      const tabName = ref('');
      const clsName = ref('');
      const funcPurposeId = ref('');
      const funcTypeId = ref('');
      const sourceFunction = ref('');
      const orderNum = ref(0);
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFunction4CodeEN">表实体类对象</param>
       **/
      async function ShowDataFromFunction4CodeObj(pobjFunction4CodeENEx: clsFunction4CodeENEx) {
        rootFuncId.value = pobjFunction4CodeENEx.rootFuncId; // 根函数Id
        funcName4Code.value = pobjFunction4CodeENEx.funcName4Code; // 函数名4Code
        funcCHName4Code.value = pobjFunction4CodeENEx.funcCHName4Code; // 函数中文名4Code
        prevFuncId.value = pobjFunction4CodeENEx.prevFuncId; // 前函数Id
        applicationTypeId.value = pobjFunction4CodeENEx.applicationTypeId; // 应用程序类型ID
        funcGCTypeId.value = pobjFunction4CodeENEx.funcGCTypeId; // 函数生成代码类型Id
        functionSignatureSim.value = pobjFunction4CodeENEx.functionSignatureSim; // 函数签名_Sim
        returnTypeFullName.value = pobjFunction4CodeENEx.returnTypeFullName; // 返回类型全名
        returnTypeId.value = pobjFunction4CodeENEx.returnTypeId; // 返回类型ID
        codeTypeId.value = pobjFunction4CodeENEx.codeTypeId; // 代码类型Id
        tabName.value = pobjFunction4CodeENEx.tabName; // 表名
        clsName.value = pobjFunction4CodeENEx.clsName; // 类名
        funcPurposeId.value = pobjFunction4CodeENEx.funcPurposeId; // 函数用途Id
        funcTypeId.value = pobjFunction4CodeENEx.funcTypeId; // 函数类型Id
        sourceFunction.value = pobjFunction4CodeENEx.sourceFunction; // 来源函数
        orderNum.value = pobjFunction4CodeENEx.orderNum; // 序号
        memo.value = pobjFunction4CodeENEx.memo; // 说明
      }
      const strTitle = ref('函数4Code详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunction4Code':
            strCancelButtonText.value = strNewValue;
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
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        ShowDataFromFunction4CodeObj,
        rootFuncId,
        funcName4Code,
        funcCHName4Code,
        prevFuncId,
        applicationTypeId,
        funcGCTypeId,
        functionSignatureSim,
        returnTypeFullName,
        returnTypeId,
        codeTypeId,
        tabName,
        clsName,
        funcPurposeId,
        funcTypeId,
        sourceFunction,
        orderNum,
        memo,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnFunction4Code_Detail_Click(strCommandName: string, strKeyId: string) {
        Function4Code_DetailEx.btnDetail_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
