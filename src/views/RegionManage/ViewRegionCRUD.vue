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
          <td class="text-left">
            <label
              id="lblCmPrjId_q"
              name="lblCmPrjId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              CM工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCmPrjId_q"
              name="ddlCmPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <label
              id="lblApplicationTypeId_q"
              name="lblApplicationTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              程序类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId_q"
              name="ddlApplicationTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <label
              id="lblRegionTypeId_q"
              name="lblRegionTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              区域类型
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
          <td class="text-left">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              表
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
        </tr>
        <tr>
          <td class="text-left">
            <label
              id="lblRegionId_q"
              name="lblRegionId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              区域Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionId_q"
              name="txtRegionId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left">
            <label
              id="lblRegionName_q"
              name="lblRegionName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              区域名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionName_q"
              name="txtRegionName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left">
            <label
              id="lblPageDispModeId_q"
              name="lblPageDispModeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              显示模式
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
          <td class="text-left">
            <label
              id="lblContainerTypeId_q"
              name="lblContainerTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              容器类型
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
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
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
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            界面区域列表1
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddRelaViewRegion"
            name="btnAddRelaViewRegion"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddRelaViewRegion', '')"
            >添加相关界面区域</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
            >添加-关键字自增</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCmPrjId_SetFldValue"
              name="ddlCmPrjId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
            <button
              id="btnSetCmPrjId"
              name="btnSetCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetFieldValue', '')"
              >设置CM工程Id</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <!-- <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div> -->
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
    <ViewRegion_MultiCreateCom ref="ViewRegion_MultiCreateRef"></ViewRegion_MultiCreateCom>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import ViewRegionCRUDEx from '@/views/RegionManage/ViewRegionCRUDEx';

  import ViewRegion_EditCom from '@/views/RegionManage/ViewRegion_Edit.vue';
  import ViewRegion_MultiCreateCom from '@/views/RegionManage/ViewRegion_MultiCreate.vue';

  import { ViewRegion_MultiCreateEx } from '@/views/RegionManage/ViewRegion_MultiCreateEx';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewRegion_Edit,
    CmPrjId_Local,
    PrjId_Session,
    regionTypeId_q,
    tabId_q,
    pageDispModeId_q,
    containerTypeId_q,
    dataListViewRegion,
    showErrorMessage,
    emptyRecNumInfo,
    cmPrjId_f,
    refViewRegion_List,
  } from '@/views/RegionManage/ViewRegionVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
  import { RegionType_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';

  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { PageDispMode_GetObjLstCache } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
  import { GCContainerType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
  import { CMProject_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import ViewRegion_ListCom from '@/views/RegionManage/ViewRegion_List.vue';
  import router from '@/router';
  // import { Projects_GetObjLstCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
  export default defineComponent({
    name: 'ViewRegionCRUD',
    components: {
      // 组件注册
      ViewRegion_EditCom,
      ViewRegion_MultiCreateCom,
      ViewRegion_ListCom,
    },
    setup() {
      CmPrjId_Local.value = clsPrivateSessionStorage.currSelPrjId;
      const strTitle = ref('界面区域维护');

      const ViewRegion_MultiCreateRef = ref();

      const refDivDataLst = ref();
      const arrCMProject = ref<clsCMProjectEN[]>([]);
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
      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrCMProject(strPrjId); //功能区域
        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);
      }
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        const objPage = new ViewRegionCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
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
      //     /**
      //  * 获取绑定下拉框的数据
      //  * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
      //  * @param objDDL:需要绑定当前表的下拉框

      // */
      //     async function getArrProjects() {
      //       const arrObjLstSel = await Projects_GetObjLstCache();
      //       if (arrObjLstSel == null) return;
      //       arrProjects.value.length = 0;
      //       const obj0 = new clsProjectsEN();
      //       obj0.prjId = '0';
      //       obj0.prjName = '请选择工程...';
      //       arrProjects.value.push(obj0);
      //       arrObjLstSel.forEach((x) => arrProjects.value.push(x));
      //       prjId_q.value = '0';
      //     }
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
      function btn_Click(strCommandName: string, strKeyId: string) {
        // console.log(strKeyId);
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'AddRelaViewRegion': //自定义功能
            ViewRegion_MultiCreateEx.Edit_MultiCreateRef = ViewRegion_MultiCreateRef;
            break;
          default:
            break;
        }
        ViewRegionCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ViewRegion_MultiCreateRef,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refViewRegion_Edit,
        dataListViewRegion,
        arrRegionType,

        arrvPrjTab_Sim,
        arrPageDispMode,
        arrGCContainerType,
        arrProjects,
        containerTypeId_q,
        regionTypeId_q,
        tabId_q,
        pageDispModeId_q,
        showErrorMessage,
        emptyRecNumInfo,
        refViewRegion_List,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editViewRegion', params: { courseId: data.courseId } });
      },

      // 方法定义
      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ViewRegionCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },
    },
  });
</script>
<style scoped></style>
