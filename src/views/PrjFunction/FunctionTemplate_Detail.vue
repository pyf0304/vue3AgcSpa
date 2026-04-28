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
                id="spnFunctionTemplateName_d"
                name="spnFunctionTemplateName_d"
                CssClass="col-form-label text-right"
                >函数模板名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFunctionTemplateName_d"
                name="lblFunctionTemplateName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ functionTemplateName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFunctionTemplateENName_d"
                name="spnFunctionTemplateENName_d"
                CssClass="col-form-label text-right"
                >函数模板英文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFunctionTemplateENName_d"
                name="lblFunctionTemplateENName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ functionTemplateENName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnProgLangTypeId_d"
                name="spnProgLangTypeId_d"
                CssClass="col-form-label text-right"
                >编程语言类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblProgLangTypeId_d"
                name="lblProgLangTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ progLangTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnCreateUserId_d"
                name="spnCreateUserId_d"
                CssClass="col-form-label text-right"
                >建立用户Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCreateUserId_d"
                name="lblCreateUserId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ createUserId }}
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
      <a-button id="btnCancelFunctionTemplate" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FunctionTemplate_DetailEx from '@/views/PrjFunction/FunctionTemplate_DetailEx';
  import { clsFunctionTemplateENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateENEx';
  export default defineComponent({
    name: 'FunctionTemplateDetail',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('函数模板详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const functionTemplateName = ref('');
      const functionTemplateENName = ref('');
      const progLangTypeId = ref('');
      const createUserId = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjFunctionTemplateEN">表实体类对象</param>
       **/
      async function ShowDataFromFunctionTemplateObj(
        pobjFunctionTemplateENEx: clsFunctionTemplateENEx,
      ) {
        functionTemplateName.value = pobjFunctionTemplateENEx.functionTemplateName; // 函数模板名
        functionTemplateENName.value = pobjFunctionTemplateENEx.functionTemplateENName; // 函数模板英文名
        progLangTypeId.value = pobjFunctionTemplateENEx.progLangTypeId; // 编程语言类型Id
        createUserId.value = pobjFunctionTemplateENEx.createUserId; // 建立用户Id
        memo.value = pobjFunctionTemplateENEx.memo; // 说明
      }

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_ShowDialog)
       **/
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
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_HideDialog)
       **/
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

        ShowDataFromFunctionTemplateObj,
        functionTemplateName,
        functionTemplateENName,
        progLangTypeId,
        createUserId,
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
      btnFunctionTemplate_Detail_Click(strCommandName: string, strKeyId: string) {
        FunctionTemplate_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
