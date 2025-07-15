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
                id="spnFldDispUnitStyleName_d"
                name="spnFldDispUnitStyleName_d"
                CssClass="col-form-label text-right"
                >字段显示单元样式名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldDispUnitStyleName_d"
                name="lblFldDispUnitStyleName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldDispUnitStyleName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFldDispUnitStyleDesc_d"
                name="spnFldDispUnitStyleDesc_d"
                CssClass="col-form-label text-right"
                >样式描述</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldDispUnitStyleDesc_d"
                name="lblFldDispUnitStyleDesc_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldDispUnitStyleDesc }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnStyleIdContent_d"
                name="spnStyleIdContent_d"
                CssClass="col-form-label text-right"
                >内容样式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleIdContent_d"
                name="lblStyleIdContent_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleIdContent }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnStyleIdTitle_d"
                name="spnStyleIdTitle_d"
                CssClass="col-form-label text-right"
                >标题样式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStyleIdTitle_d"
                name="lblStyleIdTitle_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ styleIdTitle }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFldDispUnitStyleContent_d"
                name="spnFldDispUnitStyleContent_d"
                CssClass="col-form-label text-right"
                >样式内容</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldDispUnitStyleContent_d"
                name="lblFldDispUnitStyleContent_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldDispUnitStyleContent }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFldDispUnitFormat_d"
                name="spnFldDispUnitFormat_d"
                CssClass="col-form-label text-right"
                >字段显示单元格式</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldDispUnitFormat_d"
                name="lblFldDispUnitFormat_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldDispUnitFormat }}
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
              <span
                id="spnStyleNameContent_d"
                name="spnStyleNameContent_d"
                CssClass="col-form-label text-right"
                >样式描述</span
              >
            </td>
            <td class="text-left">
              <label id="lblStyleNameContent_d" name="lblStyleNameContent_d" class="text-primary"
                >{{ styleNameContent }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnStyleNameTitle_d"
                name="spnStyleNameTitle_d"
                CssClass="col-form-label text-right"
                >样式描述</span
              >
            </td>
            <td class="text-left">
              <label id="lblStyleNameTitle_d" name="lblStyleNameTitle_d" class="text-primary"
                >{{ styleNameTitle }}
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
      <a-button id="btnCancelcss_FldDispUnitStyle" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import css_FldDispUnitStyle_DetailEx from '@/views/CssManage/css_FldDispUnitStyle_DetailEx';
  import { clscss_FldDispUnitStyleENEx } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleENEx';
  export default defineComponent({
    name: 'CssFldDispUnitStyleDetail',
    components: {
      // 组件注册
    },
    setup() {
      const fldDispUnitStyleName = ref('');
      const fldDispUnitStyleDesc = ref('');
      const styleIdContent = ref('');
      const styleIdTitle = ref('');
      const fldDispUnitStyleContent = ref('');
      const fldDispUnitFormat = ref('');
      const ctlTypeName = ref('');
      const styleNameContent = ref('');
      const styleNameTitle = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcss_FldDispUnitStyleEN">表实体类对象</param>
       **/
      async function ShowDataFromcss_FldDispUnitStyleObj(
        pobjcss_FldDispUnitStyleENEx: clscss_FldDispUnitStyleENEx,
      ) {
        fldDispUnitStyleName.value = pobjcss_FldDispUnitStyleENEx.fldDispUnitStyleName; // 字段显示单元样式名称
        fldDispUnitStyleDesc.value = pobjcss_FldDispUnitStyleENEx.fldDispUnitStyleDesc; // 样式描述
        styleIdContent.value = pobjcss_FldDispUnitStyleENEx.styleIdContent; // 内容样式Id
        styleIdTitle.value = pobjcss_FldDispUnitStyleENEx.styleIdTitle; // 标题样式Id
        fldDispUnitStyleContent.value = pobjcss_FldDispUnitStyleENEx.fldDispUnitStyleContent; // 样式内容
        fldDispUnitFormat.value = pobjcss_FldDispUnitStyleENEx.fldDispUnitFormat; // 字段显示单元格式
        ctlTypeName.value = pobjcss_FldDispUnitStyleENEx.ctlTypeName; // 控件类型名
        styleNameContent.value = pobjcss_FldDispUnitStyleENEx.styleNameContent; // 样式描述
        styleNameTitle.value = pobjcss_FldDispUnitStyleENEx.styleNameTitle; // 样式描述
        memo.value = pobjcss_FldDispUnitStyleENEx.memo; // 说明
      }
      const strTitle = ref('字段显示单元样式详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcss_FldDispUnitStyle':
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
          case 'btnCancelcss_FldDispUnitStyle':
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
        ShowDataFromcss_FldDispUnitStyleObj,
        fldDispUnitStyleName,
        fldDispUnitStyleDesc,
        styleIdContent,
        styleIdTitle,
        fldDispUnitStyleContent,
        fldDispUnitFormat,
        ctlTypeName,
        styleNameContent,
        styleNameTitle,
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
      btncss_FldDispUnitStyle_Detail_Click(strCommandName: string, strKeyId: string) {
        css_FldDispUnitStyle_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
