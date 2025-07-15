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
              id="lblVarId_q"
              name="lblVarId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >变量Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarId_q"
              v-model="varId_q"
              name="txtVarId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblViewIdGCVariableRelaList"
            name="lblViewIdGCVariableRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面变量关系列表
          </label>
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
            id="btnGetViewVar"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetViewVar', '')"
            >获取界面变量</button
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <input
              id="txtRetrievalMethodId_SetFldValue"
              v-model="retrievalMethodId_f"
              name="txtRetrievalMethodId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            />
            <button
              id="btnSetRetrievalMethodId"
              name="btnSetRetrievalMethodId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetRetrievalMethodId', '')"
              >设置获取方式Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ViewIdGCVariableRela_ListCom
        :items="dataListViewIdGCVariableRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ViewIdGCVariableRela_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewIdGCVariableRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewIdGCVariableRela_EditCom ref="refViewIdGCVariableRela_Edit"></ViewIdGCVariableRela_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import {
    showErrorMessage,
    dataListViewIdGCVariableRela,
    emptyRecNumInfo,
    varId_q,
    viewId_q,
    retrievalMethodId_f,
    ViewId_Main_Session,
  } from './ViewIdGCVariableRelaVueShare';

  import router from '@/router';

  import ViewIdGCVariableRelaCRUDEx from '@/views/GeneCode/ViewIdGCVariableRelaCRUDEx';
  import ViewIdGCVariableRela_EditCom from '@/views/GeneCode/ViewIdGCVariableRela_Edit.vue';
  import ViewIdGCVariableRela_ListCom from '@/views/GeneCode/ViewIdGCVariableRela_List.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  export default defineComponent({
    name: 'ViewIdGCVariableRelaCRUD',
    components: {
      // 组件注册
      ViewIdGCVariableRela_EditCom,
      ViewIdGCVariableRela_ListCom,
    },

    setup() {
      ViewId_Main_Session.value = clsPrivateSessionStorage.viewId_Main;
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegionInDiv)
       **/
      async function BindDdl4QryRegionInDiv() {}

      const strTitle = ref('界面变量关系维护');

      onMounted(() => {
        BindDdl4QryRegionInDiv();
        ViewIdGCVariableRelaCRUDEx.vuebtn_Click = btn_Click;
        ViewIdGCVariableRelaCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ViewIdGCVariableRelaCRUDEx();
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
        ViewIdGCVariableRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListViewIdGCVariableRela,
        emptyRecNumInfo,
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        varId_q,
        viewId_q,
        retrievalMethodId_f,
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
        router.push({ name: 'editViewIdGCVariableRela', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ViewIdGCVariableRelaCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
