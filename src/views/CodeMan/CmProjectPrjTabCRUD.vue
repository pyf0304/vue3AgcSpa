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
              id="lblCmPrjId_q"
              name="lblCmPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCmPrjId_q"
              name="ddlCmPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表
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
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCMProjectPrjTabList"
            name="lblCMProjectPrjTabList"
            class="col-form-label text-info"
            style="width: 250px"
            >CM项目工程表关系列表
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
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCMProjectPrjTabBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CmProjectPrjTab_EditCom ref="refCmProjectPrjTab_Edit"></CmProjectPrjTab_EditCom>
    <!--详细信息层-->
    <CmProjectPrjTab_DetailCom ref="refCmProjectPrjTab_Detail"></CmProjectPrjTab_DetailCom>
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
  import CmProjectPrjTabCRUDEx from '@/views/CodeMan/CmProjectPrjTabCRUDEx';
  import CmProjectPrjTab_EditCom from '@/views/CodeMan/CmProjectPrjTab_Edit.vue';
  import CmProjectPrjTab_DetailCom from '@/views/CodeMan/CmProjectPrjTab_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCmProjectPrjTab_Edit,
    refCmProjectPrjTab_Detail,
  } from '@/views/CodeMan/CmProjectPrjTabVueShare';
  export default defineComponent({
    name: 'CmProjectPrjTabCRUD',
    components: {
      // 组件注册
      CmProjectPrjTab_EditCom,
      CmProjectPrjTab_DetailCom,
    },
    setup() {
      const strTitle = ref('CM项目工程表关系维护');

      const refDivDataLst = ref();

      onMounted(() => {
        const objPage = new CmProjectPrjTabCRUDEx();
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
        CmProjectPrjTabCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refCmProjectPrjTab_Edit,
        refCmProjectPrjTab_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
