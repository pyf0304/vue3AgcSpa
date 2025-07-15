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
              <span id="spnVarName_d" name="spnVarName_d" CssClass="col-form-label text-right"
                >变量名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblVarName_d"
                name="lblVarName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ varName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnVarExpression_d"
                name="spnVarExpression_d"
                CssClass="col-form-label text-right"
                >变量表达式</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblVarExpression_d"
                name="lblVarExpression_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ varExpression }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInitValue_d" name="spnInitValue_d" CssClass="col-form-label text-right"
                >初始值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblInitValue_d"
                name="lblInitValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ initValue }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnVarTypeName_d"
                name="spnVarTypeName_d"
                CssClass="col-form-label text-right"
                >变量类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblVarTypeName_d" name="lblVarTypeName_d" class="text-primary"
                >{{ varTypeName }}
              </label>
            </td>
          </tr>
          <tr>
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
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
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
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGCVariable" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import GCVariable_DetailEx from '@/views/GeneCode/GCVariable_DetailEx';
  import { clsGCVariableENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableENEx';
  export default defineComponent({
    name: 'GCVariableDetail',
    components: {
      // 组件注册
    },
    setup() {
      const varName = ref('');
      const varExpression = ref('');
      const initValue = ref('');
      const varTypeName = ref('');
      const prjId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');
      const prjName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCVariableEN">表实体类对象</param>
       **/
      async function ShowDataFromGCVariableObj(pobjGCVariableENEx: clsGCVariableENEx) {
        varName.value = pobjGCVariableENEx.varName; // 变量名
        varExpression.value = pobjGCVariableENEx.varExpression; // 变量表达式
        initValue.value = pobjGCVariableENEx.initValue; // 初始值
        varTypeName.value = pobjGCVariableENEx.varTypeName; // 变量类型名
        prjId.value = pobjGCVariableENEx.prjId; // 工程ID
        updDate.value = pobjGCVariableENEx.updDate; // 修改日期
        updUser.value = pobjGCVariableENEx.updUser; // 修改者
        memo.value = pobjGCVariableENEx.memo; // 说明
        prjName.value = pobjGCVariableENEx.prjName; // 工程名称
      }
      const strTitle = ref('GC变量详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelGCVariable':
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
          case 'btnCancelGCVariable':
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
        ShowDataFromGCVariableObj,
        varName,
        varExpression,
        initValue,
        varTypeName,
        prjId,
        updDate,
        updUser,
        memo,
        prjName,
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
      btnGCVariable_Detail_Click(strCommandName: string, strKeyId: string) {
        GCVariable_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
