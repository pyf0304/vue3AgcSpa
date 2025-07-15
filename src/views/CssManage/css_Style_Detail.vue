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
              <span id="spnStyleId_d" name="spnStyleId_d" CssClass="col-form-label text-right"
                >样式ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleId_d"
                name="lblStyleId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnStyleName_d" name="spnStyleName_d" CssClass="col-form-label text-right"
                >样式名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleName_d"
                name="lblStyleName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCtlTypeName_d"
                name="spnCtlTypeName_d"
                CssClass="col-form-label text-right"
                >控件类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtlTypeName_d"
                name="lblCtlTypeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ ctlTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnStyleDesc_d" name="spnStyleDesc_d" CssClass="col-form-label text-right"
                >样式描述</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleDesc_d"
                name="lblStyleDesc_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleDesc }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnStyleContent_d"
                name="spnStyleContent_d"
                CssClass="col-form-label text-right"
                >样式内容</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleContent_d"
                name="lblStyleContent_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleContent }}
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
      <a-button id="btnCancelcss_Style" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import css_Style_DetailEx from '@/views/CssManage/css_Style_DetailEx';
  import { clscss_StyleENEx } from '@/ts/L0Entity/CssManage/clscss_StyleENEx';
  export default defineComponent({
    name: 'CssStyleDetail',
    components: {
      // 组件注册
    },
    setup() {
      const styleId = ref('');
      const styleName = ref('');
      const ctlTypeName = ref('');
      const styleDesc = ref('');
      const styleContent = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcss_StyleEN">表实体类对象</param>
       **/
      async function ShowDataFromcss_StyleObj(pobjcss_StyleENEx: clscss_StyleENEx) {
        styleId.value = pobjcss_StyleENEx.styleId; // 样式ID
        styleName.value = pobjcss_StyleENEx.styleName; // 样式名称
        ctlTypeName.value = pobjcss_StyleENEx.ctlTypeName; // 控件类型名
        styleDesc.value = pobjcss_StyleENEx.styleDesc; // 样式描述
        styleContent.value = pobjcss_StyleENEx.styleContent; // 样式内容
        memo.value = pobjcss_StyleENEx.memo; // 说明
      }
      const strTitle = ref('css_Style详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcss_Style':
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
          case 'btnCancelcss_Style':
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
        ShowDataFromcss_StyleObj,
        styleId,
        styleName,
        ctlTypeName,
        styleDesc,
        styleContent,
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
      btncss_Style_Detail_Click(strCommandName: string, strKeyId: string) {
        css_Style_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
