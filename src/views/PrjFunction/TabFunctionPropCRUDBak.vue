<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 1000px"
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
              style="width: 200px"
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
              style="width: 200px"
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
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblMethodModifierId_q"
              name="lblMethodModifierId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数修饰语
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMethodModifierId_q"
              name="ddlMethodModifierId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblProgLangTypeId_q"
              name="lblProgLangTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlProgLangTypeId_q"
              name="ddlProgLangTypeId_q"
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
            id="lblTabFunctionPropList"
            name="lblTabFunctionPropList"
            class="col-form-label text-info"
            style="width: 250px"
            >表函数属性列表
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
              id="ddlMethodModifierId_SetFldValue"
              name="ddlMethodModifierId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetMethodModifierId"
              name="btnSetMethodModifierId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetMethodModifierId', '')"
              >设置函数修饰语</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortTabFunctionPropBy" type="hidden" />
    </div>
    <!--编辑层-->
    <TabFunctionProp_EditCom ref="refTabFunctionProp_Edit"></TabFunctionProp_EditCom>
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
  import TabFunctionPropCRUDEx from '@/views/PrjFunction/TabFunctionPropCRUDEx';
  import TabFunctionProp_EditCom from '@/views/PrjFunction/TabFunctionProp_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refTabFunctionProp_Edit,
  } from '@/views/PrjFunction/TabFunctionPropVueShare';
  export default defineComponent({
    name: 'TabFunctionPropCRUD',
    components: {
      // 组件注册
      TabFunctionProp_EditCom,
    },
    setup() {
      const strTitle = ref('表函数属性维护');

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
        TabFunctionPropCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refTabFunctionProp_Edit,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
