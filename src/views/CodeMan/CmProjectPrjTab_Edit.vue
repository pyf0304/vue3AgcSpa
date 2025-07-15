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
        <tr id="trCmPrjId">
          <td class="text-right">
            <label
              id="lblCmPrjId"
              name="lblCmPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCmPrjId"
              v-model="cmPrjId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrCMProject" :key="index" :value="item.cmPrjId">
                {{ item.cmPrjName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trTabId">
          <td class="text-right">
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId"
              v-model="tabId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOrderNum">
          <td class="text-right">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
              >序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOrderNum"
              v-model="orderNum"
              class="form-control form-control-sm"
              style="width: 400px"
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
      <a-button id="btnCancelCMProjectPrjTab" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitCMProjectPrjTab"
        type="primary"
        @click="btnCmProjectPrjTab_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CmProjectPrjTab_EditEx from '@/views/CodeMan/CmProjectPrjTab_EditEx';
  import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { CMProject_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { refDivEdit } from '@/views/CodeMan/CmProjectPrjTabVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'CMProjectPrjTabEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const cmPrjId = ref('0');
      const tabId = ref('0');
      const orderNum = ref(0);
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrCMProject = ref<clsCMProjectEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrCMProject() {
        const arrObjLstSel = await CMProject_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrCMProject.value.length = 0;
        const obj0 = new clsCMProjectEN();
        obj0.cmPrjId = '0';
        obj0.cmPrjName = '请选择cM项目...';
        arrCMProject.value.push(obj0);
        arrObjLstSel.forEach((x) => arrCMProject.value.push(x));
        cmPrjId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //静态变量;//Session存储、local存储

        await getArrCMProject(); //编辑区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCMProjectPrjTabEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCMProjectPrjTabObj() {
        const pobjCMProjectPrjTabEN = new clsCmProjectPrjTabEN();
        pobjCMProjectPrjTabEN.SetCmPrjId(cmPrjId.value); // CM工程
        pobjCMProjectPrjTabEN.SetTabId(tabId.value); // 表
        pobjCMProjectPrjTabEN.SetOrderNum(orderNum.value); // 序号
        pobjCMProjectPrjTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCMProjectPrjTabEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjCMProjectPrjTabEN.SetMemo(memo.value); // 说明
        return pobjCMProjectPrjTabEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCMProjectPrjTabEN">表实体类对象</param>
       **/
      async function ShowDataFromCMProjectPrjTabObj(pobjCMProjectPrjTabEN: clsCmProjectPrjTabEN) {
        cmPrjId.value = pobjCMProjectPrjTabEN.cmPrjId; // CM工程
        tabId.value = pobjCMProjectPrjTabEN.tabId; // 表
        orderNum.value = pobjCMProjectPrjTabEN.orderNum; // 序号
        memo.value = pobjCMProjectPrjTabEN.memo; // 说明
      }
      const strTitle = ref('CM项目工程表关系编辑');
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
        GetEditDataCMProjectPrjTabObj,
        ShowDataFromCMProjectPrjTabObj,
        cmPrjId,
        tabId,
        orderNum,
        updDate,
        updUser,
        memo,
        arrCMProject,
        arrvPrjTab_Sim,
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
      btnCmProjectPrjTab_Edit_Click(strCommandName: string, strKeyId: string) {
        CmProjectPrjTab_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
