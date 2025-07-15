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
              id="lblInDataNodeId_q"
              name="lblInDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              In表名
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInTabId_q"
              name="ddlInTabId_q"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInDataNodeId_q"
              name="lblInDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >In数据结点
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInDataNodeId_q"
              v-model="inDataNodeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblOutDataNodeId_q"
              name="lblOutDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >Out结点
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutDataNodeId_q"
              v-model="outDataNodeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblAssociationMappingId_q"
              name="lblAssociationMappingId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关联映射
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlAssociationMappingId_q"
              v-model="associationMappingId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrAssociationMapping"
                :key="index"
                :value="item.associationMappingId"
              >
                {{ item.associationMappingName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblFuncMapModeId_q"
              name="lblFuncMapModeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >映射模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncMapModeId_q"
              v-model="funcMapModeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrFuncMapMode"
                :key="index"
                :value="item.funcMapModeId"
              >
                {{ item.funcMapModeName }}
              </option></select
            >
          </td>
        </tr>
        <tr>
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
              id="lblDnFunctionId_q"
              name="lblDnFunctionId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >DN函数
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDnFunctionId_q"
              v-model="dnFunctionId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrDnFunction"
                :key="index"
                :value="item.dnFunctionId"
              >
                {{ item.dnFunctionName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblIsHasErr_q"
              name="lblIsHasErr_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              是否有错
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsHasErr_q"
              name="ddlIsHasErr_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
          <td colspan="2">
            <span title="仅仅显示没有缓存表的相关映射" style="display: inline-block; width: 170px">
              <input id="chkShowMap4NoCache_q" type="checkbox" name="chkShowMap4NoCache_q" />
              <label for="chkShowMap4NoCache_q">显示无缓存相关映射</label>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblDnFuncMapList"
            name="lblDnFuncMapList"
            class="col-form-label text-info"
            style="width: 250px"
            >结点函数映射列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
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
            id="btnGetRingLst"
            name="btnGetRingLst"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetRingLst', '')"
            >获取环列表</button
          >
        </li>
        <li class="nav-item ml-3">
          <select
            id="ddlOutDataNodeId_Set"
            name="ddlOutDataNodeId_Set"
            class="form-control form-control-sm"
            style="width: 120px"
          ></select>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnSetOutDataNode"
            name="btnSetOutDataNode"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetOutDataNode', '')"
            >设置Out结点</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCheckDnFuncMapByCmPrjId"
            name="btnCheckDnFuncMapByCmPrjId"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('CheckDnFuncMapByCmPrjId', '')"
            >检查结点关系</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDataTest"
            name="btnDataTest"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('DataTest', '')"
            >数据测试</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <!-- <div id="divList" ref="refDivList" class="div_List">
      <DnFuncMap_ListCom
        ref="refDnFuncMap_List"
        :items="dataListDnFuncMap"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </DnFuncMap_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDnFuncMapBy" type="hidden" />
    </div> -->
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDnFuncMapBy" type="hidden" />
    </div>

    <!--编辑层-->
    <DnFuncMap_EditCom ref="refDnFuncMap_Edit"></DnFuncMap_EditCom>
    <!--详细信息层-->
    <DnFuncMap_DetailCom ref="refDnFuncMap_Detail"></DnFuncMap_DetailCom>
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
    refDnFuncMap_Edit,
    refDnFuncMap_Detail,
    refDnFuncMap_List,
    showErrorMessage,
    dataListDnFuncMap,
    emptyRecNumInfo,
    PrjId_Session,
    CmPrjId_Local,
    inDataNodeId_q,
    outDataNodeId_q,
    associationMappingId_q,
    funcMapModeId_q,
    tabId_q,
    prjId_q,
    dnFunctionId_q,
  } from '@/views/AIModule/DnFuncMapVueShare';
  import DnFuncMapCRUDEx from '@/views/AIModule/DnFuncMapCRUDEx';
  import DnFuncMap_EditCom from '@/views/AIModule/DnFuncMap_Edit.vue';
  import DnFuncMap_DetailCom from '@/views/AIModule/DnFuncMap_Detail.vue';
  // import DnFuncMap_ListCom from '@/views/AIModule/DnFuncMap_List.vue';
  import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
  import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { clsFuncMapModeEN } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
  import { vDataNode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { AssociationMapping_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  import { FuncMapMode_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { DnFunction_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
  export default defineComponent({
    name: 'DnFuncMapCRUD',
    components: {
      // 组件注册
      DnFuncMap_EditCom,
      DnFuncMap_DetailCom,
      // DnFuncMap_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const arrvDataNode_Sim = ref<clsvDataNode_SimEN[]>([]);
      const arrAssociationMapping = ref<clsAssociationMappingEN[]>([]);
      const arrFuncMapMode = ref<clsFuncMapModeEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      const arrDnFunction = ref<clsDnFunctionEN[]>([]);
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
     * @param strCmPrjId:
     * @param strPrjId:
    */
      async function getArrvDataNode_Sim(strCmPrjId: string, strPrjId: string) {
        let arrObjLstSel = await vDataNode_Sim_GetObjLstCache(strPrjId);
        if (arrObjLstSel == null) return;
        arrvDataNode_Sim.value.length = 0;
        const obj0 = new clsvDataNode_SimEN();
        obj0.dataNodeId = 0;
        obj0.dataNodeName = '请选择vDataNode_Sim...';
        arrvDataNode_Sim.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.dataNodeName.localeCompare(y.dataNodeName));
        arrObjLstSel.forEach((x) => arrvDataNode_Sim.value.push(x));
        inDataNodeId_q.value = 0;
      }
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
    */
      async function getArrAssociationMapping() {
        let arrObjLstSel = await AssociationMapping_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAssociationMapping.value.length = 0;
        const obj0 = new clsAssociationMappingEN();
        obj0.associationMappingId = '0';
        obj0.associationMappingName = '请选择关联关系映射...';
        arrAssociationMapping.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) =>
          x.associationMappingName.localeCompare(y.associationMappingName),
        );
        arrObjLstSel.forEach((x) => arrAssociationMapping.value.push(x));
        associationMappingId_q.value = '0';
      }
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
    */
      async function getArrFuncMapMode() {
        const arrObjLstSel = await FuncMapMode_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrFuncMapMode.value.length = 0;
        const obj0 = new clsFuncMapModeEN();
        obj0.funcMapModeId = '0';
        obj0.funcMapModeName = '请选择函数映射模式...';
        arrFuncMapMode.value.push(obj0);
        arrObjLstSel.forEach((x) => arrFuncMapMode.value.push(x));
        funcMapModeId_q.value = '0';
      }

      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
     * @param strPrjId:
    */
      async function getArrDnFunction(strPrjId: string) {
        let arrObjLstSel = await DnFunction_GetObjLstCache(strPrjId);
        if (arrObjLstSel == null) return;
        arrDnFunction.value.length = 0;
        const obj0 = new clsDnFunctionEN();
        obj0.dnFunctionId = '0';
        obj0.dnFunctionName = '请选择数据结点函数...';
        arrDnFunction.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
        arrObjLstSel.forEach((x) => arrDnFunction.value.push(x));
        dnFunctionId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        await getArrvDataNode_Sim(strCmPrjId, strPrjId); //查询区域

        await getArrAssociationMapping(); //查询区域

        await getArrFuncMapMode(); //查询区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);

        await getArrDnFunction(strPrjId); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('结点函数映射维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        DnFuncMapCRUDEx.vuebtn_Click = btn_Click;
        DnFuncMapCRUDEx.GetPropValue = GetPropValue;
        const objPage = new DnFuncMapCRUDEx();
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
          default:
            break;
        }
        DnFuncMapCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListDnFuncMap,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDnFuncMap_Edit,
        refDnFuncMap_Detail,
        refDnFuncMap_List,
        inDataNodeId_q,
        outDataNodeId_q,
        associationMappingId_q,
        funcMapModeId_q,
        tabId_q,
        prjId_q,
        dnFunctionId_q,
        arrvDataNode_Sim,
        arrAssociationMapping,
        arrFuncMapMode,
        arrvPrjTab_Sim,
        arrDnFunction,
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
        router.push({ name: 'editDnFuncMap', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new DnFuncMapCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
