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
              id="lblPrjId_q"
              name="lblPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjId_q"
              name="txtPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPrjName_q"
              name="lblPrjName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjName_q"
              name="txtPrjName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUseStateId_q"
              name="lblUseStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >使用状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUseStateId_q"
              name="ddlUseStateId_q"
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
            id="lblProjectsList"
            name="lblProjectsList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortProjectsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Projects_EditCom ref="refProjects_Edit"></Projects_EditCom>
    <!--详细信息层-->
    <Projects_DetailCom ref="refProjects_Detail"></Projects_DetailCom>
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
  import ProjectsCRUDEx from '@/views/PrjManage/ProjectsCRUDEx';

  import Projects_EditCom from '@/views/PrjManage/Projects_Edit.vue';
  import Projects_DetailCom from '@/views/PrjManage/Projects_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refProjects_Edit,
    refProjects_Detail,
  } from '@/views/PrjManage/ProjectsVueShare';
  export default defineComponent({
    name: 'ProjectsCRUD',
    components: {
      // 组件注册
      Projects_EditCom,
      Projects_DetailCom,
    },
    setup() {
      const strTitle = ref('工程维护');

      onMounted(() => {
        ProjectsCRUDEx.vuebtn_Click = btn_Click;
        ProjectsCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ProjectsCRUDEx();

        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
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
        ProjectsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refProjects_Edit,
        refProjects_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
