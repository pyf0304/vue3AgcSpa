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
              id="lblFldId_q"
              name="lblFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldId_q"
              name="txtFldId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFldId_q"
              name="lblFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段名
            </label>
          </td>
          <td class="text-left">
            <input id="txtFldName_q" class="form-control form-control-sm" style="width: 120px" />
          </td>
          <td class="text-right">
            <label
              id="lblCodeTabId_q"
              name="lblCodeTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >代码表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTabId_q"
              name="ddlCodeTabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
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
            id="lblFieldTab4CodeConvList"
            name="lblFieldTab4CodeConvList"
            class="col-form-label text-info"
            style="width: 250px"
            >字段4代码转换列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFieldTab4CodeConvBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FieldTab4CodeConv_EditCom ref="refFieldTab4CodeConv_Edit"></FieldTab4CodeConv_EditCom>
    <!--详细信息层-->
    <FieldTab4CodeConv_DetailCom ref="refFieldTab4CodeConv_Detail"></FieldTab4CodeConv_DetailCom>
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
  import FieldTab4CodeConvCRUDEx from '@/views/Table_Field/FieldTab4CodeConvCRUDEx';
  import FieldTab4CodeConv_EditCom from '@/views/Table_Field/FieldTab4CodeConv_Edit.vue';
  import FieldTab4CodeConv_DetailCom from '@/views/Table_Field/FieldTab4CodeConv_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFieldTab4CodeConv_Edit,
    refFieldTab4CodeConv_Detail,
  } from '@/views/Table_Field/FieldTab4CodeConvVueShare';
  export default defineComponent({
    name: 'FieldTab4CodeConvCRUD',
    components: {
      // 组件注册
      FieldTab4CodeConv_EditCom,
      FieldTab4CodeConv_DetailCom,
    },
    setup() {
      const strTitle = ref('字段4代码转换维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new FieldTab4CodeConvCRUDEx();

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
        FieldTab4CodeConvCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refFieldTab4CodeConv_Edit,
        refFieldTab4CodeConv_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
