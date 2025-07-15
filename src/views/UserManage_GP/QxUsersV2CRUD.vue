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
              id="lblname_q"
              name="lblname_q"
              class="col-form-label text-right"
              style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtname_q"
              v-model="name_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUserName_q"
              name="lblUserName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用户名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserName_q"
              v-model="userName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblnickName_q"
              name="lblnickName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >呢称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtnickName_q"
              v-model="nickName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEmail_q"
              name="lblEmail_q"
              class="col-form-label text-right"
              style="width: 90px"
              >邮箱
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEmail_q"
              v-model="email_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblphone_q"
              name="lblphone_q"
              class="col-form-label text-right"
              style="width: 90px"
              >电话号码
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtphone_q"
              v-model="phone_q"
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
            id="lblQxUsersV2List"
            name="lblQxUsersV2List"
            class="col-form-label text-info"
            style="width: 250px"
            >用户V2列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <QxUsersV2_ListCom
        :items="dataListQxUsersV2"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxUsersV2_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxUsersV2By" type="hidden" />
    </div>
    <!--编辑层-->
    <QxUsersV2_EditCom ref="refQxUsersV2_Edit"></QxUsersV2_EditCom>
    <!--详细信息层-->
    <QxUsersV2_DetailCom ref="refQxUsersV2_Detail"></QxUsersV2_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxUsersV2_Edit,
    refQxUsersV2_Detail,
    showErrorMessage,
    dataListQxUsersV2,
    emptyRecNumInfo,
    name_q,
    userName_q,
    nickName_q,
    email_q,
    phone_q,
  } from '@/views/UserManage_GP/QxUsersV2VueShare';
  import QxUsersV2CRUDEx from '@/views/UserManage_GP/QxUsersV2CRUDEx';
  import QxUsersV2_EditCom from '@/views/UserManage_GP/QxUsersV2_Edit.vue';
  import QxUsersV2_DetailCom from '@/views/UserManage_GP/QxUsersV2_Detail.vue';
  import QxUsersV2_ListCom from '@/views/UserManage_GP/QxUsersV2_List.vue';
  import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
  export default defineComponent({
    name: 'QxUsersV2CRUD',
    components: {
      // 组件注册
      QxUsersV2_EditCom,
      QxUsersV2_DetailCom,
      QxUsersV2_ListCom,
    },

    setup() {
      const arrQxUserIdentity = ref<clsQxUserIdentityEN[]>([]);

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('用户V2维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QxUsersV2CRUDEx.vuebtn_Click = btn_Click;
        QxUsersV2CRUDEx.GetPropValue = GetPropValue;
        const objPage = new QxUsersV2CRUDEx();
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
        QxUsersV2CRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxUsersV2,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxUsersV2_Edit,
        refQxUsersV2_Detail,
        name_q,
        userName_q,
        nickName_q,
        email_q,
        phone_q,
        arrQxUserIdentity,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editQxUsersV2', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxUsersV2CRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
