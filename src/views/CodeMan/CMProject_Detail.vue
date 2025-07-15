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
              <span id="spnCmPrjName_d" name="spnCmPrjName_d" CssClass="col-form-label text-right"
                >CM工程名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCmPrjName_d"
                name="lblCmPrjName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ cmPrjName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 150px">
                {{ prjId }}
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
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsFstLcase_d" name="spnIsFstLcase_d" CssClass="col-form-label text-right"
                >是否首字母小写</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsFstLcase_d"
                name="lblIsFstLcase_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isFstLcase }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnProjectFileName_d"
                name="spnProjectFileName_d"
                CssClass="col-form-label text-right"
                >工程文件名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblProjectFileName_d"
                name="lblProjectFileName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ projectFileName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUseStateId_d" name="spnUseStateId_d" CssClass="col-form-label text-right"
                >使用状态Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUseStateId_d"
                name="lblUseStateId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ useStateId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsRefresh4RelaView_d"
                name="spnIsRefresh4RelaView_d"
                CssClass="col-form-label text-right"
                >是否刷新相关视图</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsRefresh4RelaView_d"
                name="lblIsRefresh4RelaView_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isRefresh4RelaView }}
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
            <td class="text-right">
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjName_d" name="lblPrjName_d" class="text-primary"
                >{{ prjName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnApplicationTypeSimName_d"
                name="spnApplicationTypeSimName_d"
                CssClass="col-form-label text-right"
                >应用程序类型简称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblApplicationTypeSimName_d"
                name="lblApplicationTypeSimName_d"
                class="text-primary"
                >{{ applicationTypeSimName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUseStateName_d"
                name="spnUseStateName_d"
                CssClass="col-form-label text-right"
                >使用状态名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblUseStateName_d" name="lblUseStateName_d" class="text-primary"
                >{{ useStateName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnApplicationTypeName_d"
                name="spnApplicationTypeName_d"
                CssClass="col-form-label text-right"
                >应用程序类型名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblApplicationTypeName_d"
                name="lblApplicationTypeName_d"
                class="text-primary"
                >{{ applicationTypeName }}
              </label>
            </td>
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
                >{{ functionTemplateName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelCMProject" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import CMProject_DetailEx from '@/views/CodeMan/CMProject_DetailEx';
  import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
  export default defineComponent({
    name: 'CMProjectDetail',
    components: {
      // 组件注册
    },
    setup() {
      const cmPrjName = ref('');
      const prjId = ref('');
      const applicationTypeId = ref(0);
      const functionTemplateId = ref('');
      const isFstLcase = ref('0');
      const projectFileName = ref('');
      const useStateId = ref('');
      const isRefresh4RelaView = ref('0');
      const memo = ref('');
      const prjName = ref('');
      const applicationTypeSimName = ref('');
      const useStateName = ref('');
      const applicationTypeName = ref('');
      const functionTemplateName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCMProjectEN">表实体类对象</param>
       **/
      async function ShowDataFromCMProjectObj(pobjCMProjectENEx: clsCMProjectENEx) {
        cmPrjName.value = pobjCMProjectENEx.cmPrjName; // CM工程名
        prjId.value = pobjCMProjectENEx.prjId; // 工程ID
        applicationTypeId.value = pobjCMProjectENEx.applicationTypeId; // 应用程序类型ID
        functionTemplateId.value = pobjCMProjectENEx.functionTemplateId; // 函数模板Id
        isFstLcase.value =
          pobjCMProjectENEx.isFstLcase !== null ? pobjCMProjectENEx.isFstLcase.toString() : ''; // 是否首字母小写
        projectFileName.value = pobjCMProjectENEx.projectFileName; // 工程文件名
        useStateId.value = pobjCMProjectENEx.useStateId; // 使用状态Id
        isRefresh4RelaView.value =
          pobjCMProjectENEx.isRefresh4RelaView !== null
            ? pobjCMProjectENEx.isRefresh4RelaView.toString()
            : ''; // 是否刷新相关视图
        memo.value = pobjCMProjectENEx.memo; // 说明
        prjName.value = pobjCMProjectENEx.prjName; // 工程名称
        applicationTypeSimName.value = pobjCMProjectENEx.applicationTypeSimName; // 应用程序类型简称
        useStateName.value = pobjCMProjectENEx.useStateName; // 使用状态名称
        applicationTypeName.value = pobjCMProjectENEx.applicationTypeName; // 应用程序类型名称
        functionTemplateName.value = pobjCMProjectENEx.functionTemplateName; // 函数模板名
      }
      const strTitle = ref('CM项目详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCMProject':
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
          case 'btnCancelCMProject':
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
        ShowDataFromCMProjectObj,
        cmPrjName,
        prjId,
        applicationTypeId,
        functionTemplateId,
        isFstLcase,
        projectFileName,
        useStateId,
        isRefresh4RelaView,
        memo,
        prjName,
        applicationTypeSimName,
        useStateName,
        applicationTypeName,
        functionTemplateName,
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
      btnCMProject_Detail_Click(strCommandName: string, strKeyId: string) {
        CMProject_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
