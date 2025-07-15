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
              id="lblRegionTypeId_q"
              name="lblRegionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId_q"
              v-model="regionTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrRegionType"
                :key="index"
                :value="item.regionTypeId"
              >
                {{ item.regionTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId_q"
              v-model="tabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblRegionId_q"
              name="lblRegionId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionId_q"
              v-model="regionId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRegionName_q"
              name="lblRegionName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionName_q"
              v-model="regionName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblPageDispModeId_q"
              name="lblPageDispModeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >显示模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPageDispModeId_q"
              v-model="pageDispModeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrPageDispMode"
                :key="index"
                :value="item.pageDispModeId"
              >
                {{ item.pageDispModeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblContainerTypeId_q"
              name="lblContainerTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >容器类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlContainerTypeId_q"
              v-model="containerTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrGCContainerType"
                :key="index"
                :value="item.containerTypeId"
              >
                {{ item.containerTypeName }}
              </option></select
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
            id="lblViewRegionList"
            name="lblViewRegionList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面区域列表
          </label>
        </li>
        <li class="nav-item ml-3"> </li>
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
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
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
      <ViewRegion_ListCom
        ref="refViewRegion_List"
        :items="dataListViewRegion"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ViewRegion_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewRegionBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewRegion_EditCom ref="refViewRegion_Edit"></ViewRegion_EditCom>
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
    refViewRegion_Edit,
    refViewRegion_List,
    showErrorMessage,
    dataListViewRegion,
    emptyRecNumInfo,
    PrjId_Session,
    CmPrjId_Local,
    regionTypeId_q,
    tabId_q,
    regionId_q,
    regionName_q,
    pageDispModeId_q,
    containerTypeId_q,
    prjId_q,
    cmPrjId_f,
    tabId_f,
  } from '@/views/RegionManage/ViewRegionVueShare';
  import ViewRegionCRUDEx from '@/views/RegionManage/ViewRegionCRUDEx';
  import ViewRegion_EditCom from '@/views/RegionManage/ViewRegion_Edit.vue';
  import ViewRegion_ListCom from '@/views/RegionManage/ViewRegion_List.vue';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
  import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { RegionType_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { PageDispMode_GetObjLstCache } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
  import { GCContainerType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
  import { CMProject_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  export default defineComponent({
    name: 'ViewRegionCRUD',
    components: {
      // 组件注册
      ViewRegion_EditCom,
      ViewRegion_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const arrRegionType = ref<clsRegionTypeEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      const arrPageDispMode = ref<clsPageDispModeEN[]>([]);
      const arrGCContainerType = ref<clsGCContainerTypeEN[]>([]);
      const arrProjects = ref<clsProjectsEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrRegionType() {
        let arrObjLstSel = await RegionType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrRegionType.value.length = 0;
        const obj0 = new clsRegionTypeEN();
        obj0.regionTypeId = '0';
        obj0.regionTypeName = '请选择区域类型...';
        arrRegionType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.regionTypeOrderNum - y.regionTypeOrderNum);
        arrObjLstSel.forEach((x) => arrRegionType.value.push(x));
        regionTypeId_q.value = '0';
      }

      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrPageDispMode() {
        const arrObjLstSel = await PageDispMode_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrPageDispMode.value.length = 0;
        const obj0 = new clsPageDispModeEN();
        obj0.pageDispModeId = '0';
        obj0.pageDispModeName = '请选择页面显示模式...';
        arrPageDispMode.value.push(obj0);
        arrObjLstSel.forEach((x) => arrPageDispMode.value.push(x));
        pageDispModeId_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrGCContainerType() {
        let arrObjLstSel = await GCContainerType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrGCContainerType.value.length = 0;
        const obj0 = new clsGCContainerTypeEN();
        obj0.containerTypeId = '0';
        obj0.containerTypeName = '请选择gC容器类型...';
        arrGCContainerType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) =>
          x.containerTypeName.localeCompare(y.containerTypeName),
        );
        arrObjLstSel.forEach((x) => arrGCContainerType.value.push(x));
        containerTypeId_q.value = '0';
      }

      const arrCMProject = ref<clsCMProjectEN[]>([]);
      // const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData4FeatureRegion)
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      async function getArrCMProject(strPrjId: string) {
        let arrObjLstSel = await CMProject_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrCMProject.value.length = 0;
        const obj0 = new clsCMProjectEN();
        obj0.cmPrjId = '0';
        obj0.cmPrjName = '请选择cM项目...';
        arrCMProject.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
        arrObjLstSel.forEach((x) => arrCMProject.value.push(x));
        cmPrjId_f.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrRegionType(); //查询区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);
        await getArrPageDispMode(); //查询区域

        await getArrGCContainerType(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrCMProject(strPrjId); //功能区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);
      }

      const strTitle = ref('界面区域维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        ViewRegionCRUDEx.vuebtn_Click = btn_Click;
        ViewRegionCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ViewRegionCRUDEx();
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
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        ViewRegionCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListViewRegion,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refViewRegion_Edit,
        refViewRegion_List,
        regionTypeId_q,
        tabId_q,
        regionId_q,
        regionName_q,
        pageDispModeId_q,
        containerTypeId_q,
        prjId_q,
        cmPrjId_f,
        tabId_f,
        arrRegionType,
        arrvPrjTab_Sim,
        arrPageDispMode,
        arrGCContainerType,
        arrProjects,
        arrCMProject,
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
        router.push({ name: 'editViewRegion', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ViewRegionCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
