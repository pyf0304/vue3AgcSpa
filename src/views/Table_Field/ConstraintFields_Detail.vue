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
                id="spnPrjConstraintId_d"
                name="spnPrjConstraintId_d"
                CssClass="col-form-label text-right"
                >约束表Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjConstraintId_d"
                name="lblPrjConstraintId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjConstraintId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnTabId_d" name="spnTabId_d" CssClass="col-form-label text-right"
                >表ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblTabId_d" name="lblTabId_d" class="text-primary" style="width: 150px">
                {{ tabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFldId_d" name="spnFldId_d" CssClass="col-form-label text-right"
                >字段Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblFldId_d" name="lblFldId_d" class="text-primary" style="width: 150px">
                {{ fldId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnMaxValue_d" name="spnMaxValue_d" CssClass="col-form-label text-right"
                >最大值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMaxValue_d"
                name="lblMaxValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ maxValue }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMinValue_d" name="spnMinValue_d" CssClass="col-form-label text-right"
                >最小值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMinValue_d"
                name="lblMinValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ minValue }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnSortTypeId_d" name="spnSortTypeId_d" CssClass="col-form-label text-right"
                >排序类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSortTypeId_d"
                name="lblSortTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ sortTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
                >是否在用</span
              >
            </td>
            <td class="text-left">
              <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
                {{ inUse }}
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
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 150px">
                {{ prjId }}
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
      <a-button id="btnCancelConstraintFields" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ConstraintFields_DetailEx from '@/views/Table_Field/ConstraintFields_DetailEx';
  import { clsConstraintFieldsENEx } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsENEx';
  export default defineComponent({
    name: 'ConstraintFieldsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const prjConstraintId = ref('');
      const tabId = ref('');
      const fldId = ref('');
      const maxValue = ref('');
      const minValue = ref('');
      const sortTypeId = ref('');
      const inUse = ref('0');
      const orderNum = ref(0);
      const prjId = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjConstraintFieldsEN">表实体类对象</param>
       **/
      async function ShowDataFromConstraintFieldsObj(
        pobjConstraintFieldsENEx: clsConstraintFieldsENEx,
      ) {
        prjConstraintId.value = pobjConstraintFieldsENEx.prjConstraintId; // 约束表Id
        tabId.value = pobjConstraintFieldsENEx.tabId; // 表ID
        fldId.value = pobjConstraintFieldsENEx.fldId; // 字段Id
        maxValue.value = pobjConstraintFieldsENEx.maxValue; // 最大值
        minValue.value = pobjConstraintFieldsENEx.minValue; // 最小值
        sortTypeId.value = pobjConstraintFieldsENEx.sortTypeId; // 排序类型Id
        inUse.value =
          pobjConstraintFieldsENEx.inUse !== null ? pobjConstraintFieldsENEx.inUse.toString() : ''; // 是否在用
        orderNum.value = pobjConstraintFieldsENEx.orderNum; // 序号
        prjId.value = pobjConstraintFieldsENEx.prjId; // 工程ID
        memo.value = pobjConstraintFieldsENEx.memo; // 说明
      }
      const strTitle = ref('约束字段详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelConstraintFields':
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
          case 'btnCancelConstraintFields':
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
        ShowDataFromConstraintFieldsObj,
        prjConstraintId,
        tabId,
        fldId,
        maxValue,
        minValue,
        sortTypeId,
        inUse,
        orderNum,
        prjId,
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
      btnConstraintFields_Detail_Click(strCommandName: string, strKeyId: string) {
        ConstraintFields_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
