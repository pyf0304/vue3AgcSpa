<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trCmPrjName">
          <td class="text-right">
            <label
              id="lblCmPrjName"
              name="lblCmPrjName"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjName"
              v-model="cmPrjName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
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
        <tr id="trVueDesignSysId">
          <td class="text-right">
            <label
              id="lblVueDesignSysId"
              name="lblVueDesignSysId"
              class="col-form-label text-right"
              style="width: 90px"
              >Vue控件设计体系
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVueDesignSysId"
              v-model="vueDesignSysId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option
                v-for="(item, index) in arrVueCtrlDesignSys"
                :key="index"
                :value="item.vueDesignSysId"
              >
                {{ item.vueDesignSysName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFunctionTemplateId">
          <td class="text-right">
            <label
              id="lblFunctionTemplateId"
              name="lblFunctionTemplateId"
              class="col-form-label text-right"
              style="width: 90px"
              >函数模板
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFunctionTemplateId"
              v-model="functionTemplateId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrFunctionTemplate"
                :key="index"
                :value="item.functionTemplateId"
              >
                {{ item.functionTemplateName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsFstLcase">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsFstLcase"
                v-model="isFstLcase"
                type="checkbox"
                Text="是否首字母小写"
              /><label for="chkIsFstLcase">是否首字母小写</label></span
            >
          </td>
        </tr>
        <tr id="trProjectFileName">
          <td class="text-right">
            <label
              id="lblProjectFileName"
              name="lblProjectFileName"
              class="col-form-label text-right"
              style="width: 90px"
              >工程文件名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProjectFileName"
              v-model="projectFileName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trUseStateId">
          <td class="text-right">
            <label
              id="lblUseStateId"
              name="lblUseStateId"
              class="col-form-label text-right"
              style="width: 90px"
              >使用状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUseStateId"
              v-model="useStateId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                {{ item.useStateName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsRefresh4RelaView">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsRefresh4RelaView"
                v-model="isRefresh4RelaView"
                type="checkbox"
                Text="是否刷新相关视图"
              /><label for="chkIsRefresh4RelaView">是否刷新相关视图</label></span
            >
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
      <el-button id="btnCancelCMProject" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitCMProject"
        type="primary"
        @click="btnCMProject_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CMProject_EditEx from '@/views/CodeMan/CMProject_EditEx';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { ApplicationType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { VueCtrlDesignSys_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsVueCtrlDesignSysWApi';
  import { FunctionTemplate_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { UseState_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  export default defineComponent({
    name: 'CMProjectEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const cmPrjId = ref('');
      const cmPrjName = ref('');
      const prjId = ref('');
      const applicationTypeId = ref(0);
      const vueDesignSysId = ref('0');
      const functionTemplateId = ref('0');
      const isFstLcase = ref(true);
      const projectFileName = ref('');
      const useStateId = ref('0');
      const isRefresh4RelaView = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrApplicationType = ref<clsApplicationTypeEN[]>([]);
      const arrVueCtrlDesignSys = ref<clsVueCtrlDesignSysEN[]>([]);
      const arrFunctionTemplate = ref<clsFunctionTemplateEN[]>([]);
      const arrUseState = ref<clsUseStateEN[]>([]);
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
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrVueCtrlDesignSys() {
        const arrObjLstSel = await VueCtrlDesignSys_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrVueCtrlDesignSys.value.length = 0;
        const obj0 = new clsVueCtrlDesignSysEN();
        obj0.vueDesignSysId = '0';
        obj0.vueDesignSysName = '请选择vue控件设计体系...';
        arrVueCtrlDesignSys.value.push(obj0);
        arrObjLstSel.forEach((x) => arrVueCtrlDesignSys.value.push(x));
        vueDesignSysId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrFunctionTemplate() {
        const arrObjLstSel = await FunctionTemplate_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrFunctionTemplate.value.length = 0;
        const obj0 = new clsFunctionTemplateEN();
        obj0.functionTemplateId = '0';
        obj0.functionTemplateName = '请选择函数模板...';
        arrFunctionTemplate.value.push(obj0);
        arrObjLstSel.forEach((x) => arrFunctionTemplate.value.push(x));
        functionTemplateId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrUseState() {
        const arrObjLstSel = await UseState_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrUseState.value.length = 0;
        const obj0 = new clsUseStateEN();
        obj0.useStateId = '0';
        obj0.useStateName = '请选择使用状态...';
        arrUseState.value.push(obj0);
        arrObjLstSel.forEach((x) => arrUseState.value.push(x));
        useStateId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        await getArrApplicationType(); //编辑区域

        await getArrVueCtrlDesignSys(); //编辑区域

        await getArrFunctionTemplate(); //编辑区域

        await getArrUseState(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCMProjectEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCMProjectObj() {
        const pobjCMProjectEN = new clsCMProjectEN();
        pobjCMProjectEN.SetCmPrjId(cmPrjId.value); // CM工程Id
        pobjCMProjectEN.SetCmPrjName(cmPrjName.value); // CM工程名
        pobjCMProjectEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
        pobjCMProjectEN.SetApplicationTypeId(applicationTypeId.value); // 应用类型
        pobjCMProjectEN.SetVueDesignSysId(vueDesignSysId.value); // Vue控件设计体系
        pobjCMProjectEN.SetFunctionTemplateId(functionTemplateId.value); // 函数模板
        pobjCMProjectEN.SetIsFstLcase(isFstLcase.value); // 是否首字母小写
        pobjCMProjectEN.SetProjectFileName(projectFileName.value); // 工程文件名
        pobjCMProjectEN.SetUseStateId(useStateId.value); // 使用状态
        pobjCMProjectEN.SetIsRefresh4RelaView(isRefresh4RelaView.value); // 是否刷新相关视图
        pobjCMProjectEN.SetMemo(memo.value); // 说明
        pobjCMProjectEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCMProjectEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjCMProjectEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCMProjectEN">表实体类对象</param>
       **/
      async function ShowDataFromCMProjectObj(pobjCMProjectEN: clsCMProjectEN) {
        cmPrjId.value = pobjCMProjectEN.cmPrjId; // CM工程Id
        cmPrjName.value = pobjCMProjectEN.cmPrjName; // CM工程名
        applicationTypeId.value = pobjCMProjectEN.applicationTypeId; // 应用类型
        vueDesignSysId.value = pobjCMProjectEN.vueDesignSysId; // Vue控件设计体系
        functionTemplateId.value = pobjCMProjectEN.functionTemplateId; // 函数模板
        isFstLcase.value = pobjCMProjectEN.isFstLcase; // 是否首字母小写
        projectFileName.value = pobjCMProjectEN.projectFileName; // 工程文件名
        useStateId.value = pobjCMProjectEN.useStateId; // 使用状态
        isRefresh4RelaView.value = pobjCMProjectEN.isRefresh4RelaView; // 是否刷新相关视图
        memo.value = pobjCMProjectEN.memo; // 说明
      }
      const strTitle = ref('CM项目编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (resolve) => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        resolve('对话框打开成功');
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
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataCMProjectObj,
        ShowDataFromCMProjectObj,
        cmPrjId,
        cmPrjName,
        prjId,
        applicationTypeId,
        vueDesignSysId,
        functionTemplateId,
        isFstLcase,
        projectFileName,
        useStateId,
        isRefresh4RelaView,
        memo,
        updDate,
        updUserId,
        arrApplicationType,
        arrVueCtrlDesignSys,
        arrFunctionTemplate,
        arrUseState,
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
      btnCMProject_Edit_Click(strCommandName: string, strKeyId: string) {
        CMProject_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
