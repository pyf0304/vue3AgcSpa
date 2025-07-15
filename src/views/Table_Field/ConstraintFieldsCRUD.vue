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
              id="lblPrjConstraintId_q"
              name="lblPrjConstraintId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >约束表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjConstraintId_q"
              name="ddlPrjConstraintId_q"
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
              >表ID
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
          <td class="text-right">
            <label
              id="lblFldId_q"
              name="lblFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId_q"
              name="ddlFldId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否在用
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbInUse_q"
              name="ddlbInUse_q"
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
            id="lblConstraintFieldsList"
            name="lblConstraintFieldsList"
            class="col-form-label text-info"
            style="width: 250px"
            >约束字段列表
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
            id="btnSetInUse"
            name="btnSetInUse"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetInUse', '')"
            >设置是否在用</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortConstraintFieldsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ConstraintFields_EditCom ref="refConstraintFields_Edit"></ConstraintFields_EditCom>
    <!--详细信息层-->
    <ConstraintFields_DetailCom ref="refConstraintFields_Detail"></ConstraintFields_DetailCom>
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
  import ConstraintFieldsCRUDEx from '@/views/Table_Field/ConstraintFieldsCRUDEx';

  import ConstraintFields_EditCom from '@/views/Table_Field/ConstraintFields_Edit.vue';
  import ConstraintFields_DetailCom from '@/views/Table_Field/ConstraintFields_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refConstraintFields_Edit,
  } from '@/views/Table_Field/ConstraintFieldsVueShare';
  export default defineComponent({
    name: 'ConstraintFieldsCRUD',
    components: {
      // 组件注册
      ConstraintFields_EditCom,
      ConstraintFields_DetailCom,
    },
    setup() {
      const strTitle = ref('约束字段维护');

      const refConstraintFields_Detail = ref();

      onMounted(() => {
        ConstraintFieldsCRUDEx.vuebtn_Click = btn_Click;
        ConstraintFieldsCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ConstraintFieldsCRUDEx();

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
        ConstraintFieldsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refConstraintFields_Edit,
        refConstraintFields_Detail,
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
