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
              id="lblParaName_q"
              name="lblParaName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >参数名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParaName_q"
              name="txtParaName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataTypeId_q"
              name="lblDataTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataTypeId_q"
              name="ddlDataTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFuncPurposeId_q"
              name="lblFuncPurposeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >函数用途Id
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
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFuncPara4CodeList"
            name="lblFuncPara4CodeList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数参数4Code列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFuncPara4CodeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FuncPara4Code_EditCom ref="refFuncPara4Code_Edit"></FuncPara4Code_EditCom>
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
  import FuncPara4CodeCRUDEx from '@/views/PrjFunction/FuncPara4CodeCRUDEx';
  import FuncPara4Code_EditCom from '@/views/PrjFunction/FuncPara4Code_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFuncPara4Code_Edit,
  } from '@/views/PrjFunction/FuncPara4CodeVueShare';
  export default defineComponent({
    name: 'FuncPara4CodeCRUD',
    components: {
      // 组件注册
      FuncPara4Code_EditCom,
    },
    setup() {
      const strTitle = ref('函数参数4Code维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new FuncPara4CodeCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
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
        FuncPara4CodeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refFuncPara4Code_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
  });
</script>
<style scoped></style>
