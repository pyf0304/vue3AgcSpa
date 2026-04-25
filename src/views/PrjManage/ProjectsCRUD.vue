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
              id="lblPrjId_q"
              name="lblPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjId_q"
              v-model="prjId_q"
              name="txtPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPrjName_q"
              name="lblPrjName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjName_q"
              v-model="prjName_q"
              name="txtPrjName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUseStateId_q"
              name="lblUseStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >使用状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUseStateId_q"
              v-model="useStateId_q"
              name="ddlUseStateId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblProjectsList"
            name="lblProjectsList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
        <li class="nav-item ml-3">
          <button
            id="btnRelatedDatabase"
            name="btnRelatedDatabase"
            class="btn btn-outline-success btn-sm text-nowrap"
            @click="btn_Click('RelatedDatabase', '')"
            >相关数据库</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortProjectsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Projects_EditCom ref="refProjects_Edit"></Projects_EditCom>
    <!--详细信息层-->
    <Projects_DetailCom ref="refProjects_Detail"></Projects_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <!--相关数据库维护对话框-->
    <div
      v-if="showPrjDbModal"
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          background: #fff;
          border-radius: 6px;
          padding: 20px;
          min-width: 560px;
          max-width: 700px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
          "
        >
          <h5 style="margin: 0">工程 [{{ currentPrjId }}] 的相关数据库</h5>
          <button class="btn btn-sm btn-outline-secondary" @click="closePrjDbModal">关闭</button>
        </div>
        <div v-if="prjDbLoading" class="text-info" style="margin-bottom: 8px">加载中...</div>
        <table class="table table-bordered table-hover table-sm" style="margin-bottom: 12px">
          <thead>
            <tr>
              <th>数据库ID</th>
              <th>数据库名称</th>
              <th>说明</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="relatedDbs.length === 0">
              <td colspan="4" class="text-center text-muted">暂无相关数据库</td>
            </tr>
            <tr v-for="item in relatedDbs" :key="item.mId">
              <td>{{ item.prjDataBaseId }}</td>
              <td>{{ item.dbName }}</td>
              <td>{{ item.memo }}</td>
              <td>
                <button class="btn btn-outline-danger btn-sm" @click="removeDb(item.mId)"
                  >删除</button
                >
              </td>
            </tr>
          </tbody>
        </table>
        <div style="display: flex; align-items: center; gap: 8px">
          <select
            v-model="newSelectedDbId"
            class="form-control form-control-sm"
            style="width: 240px"
          >
            <option value="">-- 选择数据库 --</option>
            <option v-for="db in availableDbs" :key="db.prjDataBaseId" :value="db.prjDataBaseId"
              >{{ db.prjDataBaseId }} - {{ db.prjDataBaseName }}</option
            >
          </select>
          <button class="btn btn-outline-primary btn-sm" :disabled="!newSelectedDbId" @click="addDb"
            >添加</button
          >
        </div>
        <div v-if="prjDbMsg" :class="prjDbMsgClass" style="margin-top: 8px">{{ prjDbMsg }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import ProjectsCRUDEx from '@/views/PrjManage/ProjectsCRUDEx';

  import Projects_EditCom from '@/views/PrjManage/Projects_Edit.vue';
  import Projects_DetailCom from '@/views/PrjManage/Projects_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refProjects_Edit,
    refProjects_Detail,
    prjId_q,
    prjName_q,
    useStateId_q,
  } from '@/views/PrjManage/ProjectsVueShare';
  import { GetFirstCheckedKeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl.js';
  import {
    ProjectDatabaseRel_GetObjLstAsync,
    ProjectDatabaseRel_AddNewRecordAsync,
    ProjectDatabaseRel_DelRecordAsync,
    ProjectDatabaseRel_ReFreshCache,
  } from '@/ts/L3ForWApi/PrjManage/clsProjectDatabaseRelWApi';
  import {
    PrjDataBase_GetObjLstCache,
    PrjDataBase_GetNameByPrjDataBaseIdCache,
  } from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
  import { UseState_BindDdl_UseStateIdInDivCache } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { clsProjectDatabaseRelEN } from '@/ts/L0Entity/PrjManage/clsProjectDatabaseRelEN';
  import { Format } from '@/ts/PubFun/clsString';

  export default defineComponent({
    name: 'ProjectsCRUD',
    components: {
      Projects_EditCom,
      Projects_DetailCom,
    },
    setup() {
      const strTitle = ref('工程维护');
      let objPage: ProjectsCRUDEx | null = null;

      // 相关数据库模态框状态
      const showPrjDbModal = ref(false);
      const currentPrjId = ref('');
      const prjDbLoading = ref(false);
      const prjDbMsg = ref('');
      const prjDbMsgClass = ref('text-danger');
      const relatedDbs = ref<
        Array<{ mId: number; prjDataBaseId: string; dbName: string; memo: string }>
      >([]);
      const allDbs = ref<Array<{ prjDataBaseId: string; prjDataBaseName: string }>>([]);
      const newSelectedDbId = ref('');

      // 已关联的数据库ID集合，用于过滤可用列表
      const availableDbs = ref<Array<{ prjDataBaseId: string; prjDataBaseName: string }>>([]);

      onMounted(async () => {
        await UseState_BindDdl_UseStateIdInDivCache(refDivQuery.value, 'ddlUseStateId_q');
        useStateId_q.value = '0';
        ProjectsCRUDEx.vuebtn_Click = btn_Click;
        ProjectsCRUDEx.GetPropValue = GetPropValue;
        objPage = new ProjectsCRUDEx();
        await objPage.PageLoadCache();
      });

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }

      async function openPrjDbModal() {
        const strPrjId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (!strPrjId) {
          alert('请先选择一个工程记录！');
          return;
        }
        currentPrjId.value = strPrjId;
        prjDbMsg.value = '';
        newSelectedDbId.value = '';
        showPrjDbModal.value = true;
        await loadRelatedDbs(strPrjId);
        await loadAllDbs();
      }

      async function loadRelatedDbs(prjId: string) {
        prjDbLoading.value = true;
        try {
          const strWhere = Format(" PrjId = '{0}'", prjId);
          const lst = await ProjectDatabaseRel_GetObjLstAsync(strWhere);
          const result: Array<{
            mId: number;
            prjDataBaseId: string;
            dbName: string;
            memo: string;
          }> = [];
          for (const item of lst) {
            const dbName = await PrjDataBase_GetNameByPrjDataBaseIdCache(item.prjDataBaseId);
            result.push({
              mId: item.mId,
              prjDataBaseId: item.prjDataBaseId,
              dbName: dbName || '',
              memo: item.memo || '',
            });
          }
          relatedDbs.value = result;
        } catch (e) {
          console.error('加载相关数据库失败', e);
        } finally {
          prjDbLoading.value = false;
        }
      }

      async function loadAllDbs() {
        try {
          const lst = await PrjDataBase_GetObjLstCache();
          allDbs.value = lst.map((db) => ({
            prjDataBaseId: db.prjDataBaseId,
            prjDataBaseName: db.prjDataBaseName || db.prjDataBaseId,
          }));
          updateAvailableDbs();
        } catch (e) {
          console.error('加载数据库列表失败', e);
        }
      }

      function updateAvailableDbs() {
        const relatedIds = new Set(relatedDbs.value.map((r) => r.prjDataBaseId));
        availableDbs.value = allDbs.value.filter((db) => !relatedIds.has(db.prjDataBaseId));
      }

      async function refreshProjectList() {
        if (objPage == null || !refDivList.value) return;
        await objPage.BindGv_Projects4Func(refDivList.value);
      }

      async function addDb() {
        if (!newSelectedDbId.value) return;
        prjDbMsg.value = '';
        try {
          const objRel = new clsProjectDatabaseRelEN();
          objRel.prjId = currentPrjId.value;
          objRel.prjDataBaseId = newSelectedDbId.value;
          await ProjectDatabaseRel_AddNewRecordAsync(objRel);
          ProjectDatabaseRel_ReFreshCache();
          prjDbMsgClass.value = 'text-success';
          prjDbMsg.value = '添加成功！';
          newSelectedDbId.value = '';
          await loadRelatedDbs(currentPrjId.value);
          updateAvailableDbs();
          await refreshProjectList();
        } catch (e) {
          prjDbMsgClass.value = 'text-danger';
          prjDbMsg.value = `添加失败：${e}`;
        }
      }

      async function removeDb(mId: number) {
        if (!confirm('确认删除该数据库关联记录？')) return;
        prjDbMsg.value = '';
        try {
          await ProjectDatabaseRel_DelRecordAsync(mId);
          ProjectDatabaseRel_ReFreshCache();
          prjDbMsgClass.value = 'text-success';
          prjDbMsg.value = '删除成功！';
          await loadRelatedDbs(currentPrjId.value);
          updateAvailableDbs();
          await refreshProjectList();
        } catch (e) {
          prjDbMsgClass.value = 'text-danger';
          prjDbMsg.value = `删除失败：${e}`;
        }
      }

      function closePrjDbModal() {
        showPrjDbModal.value = false;
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        if (strCommandName === 'RelatedDatabase') {
          openPrjDbModal();
          return;
        }
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
        ProjectsCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        strTitle,
        btn_Click,
        showPrjDbModal,
        currentPrjId,
        prjDbLoading,
        prjDbMsg,
        prjDbMsgClass,
        relatedDbs,
        availableDbs,
        newSelectedDbId,
        addDb,
        removeDb,
        closePrjDbModal,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refProjects_Edit,
        refProjects_Detail,
        prjId_q,
        prjName_q,
        useStateId_q,
      };
    },
    watch: {},
    mounted() {},
    methods: {},
  });
</script>
<style scoped></style>
