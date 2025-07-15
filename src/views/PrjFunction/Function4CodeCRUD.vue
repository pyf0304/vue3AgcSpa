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
        style="width: 1200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblFuncId4Code_q"
              name="lblFuncId4Code_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数Id4Code
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncId4Code_q"
              name="txtFuncId4Code_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFuncPurposeId_q"
              name="lblFuncPurposeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用途
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncPurposeId_q"
              name="ddlFuncPurposeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeId_q"
              name="lblApplicationTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用
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
          <td class="text-right">
            <label
              id="lblFuncTypeId_q"
              name="lblFuncTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncTypeId_q"
              name="ddlFuncTypeId_q"
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
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblReturnTypeID_q"
              name="lblReturnTypeID_q"
              class="col-form-label text-right"
              style="width: 90px"
              >返回类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlReturnTypeId_q"
              name="ddlReturnTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFuncName4Code_q"
              name="lblFuncName4Code_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数名4Code
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncName4Code_q"
              name="txtFuncName4Code_q"
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
            id="lblFunction4CodeList"
            name="lblFunction4CodeList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数4Code列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFuncAccessModeId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetFuncAccessModeId"
              name="btnSetFuncAccessModeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetFuncAccessModeId', '')"
              >设置函数操作模式Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunction4CodeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Function4Code_EditCom ref="refFunction4Code_Edit"></Function4Code_EditCom>
    <!--详细信息层-->
    <Function4Code_DetailCom ref="refFunction4Code_Detail"></Function4Code_DetailCom>
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
  import Function4CodeCRUDEx from '@/views/PrjFunction/Function4CodeCRUDEx';
  import Function4Code_EditCom from '@/views/PrjFunction/Function4Code_Edit.vue';
  import Function4Code_DetailCom from '@/views/PrjFunction/Function4Code_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunction4Code_Edit,
    refFunction4Code_Detail,
  } from '@/views/PrjFunction/Function4CodeVueShare';
  export default defineComponent({
    name: 'Function4CodeCRUD',
    components: {
      // 组件注册
      Function4Code_EditCom,
      Function4Code_DetailCom,
    },
    setup() {
      const strTitle = ref('函数4Code维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new Function4CodeCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
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
        Function4CodeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refFunction4Code_Edit,
        refFunction4Code_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {},
  });
</script>
<style scoped></style>
