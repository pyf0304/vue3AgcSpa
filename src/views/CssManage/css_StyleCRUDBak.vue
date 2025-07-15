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
              id="lblStyleId_q"
              name="lblStyleId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              样式ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStyleId_q"
              name="txtStyleId_q"
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
              控件
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
              id="lblStyleName_q"
              name="lblStyleName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              样式名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStyleName_q"
              name="txtStyleName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
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
            id="lblcss_StyleList"
            name="lblcss_StyleList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            css_Style列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcss_StyleBy" type="hidden" />
    </div>
    <!--编辑层-->
    <css_Style_EditCom ref="refcss_Style_Edit"></css_Style_EditCom>
    <!--详细信息层-->
    <css_Style_DetailCom ref="refcss_Style_Detail"></css_Style_DetailCom>
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
  import css_StyleCRUDEx from '@/views/CssManage/css_StyleCRUDEx';
  import css_Style_EditCom from '@/views/CssManage/css_Style_Edit.vue';
  import css_Style_DetailCom from '@/views/CssManage/css_Style_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcss_Style_Edit,
    refcss_Style_Detail,
  } from '@/views/CssManage/css_StyleVueShare';
  export default defineComponent({
    name: 'CssStyleCRUD',
    components: {
      // 组件注册
      css_Style_EditCom,
      css_Style_DetailCom,
    },
    setup() {
      const strTitle = ref('css_Style维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new css_StyleCRUDEx();
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
        css_StyleCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refcss_Style_Edit,
        refcss_Style_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {},
  });
</script>
<style scoped></style>
