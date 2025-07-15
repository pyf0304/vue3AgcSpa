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
              id="lblCmPrjId_q"
              name="lblCmPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              CM工程Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjId_q"
              name="txtCmPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCmPrjName_q"
              name="lblCmPrjName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              CM工程名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjName_q"
              name="txtCmPrjName_q"
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
            >
              使用状态
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
          <td class="text-left">
            <button
              id="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
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
            id="lblCMProjectList"
            name="lblCMProjectList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            CM项目列表
          </label>
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
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnEditAppLst"
            name="btnEditAppLst"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('EditAppLst', '')"
            >编辑应用列表</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCMProjectBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CMProject_EditCom ref="refCMProject_Edit"></CMProject_EditCom>
    <!--详细信息层-->
    <CMProject_DetailCom ref="refCMProject_Detail"></CMProject_DetailCom>
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
  import CMProjectCRUDEx from '@/views/CodeMan/CMProjectCRUDEx';
  import CMProject_EditCom from '@/views/CodeMan/CMProject_Edit.vue';
  import CMProject_DetailCom from '@/views/CodeMan/CMProject_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCMProject_Detail,
    refCMProject_Edit,
  } from '@/views/CodeMan/CMProjectVueShare';
  export default defineComponent({
    name: 'CMProjectCRUD',
    components: {
      // 组件注册
      CMProject_EditCom,
      CMProject_DetailCom,
    },
    setup() {
      const strTitle = ref('CM项目维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new CMProjectCRUDEx();

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
          case 'EditAppLst':
            break;
          default:
            break;
        }
        CMProjectCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refCMProject_Edit,
        refCMProject_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/
    },
  });
</script>
<style scoped></style>
