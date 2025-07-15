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
        style="width: 1100px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblCtlTypeId_q"
              name="lblCtlTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeId_q"
              name="txtCtlTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCtlTypeName_q"
              name="lblCtlTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeName_q"
              name="txtCtlTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCtlTypeENName_q"
              name="lblCtlTypeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlTypeENName_q"
              name="txtCtlTypeENName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCtlCnName_q"
              name="lblCtlCnName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >中文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCtlCnName_q"
              name="txtCtlCnName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
              >在用?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInUse_q"
              name="ddlInUse_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIsVisible_q"
              name="lblIsVisible_q"
              class="col-form-label text-right"
              style="width: 90px"
              >可见?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbIsVisible_q"
              name="ddlbIsVisible_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
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
            id="lblCtlTypeList"
            name="lblCtlTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >控件类型缩写列表
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
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
              >在用</button
            >
            <button
              id="btnSetNotInUse"
              name="btnSetNotInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
              >不用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <span class="form-control form-control-sm" style="width: 100px">
              <input
                id="chkIsVisible_SetFldValue_SetFldValue"
                name="chkIsVisible_SetFldValue_SetFldValue"
                type="checkbox"
                Text="是否显示"
              /><label for="chkIsVisible_SetFldValue_SetFldValue">是否显示</label></span
            >
            <button
              id="btnSetIsVisible"
              name="btnSetIsVisible"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetIsVisible', '')"
              >设置是否显示</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCtlTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CtlType_EditCom ref="refCtlType_Edit"></CtlType_EditCom>
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
  import CtlTypeCRUDEx from '@/views/PrjInterface/CtlTypeCRUDEx';
  import CtlType_EditCom from '@/views/PrjInterface/CtlType_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCtlType_Edit,
  } from '@/views/PrjInterface/CtlTypeVueShare';
  export default defineComponent({
    name: 'CtlTypeCRUD',
    components: {
      // 组件注册
      CtlType_EditCom,
    },
    setup() {
      const strTitle = ref('控件类型缩写维护');

      const refDivDataLst = ref();

      onMounted(() => {
        const objPage = new CtlTypeCRUDEx();

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
        CtlTypeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refCtlType_Edit,
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
