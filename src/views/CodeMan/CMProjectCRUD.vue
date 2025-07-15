<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblCmPrjId_q"
              name="lblCmPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjId_q"
              v-model="cmPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCmPrjName_q"
              name="lblCmPrjName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjName_q"
              v-model="cmPrjName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUseStateId_q"
              name="lblUseStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >使用状态
            </label>
          </td>

          <td>
            <button
              id="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCMProjectList"
            name="lblCMProjectList"
            class="col-form-label text-info"
            style="width: 250px"
            >CM项目列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnEditAppLst"
            name="btnEditAppLst"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('EditAppLst', '')"
            >编辑应用列表</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCMProjectBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CMProject_EditCom ref="refCMProject_Edit"></CMProject_EditCom>
    <!--详细信息层-->
    <CMProject_DetailCom ref="refCMProject_Detail"></CMProject_DetailCom>
    <CMProjectAppRela_EditLstCom ref="refCMProjectAppRela_Edit"></CMProjectAppRela_EditLstCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCMProject_Edit,
    refCMProject_Detail,
    showErrorMessage,
    dataListCMProject,
    emptyRecNumInfo,
    PrjId_Session,
    cmPrjId_q,
    cmPrjName_q,
    prjId_q,
    useStateId_q,
    applicationTypeId_f,
  } from '@/views/CodeMan/CMProjectVueShare';
  import CMProjectCRUDEx from '@/views/CodeMan/CMProjectCRUDEx';
  import CMProject_EditCom from '@/views/CodeMan/CMProject_Edit.vue';
  import CMProject_DetailCom from '@/views/CodeMan/CMProject_Detail.vue';
  import CMProjectAppRela_EditLstCom from '@/views/CodeMan/CMProjectAppRela_EditLst.vue';

  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { UseState_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { ApplicationType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { refCMProjectAppRela_Edit } from '@/views/CodeMan/CMProjectAppRelaVueShare';
  export default defineComponent({
    name: 'CMProjectCRUD',
    components: {
      // 组件注册
      CMProject_EditCom,
      CMProject_DetailCom,
      CMProjectAppRela_EditLstCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      const arrUseState = ref<clsUseStateEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
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
        useStateId_q.value = '0';
      }

      const arrApplicationType = ref<clsApplicationTypeEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData4FeatureRegion)
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
        applicationTypeId_f.value = 0;
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        await getArrUseState(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        await getArrApplicationType(); //功能区域
      }

      const strTitle = ref('CM项目维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        CMProjectCRUDEx.vuebtn_Click = btn_Click;
        CMProjectCRUDEx.GetPropValue = GetPropValue;
        const objPage = new CMProjectCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'EditAppLst':
            break;
          default:
            break;
        }
        CMProjectCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListCMProject,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refCMProjectAppRela_Edit,
        refCMProject_Edit,
        refCMProject_Detail,
        cmPrjId_q,
        cmPrjName_q,
        prjId_q,
        useStateId_q,
        applicationTypeId_f,
        arrUseState,
        arrApplicationType,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editCMProject', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new CMProjectCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
