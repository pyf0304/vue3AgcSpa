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
              id="lblFuncModuleName_q"
              name="lblFuncModuleName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              模块名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncModuleName_q"
              name="txtFuncModuleName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFuncModuleEnName_q"
              name="lblFuncModuleEnName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              模块英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncModuleEnName_q"
              name="txtFuncModuleEnName_q"
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
          <td class="nav-item ml-3">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="nav-item ml-3">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
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
            id="lblFuncModule_AgcList"
            name="lblFuncModule_AgcList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            模块列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlUseStateId_SetFldValue"
              name="ddlUseStateId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
            <button
              id="btnSetUseStateId"
              name="btnSetUseStateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetUseStateId', '')"
              >设置使用状态</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('ReOrder', '')"
              >重序</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFuncModule_AgcBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FuncModule_Agc_EditCom ref="refFuncModule_Agc_Edit"></FuncModule_Agc_EditCom>
    <!--详细信息层-->
    <FuncModule_Agc_DetailCom ref="refFuncModule_Agc_Detail"></FuncModule_Agc_DetailCom>
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
  import FuncModule_AgcCRUDEx from '@/views/PrjManage/FuncModule_AgcCRUDEx';
  import FuncModule_Agc_EditCom from '@/views/PrjManage/FuncModule_Agc_Edit.vue';
  import FuncModule_Agc_DetailCom from '@/views/PrjManage/FuncModule_Agc_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFuncModule_Agc_Edit,
    refFuncModule_Agc_Detail,
  } from '@/views/PrjManage/FuncModule_AgcVueShare';
  export default defineComponent({
    name: 'FuncModuleAgcCRUD',
    components: {
      // 组件注册
      FuncModule_Agc_EditCom,
      FuncModule_Agc_DetailCom,
    },
    setup() {
      const strTitle = ref('模块维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new FuncModule_AgcCRUDEx();

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
        FuncModule_AgcCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refFuncModule_Agc_Edit,
        refFuncModule_Agc_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
