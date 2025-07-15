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
        <tr id="trVarId">
          <td class="text-right">
            <label
              id="lblVarId"
              name="lblVarId"
              class="col-form-label text-right"
              style="width: 90px"
              >变量
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId"
              v-model="varId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trRetrievalMethodId">
          <td class="text-right">
            <label
              id="lblRetrievalMethodId"
              name="lblRetrievalMethodId"
              class="col-form-label text-right"
              style="width: 90px"
              >获取方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRetrievalMethodId"
              v-model="retrievalMethodId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrRetrievalMethod"
                :key="index"
                :value="item.retrievalMethodId"
              >
                {{ item.retrievalMethodName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsUseInRegion">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsUseInRegion"
                v-model="isUseInRegion"
                type="checkbox"
                Text="是否在区域中使用"
              /><label for="chkIsUseInRegion">是否在区域中使用</label></span
            >
          </td>
        </tr>
        <tr id="trRegionTypeNames">
          <td class="text-right">
            <label
              id="lblRegionTypeNames"
              name="lblRegionTypeNames"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型名s
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionTypeNames"
              v-model="regionTypeNames"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewIdGCVariableRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewIdGCVariableRela"
        type="primary"
        @click="btnViewIdGCVariableRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewIdGCVariableRela_EditEx from '@/views/GeneCode/ViewIdGCVariableRela_EditEx';
  import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';

  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { RetrievalMethod_GetArrRetrievalMethod } from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
  import {
    PrjId_Session,
    ViewId_Main_Session,
  } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';

  export default defineComponent({
    name: 'ViewIdGCVariableRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const varId = ref('0');
      const viewId = ref('');
      const retrievalMethodId = ref('0');
      const isUseInRegion = ref(true);
      const regionTypeNames = ref('');
      const prjId = ref('0');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrRetrievalMethod = ref<clsRetrievalMethodEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //编辑区域
        varId.value = '0';

        arrRetrievalMethod.value = await RetrievalMethod_GetArrRetrievalMethod(); //编辑区域
        retrievalMethodId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewIdGCVariableRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewIdGCVariableRelaObj() {
        const pobjViewIdGCVariableRelaEN = new clsViewIdGCVariableRelaEN();
        pobjViewIdGCVariableRelaEN.SetVarId(varId.value); // 变量
        pobjViewIdGCVariableRelaEN.SetViewId(ViewId_Main_Session.value); // 界面Id
        pobjViewIdGCVariableRelaEN.SetRetrievalMethodId(retrievalMethodId.value); // 获取方式
        pobjViewIdGCVariableRelaEN.SetIsUseInRegion(isUseInRegion.value); // 是否在区域中使用
        pobjViewIdGCVariableRelaEN.SetRegionTypeNames(regionTypeNames.value); // 区域类型名s
        pobjViewIdGCVariableRelaEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjViewIdGCVariableRelaEN.SetMemo(memo.value); // 说明
        pobjViewIdGCVariableRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewIdGCVariableRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewIdGCVariableRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewIdGCVariableRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromViewIdGCVariableRelaObj(
        pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
      ) {
        varId.value = pobjViewIdGCVariableRelaEN.varId; // 变量
        retrievalMethodId.value = pobjViewIdGCVariableRelaEN.retrievalMethodId; // 获取方式
        isUseInRegion.value = pobjViewIdGCVariableRelaEN.isUseInRegion; // 是否在区域中使用
        regionTypeNames.value = pobjViewIdGCVariableRelaEN.regionTypeNames; // 区域类型名s
        memo.value = pobjViewIdGCVariableRelaEN.memo; // 说明
      }
      const strTitle = ref('界面变量关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      onMounted(async () => {
        await BindDdl4EditRegionInDiv();
      });
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        varId.value = '0';
        retrievalMethodId.value = '0';
        isUseInRegion.value = false;
        regionTypeNames.value = '';
        memo.value = '';
      }
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataViewIdGCVariableRelaObj,
        ShowDataFromViewIdGCVariableRelaObj,
        varId,
        viewId,
        retrievalMethodId,
        isUseInRegion,
        regionTypeNames,
        prjId,
        memo,
        updUser,
        updDate,
        arrGCVariable,
        arrRetrievalMethod,
        Clear,
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
      btnViewIdGCVariableRela_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewIdGCVariableRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
