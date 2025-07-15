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
              id="lblIdentityID_q"
              name="lblIdentityID_q"
              class="col-form-label text-right"
              style="width: 90px"
              >身份编号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdentityID_q"
              name="txtIdentityID_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdentityDesc_q"
              name="lblIdentityDesc_q"
              class="col-form-label text-right"
              style="width: 90px"
              >身份描述
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtIdentityDesc_q"
              name="txtIdentityDesc_q"
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
            id="lblQxUserIdentityList"
            name="lblQxUserIdentityList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户权限身份列表
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
        <li class="nav-item ml-3">
          <button
            id="btnDetail"
            name="btnDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Detail', '')"
            >详细</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxUserIdentityBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxUserIdentity_EditCom ref="RefQxUserIdentity_Edit"></QxUserIdentity_EditCom>
    <!--详细信息层-->
    <QxUserIdentity_DetailCom ref="RefQxUserIdentity_Detail"></QxUserIdentity_DetailCom>
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
  import QxUserIdentityCRUDEx from '@/views/UserManage_GP/QxUserIdentityCRUDEx';
  import QxUserIdentity_EditCom from '@/views/UserManage_GP/QxUserIdentity_Edit.vue';
  import QxUserIdentity_DetailCom from '@/views/UserManage_GP/QxUserIdentity_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxUserIdentity_Edit,
    refQxUserIdentity_Detail,
  } from '@/views/UserManage_GP/QxUserIdentityVueShare';
  export default defineComponent({
    name: 'QxUserIdentityCRUD',
    components: {
      // 组件注册
      QxUserIdentity_EditCom,
      QxUserIdentity_DetailCom,
    },
    setup() {
      const strTitle = ref('用户权限身份维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new QxUserIdentityCRUDEx();

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
        QxUserIdentityCRUDEx.btnClick(strCommandName, strKeyId);
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
        refQxUserIdentity_Edit,
        refQxUserIdentity_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
