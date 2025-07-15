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
              id="lblApplicationTypeName_q"
              name="lblApplicationTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeName_q"
              name="txtApplicationTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeSimName_q"
              name="lblApplicationTypeSimName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型简称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeSimName_q"
              name="txtApplicationTypeSimName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeENName_q"
              name="lblApplicationTypeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeENName_q"
              name="txtApplicationTypeENName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId_q"
              name="lblProgLangTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型
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
            id="lblApplicationTypeList"
            name="lblApplicationTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >应用程序类型列表
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
      <input id="hidSortApplicationTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ApplicationType_EditCom ref="refApplicationType_Edit"></ApplicationType_EditCom>
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
  import ApplicationTypeCRUDEx from '@/views/GeneCode/ApplicationTypeCRUDEx';
  import ApplicationType_EditCom from '@/views/GeneCode/ApplicationType_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refApplicationType_Edit,
  } from '@/views/GeneCode/ApplicationTypeVueShare';
  export default defineComponent({
    name: 'ApplicationTypeCRUD',
    components: {
      // 组件注册
      ApplicationType_EditCom,
    },
    setup() {
      const strTitle = ref('应用程序类型维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ApplicationTypeCRUDEx();
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
        ApplicationTypeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refApplicationType_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {},
  });
</script>
<style scoped></style>
