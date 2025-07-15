<template>
  <!-- 编辑层 -->

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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trColumnWidth">
          <td class="text-right">
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >表ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabId"
              v-model="tabId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblColumnWidth"
              name="lblColumnWidth"
              class="col-form-label text-right"
              style="width: 90px"
              >结点宽
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtColumnWidth"
              v-model.number="columnWidth"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label
              id="lblNodeHeight"
              name="lblNodeHeight"
              class="col-form-label text-right"
              style="width: 90px"
              >结点高
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtNodeHeight"
              v-model.number="nodeHeight"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTabAddi" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjTabAddi"
        type="primary"
        @click="btnPrjTabAddi_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import PrjTabAddi_EditEx from '@/views/Table_Field/PrjTabAddi_EditEx';
  import { clsPrjTabAddiEN } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiEN';
  import { refDivEdit } from '@/views/Table_Field/PrjTabAddiVueShare';
  export default defineComponent({
    name: 'PrjTabAddiEdit',
    components: {
      // 组件注册
    },
    setup() {
      const tabId = ref('');
      const columnWidth = ref(0);
      const nodeHeight = ref(0);
      const updDate = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjPrjTabAddiEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjTabAddiObj() {
        const pobjPrjTabAddiEN = new clsPrjTabAddiEN();
        pobjPrjTabAddiEN.SetTabId(tabId.value); // 表ID
        pobjPrjTabAddiEN.SetColumnWidth(Number(columnWidth.value)); // 结点宽
        pobjPrjTabAddiEN.SetNodeHeight(Number(nodeHeight.value)); // 结点高
        pobjPrjTabAddiEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjPrjTabAddiEN.SetMemo(memo.value); // 说明
        return pobjPrjTabAddiEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjTabAddiEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjTabAddiObj(pobjPrjTabAddiEN: clsPrjTabAddiEN) {
        tabId.value = pobjPrjTabAddiEN.tabId; // 表ID
        columnWidth.value = pobjPrjTabAddiEN.columnWidth; // 结点宽
        nodeHeight.value = pobjPrjTabAddiEN.nodeHeight; // 结点高
        memo.value = pobjPrjTabAddiEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        tabId.value = '';
        columnWidth.value = 0;
        nodeHeight.value = 0;
        memo.value = '';
      }
      const strTitle = ref('工程表附加信息编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataPrjTabAddiObj,
        ShowDataFromPrjTabAddiObj,
        Clear,
        tabId,
        columnWidth,
        nodeHeight,
        updDate,
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

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjTabAddi_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjTabAddi_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
