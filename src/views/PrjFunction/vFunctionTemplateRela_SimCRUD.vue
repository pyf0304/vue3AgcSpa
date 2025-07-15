<template>
  <div id="divLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblFunctionTemplateId_q"
              name="lblFunctionTemplateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数模板Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFunctionTemplateId_q"
              name="txtFunctionTemplateId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFuncId4GC_q"
              name="lblFuncId4GC_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncId4GC_q"
              name="txtFuncId4GC_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCodeTypeId_q"
              name="lblCodeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTypeId_q"
              name="ddlCodeTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblRegionTypeId_q"
              name="lblRegionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId_q"
              name="ddlRegionTypeId_q"
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
            id="lblvFunctionTemplateRela_SimList"
            name="lblvFunctionTemplateRela_SimList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数与模板关系列表
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
      </ul>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import vFunctionTemplateRela_SimCRUDEx from '@/views/PrjFunction/vFunctionTemplateRela_SimCRUDEx';

  export default defineComponent({
    name: 'VFunctionTemplateRelaSimCRUD',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('v函数模板关系_Sim维护');

      function btnClick(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          default:
            break;
        }
        vFunctionTemplateRela_SimCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
