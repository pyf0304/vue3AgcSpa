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
                id="spnFuncModuleName_d"
                name="spnFuncModuleName_d"
                CssClass="col-form-label text-right"
                >功能模块名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncModuleName_d"
                name="lblFuncModuleName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcModuleName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFuncModuleEnName_d"
                name="spnFuncModuleEnName_d"
                CssClass="col-form-label text-right"
                >功能模块英文名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncModuleEnName_d"
                name="lblFuncModuleEnName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcModuleEnName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncModuleNameSim_d"
                name="spnFuncModuleNameSim_d"
                CssClass="col-form-label text-right"
                >功能模块简称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncModuleNameSim_d"
                name="lblFuncModuleNameSim_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcModuleNameSim }}
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
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjName_d" name="lblPrjName_d" class="text-primary" style="width: 100px"
                >{{ prjName }}
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
      <a-button id="btnCancelFuncModule_Agc" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FuncModule_Agc_DetailEx from '@/views/PrjManage/FuncModule_Agc_DetailEx';
  import { clsFuncModule_AgcENEx } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcENEx';
  export default defineComponent({
    name: 'FuncModuleAgcDetail',
    components: {
      // 组件注册
    },
    setup() {
      const funcModuleName = ref('');
      const funcModuleEnName = ref('');
      const funcModuleNameSim = ref('');
      const prjId = ref('');
      const orderNum = ref(0);
      const useStateId = ref('');
      const prjName = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFuncModule_AgcEN">表实体类对象</param>
       **/
      async function ShowDataFromFuncModule_AgcObj(pobjFuncModule_AgcENEx: clsFuncModule_AgcENEx) {
        funcModuleName.value = pobjFuncModule_AgcENEx.funcModuleName; // 功能模块名称
        funcModuleEnName.value = pobjFuncModule_AgcENEx.funcModuleEnName; // 功能模块英文名称
        funcModuleNameSim.value = pobjFuncModule_AgcENEx.funcModuleNameSim; // 功能模块简称
        prjId.value = pobjFuncModule_AgcENEx.prjId; // 工程ID
        orderNum.value = pobjFuncModule_AgcENEx.orderNum; // 序号
        useStateId.value = pobjFuncModule_AgcENEx.useStateId; // 使用状态Id
        prjName.value = pobjFuncModule_AgcENEx.prjName; // 工程名称
        memo.value = pobjFuncModule_AgcENEx.memo; // 说明
      }
      const strTitle = ref('模块详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFuncModule_Agc':
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
          case 'btnCancelFuncModule_Agc':
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
        ShowDataFromFuncModule_AgcObj,
        funcModuleName,
        funcModuleEnName,
        funcModuleNameSim,
        prjId,
        orderNum,
        useStateId,
        prjName,
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
      btnFuncModule_Agc_Detail_Click(strCommandName: string, strKeyId: string) {
        FuncModule_Agc_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
