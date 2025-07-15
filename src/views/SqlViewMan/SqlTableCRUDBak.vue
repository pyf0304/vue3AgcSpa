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
              id="lblSqlTableId_q"
              name="lblSqlTableId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >Sql视图Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSqlTableId_q"
              name="txtSqlTableId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTableName_q"
              name="lblTableName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTableName_q"
              name="txtTableName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblxtype_q"
              name="lblxtype_q"
              class="col-form-label text-right"
              style="width: 90px"
              >xtype
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtxtype_q"
              name="txtxtype_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblcrDate_q"
              name="lblcrDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >crDate
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtcrDate_q"
              name="txtcrDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblUpdUserId_q"
              name="lblUpdUserId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >修改用户Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdUserId_q"
              name="txtUpdUserId_q"
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
            id="lblSqlTableList"
            name="lblSqlTableList"
            class="col-form-label text-info"
            style="width: 250px"
            >Sql表列表
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
      <input id="hidSortViewRegionRelaBy" type="hidden" />
    </div>
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
  import SqlTableCRUDEx from '@/views/SqlViewMan/SqlTableCRUDEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/SqlViewMan/SqlTableVueShare';
  export default defineComponent({
    name: 'SqlTableCRUD',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('Sql表维护');
      //   const Ref = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SqlTableCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          default:
            break;
        }
        SqlTableCRUDEx.btn_Click(strCommandName, strKeyId);
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
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
  });
</script>
<style scoped></style>
