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
              >函数模板
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFunctionTemplateId_q"
              name="ddlFunctionTemplateId_q"
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
              >区域类型
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
          <td class="text-right">
            <label
              id="lblCodeTypeId_q"
              name="lblCodeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型
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
              id="lblFuncId4GC_q"
              name="lblFuncId4GC_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncId4GC_q"
              name="ddlFuncId4GC_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIsGeneCode_q"
              name="lblIsGeneCode_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否生成代码
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsGeneCode_q"
              name="ddlIsGeneCode_q"
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
            id="lblFunctionTemplateRelaList"
            name="lblFunctionTemplateRelaList"
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
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFunctionTemplateId_SetFldValue"
              name="ddlFunctionTemplateId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetFunctionTemplateId"
              name="btnSetFunctionTemplateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetFunctionTemplateId', '')"
              >设置函数模板Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunctionTemplateRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FunctionTemplateRela_EditCom ref="refFunctionTemplateRela_Edit"></FunctionTemplateRela_EditCom>
    <!--详细信息层-->
    <FunctionTemplateRela_DetailCom
      ref="refFunctionTemplateRela_Detail"
    ></FunctionTemplateRela_DetailCom>
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
  import FunctionTemplateRelaCRUDEx from '@/views/PrjFunction/FunctionTemplateRelaCRUDEx';

  import FunctionTemplateRela_EditCom from '@/views/PrjFunction/FunctionTemplateRela_Edit.vue';
  import FunctionTemplateRela_DetailCom from '@/views/PrjFunction/FunctionTemplateRela_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunctionTemplateRela_Detail,
    refFunctionTemplateRela_Edit,
  } from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
  export default defineComponent({
    name: 'FunctionTemplateRelaCRUD',
    components: {
      // 组件注册
      FunctionTemplateRela_EditCom,
      FunctionTemplateRela_DetailCom,
    },
    setup() {
      const strTitle = ref('函数与模板关系维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new FunctionTemplateRelaCRUDEx();
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
        FunctionTemplateRelaCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refFunctionTemplateRela_Edit,
        refFunctionTemplateRela_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
