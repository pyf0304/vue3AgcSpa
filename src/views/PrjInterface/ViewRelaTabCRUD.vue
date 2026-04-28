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
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-left" style="width: 360px">
            <select
              id="ddlRelaTabFilter"
              v-model="selectedRelaTabId"
              name="ddlRelaTabFilter"
              class="form-control form-control-sm"
              @change="btnClick('Query', '')"
            >
              <option
                v-for="objOpt in relaTabFilterOptions"
                :key="objOpt.value"
                :value="objOpt.value"
              >
                {{ objOpt.label }}
              </option>
            </select>
            <div
              v-if="relaTabFilterOptions.length <= 1"
              class="text-warning"
              style="font-size: 12px; margin-top: 4px"
            >
              当前界面暂无相关表记录
            </div>
          </td>
          <td class="text-left" style="width: 280px">
            <select
              id="ddlViewTabTypeFilter"
              v-model="selectedViewTabTypeId"
              name="ddlViewTabTypeFilter"
              class="form-control form-control-sm"
              @change="btnClick('Query', '')"
            >
              <option
                v-for="objOpt in viewTabTypeFilterOptions"
                :key="objOpt.value"
                :value="objOpt.value"
              >
                {{ objOpt.label }}
              </option>
            </select>
          </td>
          <td class="text-left" style="width: 260px">
            <select
              id="ddlRegionTypeFilter"
              v-model="selectedRegionTypeId"
              name="ddlRegionTypeFilter"
              class="form-control form-control-sm"
              @change="btnClick('Query', '')"
            >
              <option
                v-for="objOpt in regionTypeFilterOptions"
                :key="objOpt.value"
                :value="objOpt.value"
              >
                {{ objOpt.label }}
              </option>
            </select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnClick('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnClick('ExportExcel', '')"
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
            id="lblViewRelaTabList"
            name="lblViewRelaTabList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面相关表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnImportRelaTab"
            name="btnImportRelaTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('ImportRelaTab', '')"
            >导入相关表</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnPreviewImportRelaTab"
            name="btnPreviewImportRelaTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('PreviewImportRelaTab', '')"
            >预览待导入</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewRelaTabBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewRelaTab_EditCom ref="refViewRelaTab_Edit"></ViewRelaTab_EditCom>
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
  import ViewRelaTabCRUDEx from '@/views/PrjInterface/ViewRelaTabCRUDEx';

  import ViewRelaTab_EditCom from '@/views/PrjInterface/ViewRelaTab_Edit.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewRelaTab_Edit,
  } from '@/views/PrjInterface/ViewRelaTabVueShare';
  import {
    selectedRelaTabId,
    relaTabFilterOptions,
    selectedViewTabTypeId,
    viewTabTypeFilterOptions,
    selectedRegionTypeId,
    regionTypeFilterOptions,
  } from '@/views/PrjInterface/ViewRelaTabVueShareEx';
  export default defineComponent({
    name: 'ViewRelaTabCRUD',
    components: {
      // 组件注册
      ViewRelaTab_EditCom,
    },
    setup() {
      const strTitle = ref('界面相关表维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewRelaTabCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        ViewRelaTabCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refViewRelaTab_Edit,
        selectedRelaTabId,
        relaTabFilterOptions,
        selectedViewTabTypeId,
        viewTabTypeFilterOptions,
        selectedRegionTypeId,
        regionTypeFilterOptions,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
