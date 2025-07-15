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
              id="lblFldDispUnitStyleId_q"
              name="lblFldDispUnitStyleId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              单元样式Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleId_q"
              name="txtFldDispUnitStyleId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>

          <td class="text-right">
            <label
              id="lblFldDispUnitStyleName_q"
              name="lblFldDispUnitStyleName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              单元样式名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleName_q"
              name="txtFldDispUnitStyleName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblControlId_q"
              name="lblControlId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              控件类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCtlTypeId_q"
              name="ddlCtlTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblStyleIdContent_q"
              name="lblStyleIdContent_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              内容样式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlStyleIdContent_q"
              name="ddlStyleIdContent_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>

          <td class="text-right">
            <label
              id="lblStyleIdTitle_q"
              name="lblStyleIdTitle_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              标题样式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlStyleIdTitle_q"
              name="ddlStyleIdTitle_q"
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
            id="lblcss_FldDispUnitStyleList"
            name="lblcss_FldDispUnitStyleList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            字段显示单元样式列表
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
              id="ddlCtlTypeId_OrderNum"
              name="ddlCtlTypeId_OrderNum"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
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
      <input id="hidSortcss_FldDispUnitStyleBy" type="hidden" />
    </div>
    <!--编辑层-->
    <css_FldDispUnitStyle_EditCom ref="refcss_FldDispUnitStyle_Edit"></css_FldDispUnitStyle_EditCom>
    <!--详细信息层-->
    <css_FldDispUnitStyle_DetailCom
      ref="refcss_FldDispUnitStyle_Detail"
    ></css_FldDispUnitStyle_DetailCom>
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
  import css_FldDispUnitStyleCRUDEx from '@/views/CssManage/css_FldDispUnitStyleCRUDEx';
  import css_FldDispUnitStyle_EditCom from '@/views/CssManage/css_FldDispUnitStyle_Edit.vue';
  import css_FldDispUnitStyle_DetailCom from '@/views/CssManage/css_FldDispUnitStyle_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcss_FldDispUnitStyle_Detail,
    refcss_FldDispUnitStyle_Edit,
  } from '@/views/CssManage/css_FldDispUnitStyleVueShare';
  export default defineComponent({
    name: 'CssFldDispUnitStyleCRUD',
    components: {
      // 组件注册
      css_FldDispUnitStyle_EditCom,
      css_FldDispUnitStyle_DetailCom,
    },
    setup() {
      const strTitle = ref('字段显示单元样式维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new css_FldDispUnitStyleCRUDEx();
        objPage.PageLoad();
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
        css_FldDispUnitStyleCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refcss_FldDispUnitStyle_Edit,
        refcss_FldDispUnitStyle_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
