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
              id="lblCodeTypeId_q"
              name="lblCodeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              代码类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodeTypeId_q"
              name="txtCodeTypeId_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCodeTypeName_q"
              name="lblCodeTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              代码类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodeTypeName_q"
              name="txtCodeTypeName_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCodeTypeENName_q"
              name="lblCodeTypeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              类型英文
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodeTypeENName_q"
              name="txtCodeTypeENName_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFrontOrBack_q"
              name="lblFrontOrBack_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              前台Or后台
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFrontOrBack_q"
              name="txtFrontOrBack_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblGroupName_q"
              name="lblGroupName_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              组名
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlGroupName_q"
              name="ddlGroupName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId_q"
              name="lblProgLangTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              编程语言
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlProgLangTypeId_q"
              name="ddlProgLangTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblRegionTypeId_q"
              name="lblRegionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              区域类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId_q"
              name="ddlRegionTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblSqlDsTypeId_q"
              name="lblSqlDsTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              数据源类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSqlDsTypeId_q"
              name="ddlSqlDsTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblDependsOn_q"
              name="lblDependsOn_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              依赖于
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDependsOn_q"
              name="ddlDependsOn_q"
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
            >
              在用?
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
          <td class="text-left">
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
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
            id="lblCodeTypeList"
            name="lblCodeTypeList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            代码类型列表
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
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlGroupName_SetFldValue"
              name="ddlGroupName_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetGroupName"
              name="btnSetGroupName"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetGroupName', '')"
              >设置组名</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlInUse_SetFldValue"
              name="ddlInUse_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
              >设置在用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlSqlDsTypeId_SetFldValue"
              name="ddlSqlDsTypeId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetSqlDsTypeId"
              name="btnSetSqlDsTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetSqlDsTypeId', '')"
              >设置数据类型</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCodeTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CodeType_EditCom ref="refCodeType_Edit"></CodeType_EditCom>
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
  import CodeTypeCRUDEx from '@/views/GeneCode/CodeTypeCRUDEx';
  import CodeType_EditCom from '@/views/GeneCode/CodeType_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCodeType_Edit,
  } from '@/views/GeneCode/CodeTypeVueShare';
  export default defineComponent({
    name: 'CodeTypeCRUD',
    components: {
      // 组件注册
      CodeType_EditCom,
    },
    setup() {
      const strTitle = ref('代码类型维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new CodeTypeCRUDEx();
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
        CodeTypeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refCodeType_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {},
  });
</script>
<style scoped></style>
