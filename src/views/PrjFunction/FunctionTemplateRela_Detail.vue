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
              <span
                id="spnFunctionTemplateId_d"
                name="spnFunctionTemplateId_d"
                CssClass="col-form-label text-right"
                >函数模板Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFunctionTemplateId_d"
                name="lblFunctionTemplateId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ functionTemplateId }}
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
              <span
                id="spnRegionTypeId_d"
                name="spnRegionTypeId_d"
                CssClass="col-form-label text-right"
                >区域类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRegionTypeId_d"
                name="lblRegionTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ regionTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFuncId4GC_d" name="spnFuncId4GC_d" CssClass="col-form-label text-right"
                >函数ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncId4GC_d"
                name="lblFuncId4GC_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcId4GC }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsGeneCode_d" name="spnIsGeneCode_d" CssClass="col-form-label text-right"
                >是否生成代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsGeneCode_d"
                name="lblIsGeneCode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isGeneCode }}
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
      <a-button id="btnCancelFunctionTemplateRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FunctionTemplateRela_DetailEx from '@/views/PrjFunction/FunctionTemplateRela_DetailEx';
  import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
  export default defineComponent({
    name: 'FunctionTemplateRelaDetail',
    components: {
      // 组件注册
    },
    setup() {
      const functionTemplateId = ref('');
      const codeTypeId = ref('');
      const regionTypeId = ref('');
      const funcId4GC = ref('');
      const isGeneCode = ref('0');
      const orderNum = ref(0);
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFunctionTemplateRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromFunctionTemplateRelaObj(
        pobjFunctionTemplateRelaENEx: clsFunctionTemplateRelaENEx,
      ) {
        functionTemplateId.value = pobjFunctionTemplateRelaENEx.functionTemplateId; // 函数模板Id
        codeTypeId.value = pobjFunctionTemplateRelaENEx.codeTypeId; // 代码类型Id
        regionTypeId.value = pobjFunctionTemplateRelaENEx.regionTypeId; // 区域类型Id
        funcId4GC.value = pobjFunctionTemplateRelaENEx.funcId4GC; // 函数ID
        isGeneCode.value =
          pobjFunctionTemplateRelaENEx.isGeneCode !== null
            ? pobjFunctionTemplateRelaENEx.isGeneCode.toString()
            : ''; // 是否生成代码
        orderNum.value = pobjFunctionTemplateRelaENEx.orderNum; // 序号
        memo.value = pobjFunctionTemplateRelaENEx.memo; // 说明
      }
      const strTitle = ref('函数与模板关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunctionTemplateRela':
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
          case 'btnCancelFunctionTemplateRela':
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
        ShowDataFromFunctionTemplateRelaObj,
        functionTemplateId,
        codeTypeId,
        regionTypeId,
        funcId4GC,
        isGeneCode,
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
      btnFunctionTemplateRela_Detail_Click(strCommandName: string, strKeyId: string) {
        FunctionTemplateRela_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
