<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label id="lblDatabaseOwner_q" class="col-form-label text-right" style="width: 90px"
                >数据库拥有者</label
              >
            </td>
            <td class="text-left">
              <input
                id="txtDatabaseOwner_q"
                v-model="databaseOwner_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label id="lblDataBaseTypeId_q" class="col-form-label text-right" style="width: 90px"
                >数据库类型ID</label
              >
            </td>
            <td class="text-left">
              <select
                id="ddlDataBaseTypeId_q"
                v-model="dataBaseTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrDataBaseType"
                  :key="index"
                  :value="item.dataBaseTypeId"
                  >{{ item.dataBaseTypeName }}</option
                >
              </select>
            </td>
            <td class="text-right">
              <label id="lblDataBaseUserId_q" class="col-form-label text-right" style="width: 90px"
                >数据库的用户ID</label
              >
            </td>
            <td class="text-left">
              <input
                id="txtDataBaseUserId_q"
                v-model="dataBaseUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label id="lblIpAddress_q" class="col-form-label text-right" style="width: 90px"
                >服务器</label
              >
            </td>
            <td class="text-left">
              <input
                id="txtIpAddress_q"
                v-model="ipAddress_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label id="lblUseStateId_q" class="col-form-label text-right" style="width: 90px"
                >使用状态Id</label
              >
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId_q"
                v-model="useStateId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrUseState"
                  :key="index"
                  :value="item.useStateId"
                  >{{ item.useStateName }}</option
                >
              </select>
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
            <td class="text-left">
              <button
                id="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblPrjDataBaseList" class="col-form-label text-info" style="width: 250px"
            >数据库对象列表</label
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlUseStateId_SetFldValue"
              v-model="useStateId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">{{
                item.useStateName
              }}</option>
            </select>
            <button
              id="btnSetUseStateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetUseStateId_Click"
              >设置使用状态</button
            >
          </div>
        </li>
      </ul>
    </div>

    <div id="divList" ref="refDivList" class="div_List">
      <PrjDataBase_ListCom
        ref="refPrjDataBase_List"
        :items="dataListPrjDataBase"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortPrjDataBaseBy" type="hidden" />
    </div>

    <PrjDataBase_EditCom ref="refPrjDataBase_Edit" />
    <PrjDataBase_DetailCom ref="refPrjDataBase_Detail" />
  </div>
</template>

<script lang="ts">
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
    refPrjDataBase_Edit,
    refPrjDataBase_Detail,
    refPrjDataBase_List,
    showErrorMessage,
    dataListPrjDataBase,
    emptyRecNumInfo,
    dataColumn,
    databaseOwner_q,
    dataBaseTypeId_q,
    dataBaseUserId_q,
    ipAddress_q,
    useStateId_q,
    useStateId_f,
  } from '@/views/PrjManage/PrjDataBaseVueShare';
  import PrjDataBase_EditCom from '@/views/PrjManage/PrjDataBase_Edit.vue';
  import PrjDataBase_DetailCom from '@/views/PrjManage/PrjDataBase_Detail.vue';
  import PrjDataBase_ListCom from '@/views/PrjManage/PrjDataBase_ListAi.vue';
  import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { DataBaseType_GetArrDataBaseType } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import PrjDataBaseCRUDExAi from '@/views/PrjManage/PrjDataBaseCRUDExAi';

  export default defineComponent({
    name: 'PrjDataBaseCRUDAi',
    components: {
      PrjDataBase_EditCom,
      PrjDataBase_DetailCom,
      PrjDataBase_ListCom,
    },
    setup() {
      const strTitle = ref('数据库对象维护(Ai版)');
      const objPage = ref<PrjDataBaseCRUDExAi>();
      const arrDataBaseType = ref<clsDataBaseTypeEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);

      const ensurePage = (): PrjDataBaseCRUDExAi | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      async function BindDdl4QryRegion() {
        arrDataBaseType.value = await DataBaseType_GetArrDataBaseType();
        dataBaseTypeId_q.value = '0';
        arrUseState.value = await UseState_GetArrUseState();
        useStateId_q.value = '0';
      }

      async function BindDdl4FeatureRegion() {
        arrUseState.value = await UseState_GetArrUseState();
        useStateId_f.value = '0';
      }

      const btnQuery_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.onQuery();
      };

      const btnCreate_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.onCreate('Create', '');
      };

      const btnUpdate_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.onUpdate('Update', '');
      };

      const btnDelete_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.onDelete();
      };

      const btnExportExcel_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.onExport();
      };

      const btnSetUseStateId_Click = async () => {
        const page = ensurePage();
        if (page == null) return;
        await page.btnSetUseStateId_Click();
      };

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        PrjDataBaseCRUDExAi.btn_Click(strCommandName, strKeyId);
      }

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        PrjDataBaseCRUDExAi.vuebtn_Click = btn_Click;
        PrjDataBaseCRUDExAi.GetPropValue = GetPropValue;
        objPage.value = new PrjDataBaseCRUDExAi();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editPrjDataBase', params: { courseId: data.courseId } });
      };

      return {
        showErrorMessage,
        dataListPrjDataBase,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refPrjDataBase_Edit,
        refPrjDataBase_Detail,
        refPrjDataBase_List,
        databaseOwner_q,
        dataBaseTypeId_q,
        dataBaseUserId_q,
        ipAddress_q,
        useStateId_q,
        useStateId_f,
        arrDataBaseType,
        arrUseState,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetUseStateId_Click,
        SortColumn,
        EditTabRelaInfo,
      };
    },
  });
</script>

<style scoped></style>
