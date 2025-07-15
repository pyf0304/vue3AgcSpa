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
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjName_d"
                name="lblPrjName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnPrjDomain_d" name="spnPrjDomain_d" CssClass="col-form-label text-right"
                >域/包名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjDomain_d"
                name="lblPrjDomain_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjDomain }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTableSpace_d" name="spnTableSpace_d" CssClass="col-form-label text-right"
                >表空间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTableSpace_d"
                name="lblTableSpace_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ tableSpace }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnGetWebApiFunc_d"
                name="spnGetWebApiFunc_d"
                CssClass="col-form-label text-right"
                >获取WebApiUrl函数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGetWebApiFunc_d"
                name="lblGetWebApiFunc_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ getWebApiFunc }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsRelaDataBase_d"
                name="spnIsRelaDataBase_d"
                CssClass="col-form-label text-right"
                >是否关联数据库</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsRelaDataBase_d"
                name="lblIsRelaDataBase_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isRelaDataBase }}
              </label>
            </td>
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
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnJavaPackageName_d"
                name="spnJavaPackageName_d"
                CssClass="col-form-label text-right"
                >Java包名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblJavaPackageName_d"
                name="lblJavaPackageName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ javaPackageName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsSupportMvc_d"
                name="spnIsSupportMvc_d"
                CssClass="col-form-label text-right"
                >是否支持Mvc</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsSupportMvc_d"
                name="lblIsSupportMvc_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isSupportMvc }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsoPrjName_d" name="spnIsoPrjName_d" CssClass="col-form-label text-right"
                >ISO工程名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsoPrjName_d"
                name="lblIsoPrjName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isoPrjName }}
              </label>
            </td>
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
      <a-button id="btnCancelProjects" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import Projects_DetailEx from '@/views/PrjManage/Projects_DetailEx';
  import { clsProjectsENEx } from '@/ts/L0Entity/PrjManage/clsProjectsENEx';
  export default defineComponent({
    name: 'ProjectsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const prjName = ref('');
      const prjDomain = ref('');
      const tableSpace = ref('');
      const getWebApiFunc = ref('');
      const isRelaDataBase = ref('0');
      const useStateId = ref('');
      const javaPackageName = ref('');
      const isSupportMvc = ref('0');
      const isoPrjName = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjProjectsEN">表实体类对象</param>
       **/
      async function ShowDataFromProjectsObj(pobjProjectsENEx: clsProjectsENEx) {
        prjName.value = pobjProjectsENEx.prjName; // 工程名称
        prjDomain.value = pobjProjectsENEx.prjDomain; // 域/包名
        tableSpace.value = pobjProjectsENEx.tableSpace; // 表空间
        getWebApiFunc.value = pobjProjectsENEx.getWebApiFunc; // 获取WebApiUrl函数
        isRelaDataBase.value =
          pobjProjectsENEx.isRelaDataBase !== null
            ? pobjProjectsENEx.isRelaDataBase.toString()
            : ''; // 是否关联数据库
        useStateId.value = pobjProjectsENEx.useStateId; // 使用状态Id
        javaPackageName.value = pobjProjectsENEx.javaPackageName; // Java包名
        isSupportMvc.value =
          pobjProjectsENEx.isSupportMvc !== null ? pobjProjectsENEx.isSupportMvc.toString() : ''; // 是否支持Mvc
        isoPrjName.value = pobjProjectsENEx.isoPrjName; // ISO工程名
        memo.value = pobjProjectsENEx.memo; // 说明
      }
      const strTitle = ref('工程详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelProjects':
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
          case 'btnCancelProjects':
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
        ShowDataFromProjectsObj,
        prjName,
        prjDomain,
        tableSpace,
        getWebApiFunc,
        isRelaDataBase,
        useStateId,
        javaPackageName,
        isSupportMvc,
        isoPrjName,
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
      btnProjects_Detail_Click(strCommandName: string, strKeyId: string) {
        Projects_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
