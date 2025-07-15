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
              id="lblPrjRelationId_q"
              name="lblPrjRelationId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关系Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjRelationId_q"
              name="txtPrjRelationId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRelationName_q"
              name="lblRelationName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关系名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRelationName_q"
              name="txtRelationName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId_q"
              name="ddlTabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblPrjTabRelaTypeId_q"
              name="lblPrjTabRelaTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表关系类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjTabRelaTypeId_q"
              name="ddlPrjTabRelaTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblRelationTabId_q"
              name="lblRelationTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >相关表Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRelationTabId_q"
              name="ddlRelationTabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPrjTabRelationList"
            name="lblPrjTabRelationList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程表关系列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Query', '')"
            >查询</button
          >
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
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btnClick('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Clone', '')"
            >复制</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjTabRelationBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjTabRelation_EditCom ref="refPrjTabRelation_Edit"></PrjTabRelation_EditCom>
    <!--详细信息层-->
    <PrjTabRelation_DetailCom ref="refPrjTabRelation_Detail"></PrjTabRelation_DetailCom>
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
  import PrjTabRelationCRUDEx from '@/views/Table_Field/PrjTabRelationCRUDEx';
  import PrjTabRelation_EditCom from '@/views/Table_Field/PrjTabRelation_Edit.vue';
  import PrjTabRelation_DetailCom from '@/views/Table_Field/PrjTabRelation_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTabRelation_Detail,
    refPrjTabRelation_Edit,
  } from '@/views/Table_Field/PrjTabRelationVueShare';
  export default defineComponent({
    name: 'PrjTabRelationCRUD',
    components: {
      // 组件注册
      PrjTabRelation_EditCom,
      PrjTabRelation_DetailCom,
    },
    setup() {
      const strTitle = ref('工程表关系维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new PrjTabRelationCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        PrjTabRelationCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refPrjTabRelation_Edit,
        refPrjTabRelation_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
