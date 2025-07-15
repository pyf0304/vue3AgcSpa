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
              id="lblUserStateId_q"
              name="lblUserStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用户状态Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserStateId_q"
              name="txtUserStateId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUserStateName_q"
              name="lblUserStateName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用户状态名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserStateName_q"
              name="txtUserStateName_q"
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
            id="lblQxUserStateList"
            name="lblQxUserStateList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户状态列表
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
      <input id="hidSortQxUserStateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxUserStateEditCom ref="RefQxUserState_Edit"></QxUserStateEditCom>
    <!--详细信息层-->
    <QxUserState_DetailCom ref="RefQxUserState_Detail"></QxUserState_DetailCom>
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
  import QxUserStateCRUDEx from '@/views/UserManage_GP/QxUserStateCRUDEx';

  import QxUserStateEditCom from '@/views/UserManage_GP/QxUserStateEdit.vue';
  import QxUserState_DetailCom from '@/views/UserManage_GP/QxUserState_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxUserState_Edit,
    refQxUserState_Detail,
  } from '@/views/UserManage_GP/QxUserStateVueShare';
  export default defineComponent({
    name: 'QxUserStateCRUD',
    components: {
      // 组件注册
      QxUserStateEditCom,
      QxUserState_DetailCom,
    },
    setup() {
      const strTitle = ref('用户状态维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new QxUserStateCRUDEx();
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
        QxUserStateCRUDEx.btnClick(strCommandName, strKeyId);
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
        refQxUserState_Edit,
        refQxUserState_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
