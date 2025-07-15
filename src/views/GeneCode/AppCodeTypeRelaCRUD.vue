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
              id="lblCodeTypeId_q"
              name="lblCodeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTypeId_q"
              name="ddlCodeTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblTabMainTypeId_q"
              name="lblTabMainTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表主类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabMainTypeId_q"
              name="ddlTabMainTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsVisible_q"
                name="chkIsVisible_q"
                type="checkbox"
                Text="是否显示"
              /><label for="chkIsVisible_q">是否显示</label></span
            >
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsInGroupGeneCode_q"
                name="chkIsInGroupGeneCode_q"
                type="checkbox"
                Text="是否参与组生成代码"
              /><label for="chkIsInGroupGeneCode_q">是否参与组生成代码</label></span
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
            id="lblAppCodeTypeRelaList"
            name="lblAppCodeTypeRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >应用程序代码类型关系列表
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
      <input id="hidSortAppCodeTypeRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <AppCodeTypeRela_EditCom ref="refAppCodeTypeRela_Edit"></AppCodeTypeRela_EditCom>
    <!--详细信息层-->
    <AppCodeTypeRela_DetailCom ref="refAppCodeTypeRela_Detail"></AppCodeTypeRela_DetailCom>
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
  import AppCodeTypeRelaCRUDEx from '@/views/GeneCode/AppCodeTypeRelaCRUDEx';
  import AppCodeTypeRela_EditCom from '@/views/GeneCode/AppCodeTypeRela_Edit.vue';
  import AppCodeTypeRela_DetailCom from '@/views/GeneCode/AppCodeTypeRela_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refAppCodeTypeRela_Detail,
    refAppCodeTypeRela_Edit,
  } from '@/views/GeneCode/AppCodeTypeRelaVueShare';
  export default defineComponent({
    name: 'AppCodeTypeRelaCRUD',
    components: {
      // 组件注册
      AppCodeTypeRela_EditCom,
      AppCodeTypeRela_DetailCom,
    },
    setup() {
      const strTitle = ref('应用程序代码类型关系维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new AppCodeTypeRelaCRUDEx();

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
        AppCodeTypeRelaCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refAppCodeTypeRela_Edit,
        refAppCodeTypeRela_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {},
  });
</script>
<style scoped></style>
