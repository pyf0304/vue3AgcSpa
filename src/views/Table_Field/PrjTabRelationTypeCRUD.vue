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
              id="lblPrjTabRelaTypeId_q"
              name="lblPrjTabRelaTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表关系类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjTabRelaTypeId_q"
              name="txtPrjTabRelaTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTabRelationTypeName_q"
              name="lblTabRelationTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表关系类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabRelationTypeName_q"
              name="txtTabRelationTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPrjTabRelationTypeList"
            name="lblPrjTabRelationTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程表关系类型列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('CreateWithMaxId', '')"
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
      <input id="hidSortPrjTabRelationTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjTabRelationType_EditCom ref="refPrjTabRelationType_Edit"></PrjTabRelationType_EditCom>
    <!--详细信息层-->
    <PrjTabRelationType_DetailCom ref="refPrjTabRelationType_Detail"></PrjTabRelationType_DetailCom>
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
  import PrjTabRelationTypeCRUDEx from '@/views/Table_Field/PrjTabRelationTypeCRUDEx';
  import PrjTabRelationType_EditCom from '@/views/Table_Field/PrjTabRelationType_Edit.vue';
  import PrjTabRelationType_DetailCom from '@/views/Table_Field/PrjTabRelationType_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTabRelationType_Edit,
    refPrjTabRelationType_Detail,
  } from '@/views/Table_Field/PrjTabRelationTypeVueShare';
  export default defineComponent({
    name: 'PrjTabRelationTypeCRUD',
    components: {
      // 组件注册
      PrjTabRelationType_EditCom,
      PrjTabRelationType_DetailCom,
    },
    setup() {
      const strTitle = ref('工程表关系类型维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new PrjTabRelationTypeCRUDEx();

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
        PrjTabRelationTypeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refPrjTabRelationType_Edit,
        refPrjTabRelationType_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
