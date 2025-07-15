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
        <tr id="trApplicationTypeId">
          <td class="text-right">
            <label
              id="lblApplicationTypeId"
              name="lblApplicationTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >应用类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId"
              v-model="applicationTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrApplicationType"
                :key="index"
                :value="item.applicationTypeId"
              >
                {{ item.applicationTypeName }}
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
      <a-button id="btnCancelCMProjectAppRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitCMProjectAppRela"
        type="primary"
        @click="btnCMProjectAppRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CMProjectAppRela_EditEx from '@/views/CodeMan/CMProjectAppRela_EditEx';
  import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { CMProject_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  import { ApplicationType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { refDivEdit, PrjId_Session } from '@/views/CodeMan/CMProjectAppRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CMProjectAppRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const cmPrjId = ref('');
      const applicationTypeId = ref(0);
      const orderNum = ref(0);
      const prjId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrCMProject = ref<clsCMProjectEN[]>([]);
      const arrApplicationType = ref<clsApplicationTypeEN[]>([]);
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
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrApplicationType() {
        let arrObjLstSel = await ApplicationType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrApplicationType.value.length = 0;
        const obj0 = new clsApplicationTypeEN();
        obj0.applicationTypeId = 0;
        obj0.applicationTypeName = '请选择应用程序类型...';
        arrApplicationType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
        arrObjLstSel.forEach((x) => arrApplicationType.value.push(x));
        applicationTypeId.value = 0;
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        await getArrCMProject(); //编辑区域

        await getArrApplicationType(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCMProjectAppRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCMProjectAppRelaObj() {
        const pobjCMProjectAppRelaEN = new clsCMProjectAppRelaEN();
        pobjCMProjectAppRelaEN.SetCmPrjId(cmPrjId.value); // CM工程
        pobjCMProjectAppRelaEN.SetApplicationTypeId(applicationTypeId.value); // 应用类型
        pobjCMProjectAppRelaEN.SetOrderNum(orderNum.value); // 序号
        pobjCMProjectAppRelaEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjCMProjectAppRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCMProjectAppRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjCMProjectAppRelaEN.SetMemo(memo.value); // 说明
        return pobjCMProjectAppRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCMProjectAppRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromCMProjectAppRelaObj(
        pobjCMProjectAppRelaEN: clsCMProjectAppRelaEN,
      ) {
        cmPrjId.value = pobjCMProjectAppRelaEN.cmPrjId; // CM工程
        applicationTypeId.value = pobjCMProjectAppRelaEN.applicationTypeId; // 应用类型
        orderNum.value = pobjCMProjectAppRelaEN.orderNum; // 序号
        memo.value = pobjCMProjectAppRelaEN.memo; // 说明
      }
      const strTitle = ref('CM项目应用关系编辑');
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
        GetEditDataCMProjectAppRelaObj,
        ShowDataFromCMProjectAppRelaObj,
        cmPrjId,
        applicationTypeId,
        orderNum,
        prjId,
        updDate,
        updUser,
        memo,
        arrCMProject,
        arrApplicationType,
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
      btnCMProjectAppRela_Edit_Click(strCommandName: string, strKeyId: string) {
        CMProjectAppRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
