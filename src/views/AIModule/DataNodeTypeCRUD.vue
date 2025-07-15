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
              id="lblDataNodeTypeId_q"
              name="lblDataNodeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据结点类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataNodeTypeId_q"
              v-model="dataNodeTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataNodeTypeName_q"
              name="lblDataNodeTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据结点类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataNodeTypeName_q"
              v-model="dataNodeTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
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
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblDataNodeTypeList"
            name="lblDataNodeTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >数据结点类型列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <DataNodeType_ListCom
        ref="refDataNodeType_List"
        :items="dataListDataNodeType"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </DataNodeType_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDataNodeTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <DataNodeType_EditCom ref="refDataNodeType_Edit"></DataNodeType_EditCom>
    <!--详细信息层-->
    <DataNodeType_DetailCom ref="refDataNodeType_Detail"></DataNodeType_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refDataNodeType_Edit,
    refDataNodeType_Detail,
    refDataNodeType_List,
    showErrorMessage,
    dataListDataNodeType,
    emptyRecNumInfo,
    dataNodeTypeId_q,
    dataNodeTypeName_q,
  } from '@/views/AIModule/DataNodeTypeVueShare';
  import DataNodeTypeCRUDEx from '@/views/AIModule/DataNodeTypeCRUDEx';
  import DataNodeType_EditCom from '@/views/AIModule/DataNodeType_Edit.vue';
  import DataNodeType_DetailCom from '@/views/AIModule/DataNodeType_Detail.vue';
  import DataNodeType_ListCom from '@/views/AIModule/DataNodeType_List.vue';
  export default defineComponent({
    name: 'DataNodeTypeCRUD',
    components: {
      // 组件注册
      DataNodeType_EditCom,
      DataNodeType_DetailCom,
      DataNodeType_ListCom,
    },

    setup() {
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('数据结点类型维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        DataNodeTypeCRUDEx.vuebtn_Click = btn_Click;
        DataNodeTypeCRUDEx.GetPropValue = GetPropValue;
        const objPage = new DataNodeTypeCRUDEx();
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
        DataNodeTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListDataNodeType,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDataNodeType_Edit,
        refDataNodeType_Detail,
        refDataNodeType_List,
        dataNodeTypeId_q,
        dataNodeTypeName_q,
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
        router.push({ name: 'editDataNodeType', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new DataNodeTypeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
