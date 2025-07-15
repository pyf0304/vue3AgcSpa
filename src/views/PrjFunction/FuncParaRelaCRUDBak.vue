<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
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
            <label id="lblFuncParaId4Code_q" class="col-form-label text-right" style="width: 90px"
              >函数参数Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncParaId4Code_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label id="lblPrjId_q" class="col-form-label text-right" style="width: 90px"
              >工程ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label id="lblFuncId4Code_q" class="col-form-label text-right" style="width: 90px"
              >函数Id4Code
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncId4Code_q"
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
          <label id="lblFuncParaRelaList" class="col-form-label text-info" style="width: 250px"
            >FuncParaRela列表
          </label>
          <p>Received Parameter: {{ funcId4Code }}</p>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select id="ddlFuncParaId" class="form-control form-control-sm" style="width: 120px">
            </select>
            <button
              id="btnCreate"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Create4FuncId', '')"
              >添加</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewPara"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewPara', '')"
            >添加新参数</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
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
      <input id="hidSortvFuncParaRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FuncParaRela_EditCom ref="refFuncParaRela_Edit"></FuncParaRela_EditCom>
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
  import { useRoute } from 'vue-router';
  import FuncParaRelaCRUDEx from '@/views/PrjFunction/FuncParaRelaCRUDEx';
  import FuncParaRela_EditCom from '@/views/PrjFunction/FuncParaRela_Edit.vue';
  import FuncPara4Code_EditCom from '@/views/PrjFunction/FuncPara4Code_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFuncParaRela_Edit,
  } from '@/views/PrjFunction/FuncParaRelaVueShare';
  import { refFuncPara4Code_Edit } from '@/views/PrjFunction/FuncPara4CodeVueShare';
  export default defineComponent({
    name: 'FuncParaRelaCRUD',
    components: {
      // 组件注册
      FuncParaRela_EditCom,
      FuncPara4Code_EditCom,
    },
    setup() {
      const strTitle = ref('FuncParaRela维护');
      const funcId4Code = ref('');

      const refDivDataLst = ref();
      onMounted(() => {
        const queryFuncId4Code = useRoute().query.funcId4Code;

        if (
          queryFuncId4Code != null &&
          queryFuncId4Code !== undefined &&
          queryFuncId4Code !== 'null'
        ) {
          funcId4Code.value = queryFuncId4Code.toString();
        }
        FuncParaRelaCRUDEx.funcId4Code = funcId4Code.value;
        const objPage = new FuncParaRelaCRUDEx();

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
          case 'AddNewPara':
            // FuncParaRelaCRUDEx.EditParaRef = refFuncPara4Code_Edit.value;

            break;
          case 'Create4FuncId':
            break;
          default:
            break;
        }
        FuncParaRelaCRUDEx.btn_Click(strCommandName, strKeyId);
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
        funcId4Code,
        refFuncParaRela_Edit,
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
