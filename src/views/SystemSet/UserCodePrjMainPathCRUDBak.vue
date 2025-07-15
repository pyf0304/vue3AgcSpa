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
              id="lblCmPrjId_q"
              name="lblCmPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCmPrjId_q"
              name="ddlCmPrjId_q"
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
              >语言
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
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsTemplate_q"
                name="chkIsTemplate_q"
                type="checkbox"
                Text="是否模板"
              /><label for="chkIsTemplate_q">是否模板</label></span
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
            id="lblUserCodePrjMainPathList"
            name="lblUserCodePrjMainPathList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户生成项目主路径列表
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
      <input id="hidSortUserCodePrjMainPathBy" type="hidden" />
    </div>
    <!--编辑层-->
    <UserCodePrjMainPath_EditCom ref="refUserCodePrjMainPath_Edit"></UserCodePrjMainPath_EditCom>
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
  import UserCodePrjMainPathCRUDEx from '@/views/SystemSet/UserCodePrjMainPathCRUDEx';
  import UserCodePrjMainPath_EditCom from '@/views/SystemSet/UserCodePrjMainPath_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refUserCodePrjMainPath_Edit,
  } from '@/views/SystemSet/UserCodePrjMainPathVueShare';
  export default defineComponent({
    name: 'UserCodePrjMainPathCRUD',
    components: {
      // 组件注册
      UserCodePrjMainPath_EditCom,
    },
    setup() {
      const strTitle = ref('用户生成项目主路径维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new UserCodePrjMainPathCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        UserCodePrjMainPathCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refUserCodePrjMainPath_Edit,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
