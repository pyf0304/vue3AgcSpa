<template>
  <div class="prjtab-copy-page container-fluid py-3">
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
      <div>
        <h5 class="mb-1">工程表的复制</h5>
        <div class="text-muted small">当前目标工程：{{ currSelPrjName || currSelPrjId }}</div>
      </div>
      <div class="text-warning small">{{ lblMsg }}</div>
    </div>

    <div class="card shadow-sm mb-3">
      <div class="card-body pb-2">
        <div class="row g-2 align-items-end">
          <div class="col-12 col-md-2">
            <label for="txtTabIdq" class="form-label form-label-sm">表ID</label>
            <input
              id="txtTabIdq"
              v-model.trim="query.tabId"
              type="text"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-12 col-md-3">
            <label for="txtTabNameq" class="form-label form-label-sm">表名</label>
            <input
              id="txtTabNameq"
              v-model.trim="query.tabName"
              type="text"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-12 col-md-3">
            <label for="txtTabCnNameq" class="form-label form-label-sm">表中文名</label>
            <input
              id="txtTabCnNameq"
              v-model.trim="query.tabCnName"
              type="text"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-12 col-md-2">
            <label for="ddlPrjIdq" class="form-label form-label-sm">源工程</label>
            <select id="ddlPrjIdq" v-model="query.sourcePrjId" class="form-control form-control-sm">
              <option v-for="item in arrProjects" :key="item.prjId" :value="item.prjId">
                {{ item.prjName }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-2">
            <label for="ddlFuncModuleId" class="form-label form-label-sm">模块</label>
            <select
              id="ddlFuncModuleId"
              v-model="query.funcModuleAgcId"
              class="form-control form-control-sm"
            >
              <option
                v-for="item in arrFuncModule_Agc"
                :key="item.funcModuleAgcId"
                :value="item.funcModuleAgcId"
              >
                {{ item.funcModuleName }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-2">
            <label for="txtDataBaseNameq" class="form-label form-label-sm">数据库名</label>
            <input
              id="txtDataBaseNameq"
              v-model.trim="query.dataBaseName"
              type="text"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-12 col-md-2">
            <button class="btn btn-outline-warning btn-sm w-100" @click="btnQuery_Click">
              查询
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card shadow-sm">
      <div
        class="card-header bg-white d-flex align-items-center justify-content-between flex-wrap gap-2"
      >
        <div class="fw-semibold">工程表列表</div>
        <div class="d-flex flex-wrap gap-2 align-items-center">
          <span class="small text-muted">已选 {{ selectedCount }} 条</span>
          <button
            class="btn btn-outline-info btn-sm"
            :disabled="loading"
            @click="btnCopyPrjTab_Click"
          >
            复制工程表
          </button>
          <button
            class="btn btn-outline-info btn-sm"
            :disabled="loading || totalRecords === 0"
            @click="btnExportExcel4Dg_Click"
          >
            导出Excel
          </button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-bordered table-sm mb-0 align-middle">
          <thead class="table-dark">
            <tr>
              <th style="width: 48px">
                <input v-model="allPageChecked" type="checkbox" />
              </th>
              <th>
                <button class="sort-link" @click="changeSort('tabId')">
                  表ID{{ sortMark('tabId') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('tabName')">
                  表名{{ sortMark('tabName') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('tabCnName')">
                  表中文名{{ sortMark('tabCnName') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('prjName')">
                  工程名称{{ sortMark('prjName') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('funcModuleName')">
                  模块名称{{ sortMark('funcModuleName') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('dataBaseName')">
                  数据库名{{ sortMark('dataBaseName') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('updDate')">
                  修改日期{{ sortMark('updDate') }}
                </button>
              </th>
              <th>
                <button class="sort-link" @click="changeSort('memo')">
                  说明{{ sortMark('memo') }}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="9" class="text-center text-muted py-4">正在加载...</td>
            </tr>
            <tr v-else-if="pagedRows.length === 0">
              <td colspan="9" class="text-center text-muted py-4">{{
                emptyRecNumInfo || '无记录！'
              }}</td>
            </tr>
            <tr v-for="item in pagedRows" :key="item.tabId">
              <td>
                <input v-model="item.checked" type="checkbox" />
              </td>
              <td>{{ item.tabId }}</td>
              <td>{{ item.tabName }}</td>
              <td>{{ item.tabCnName }}</td>
              <td>{{ item.prjName }}</td>
              <td>{{ item.funcModuleName }}</td>
              <td>{{ item.dataBaseName }}</td>
              <td>{{ formatDate(item.updDate) }}</td>
              <td :title="item.memo">{{ item.memo }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="card-footer bg-white d-flex align-items-center justify-content-between flex-wrap gap-2"
      >
        <div class="small text-muted">
          共有记录: {{ totalRecords }}
          <span class="mx-2">总页数: {{ totalPages }}</span>
          <span>当前页: {{ currentPage }}</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button
            class="btn btn-outline-warning btn-sm"
            :disabled="currentPage <= 1"
            @click="goPrevPage"
          >
            上一页
          </button>
          <button
            class="btn btn-outline-warning btn-sm"
            :disabled="currentPage >= totalPages"
            @click="goNextPage"
          >
            下一页
          </button>
          <span class="small">到第</span>
          <input
            v-model.trim="jumpPage"
            type="number"
            min="1"
            :max="String(totalPages)"
            class="form-control form-control-sm pager-input"
          />
          <span class="small">页</span>
          <button
            class="btn btn-outline-warning btn-sm"
            :disabled="totalPages === 0"
            @click="goJumpPage"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { computed, defineComponent, onMounted, ref, watch } from 'vue';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
  import {
    FuncModule_Agc_GetArrFuncModule_AgcByPrjId,
    FuncModule_Agc_GetObjByFuncModuleAgcIdCache,
  } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import {
    Projects_GetArrProjects,
    Projects_GetObjByPrjIdCache,
  } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
  import { PrjTab_GetRecCountByCondAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
  import {
    PrjTabEx_CopyPrjTab,
    PrjTabEx_GetObjExLstByPagerAsync,
  } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { Format } from '@/ts/PubFun/clsString';
  import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
  import { vPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';

  type SortDirection = 'Asc' | 'Desc';
  type RowKey =
    | 'tabId'
    | 'tabName'
    | 'tabCnName'
    | 'prjName'
    | 'funcModuleName'
    | 'dataBaseName'
    | 'updDate'
    | 'memo';
  type PrjTabCopyRow = {
    checked: boolean;
    tabId: string;
    tabName: string;
    tabCnName: string;
    prjId: string;
    prjName: string;
    funcModuleAgcId: string;
    funcModuleName: string;
    dataBaseName: string;
    updDate: string;
    memo: string;
  };

  export default defineComponent({
    name: 'PrjTabCopy',
    setup() {
      const currSelPrjId = clsPrivateSessionStorage.currSelPrjId;
      const currSelPrjName = ref('');
      const loading = ref(false);
      const lblMsg = ref('');
      const emptyRecNumInfo = ref('请选择查询条件后再加载列表。');
      const pageSize = ref(10);
      const currentPage = ref(1);
      const jumpPage = ref('1');
      const totalRecords = ref(0);
      const sortKey = ref<RowKey>('tabId');
      const sortDirection = ref<SortDirection>('Asc');
      const rows = ref<Array<PrjTabCopyRow>>([]);
      const arrProjects = ref<Array<clsProjectsEN>>([]);
      const arrFuncModule_Agc = ref<Array<clsFuncModule_AgcEN>>([]);
      const prjNameCache = new Map<string, string>();
      const funcModuleNameCache = new Map<string, string>();

      const query = ref({
        tabId: '',
        tabName: '',
        tabCnName: '',
        sourcePrjId: '0',
        funcModuleAgcId: '0',
        dataBaseName: '',
      });

      const totalPages = computed(() => {
        if (totalRecords.value === 0) return 0;
        return Math.ceil(totalRecords.value / pageSize.value);
      });

      const sortedRows = computed(() => {
        const data = [...rows.value];
        data.sort((left, right) => compareRows(left, right, sortKey.value, sortDirection.value));
        return data;
      });

      const pagedRows = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize.value;
        return sortedRows.value.slice(startIndex, startIndex + pageSize.value);
      });

      const selectedCount = computed(() => rows.value.filter((item) => item.checked).length);

      const allPageChecked = computed({
        get() {
          if (pagedRows.value.length === 0) return false;
          return pagedRows.value.every((item) => item.checked);
        },
        set(value: boolean) {
          pagedRows.value.forEach((item) => {
            item.checked = value;
          });
        },
      });

      onMounted(async () => {
        const objProject = await Projects_GetObjByPrjIdCache(currSelPrjId);
        currSelPrjName.value = objProject?.prjName ?? '';
        const projectList = await Projects_GetArrProjects();
        arrProjects.value = projectList ?? [];
        await bindFuncModule();
      });

      watch(
        () => query.value.sourcePrjId,
        async () => {
          query.value.funcModuleAgcId = '0';
          await bindFuncModule();
        },
      );

      async function bindFuncModule() {
        if (query.value.sourcePrjId === '' || query.value.sourcePrjId === '0') {
          arrFuncModule_Agc.value = [createEmptyFuncModule()];
          return;
        }
        const arrData = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(query.value.sourcePrjId);
        arrFuncModule_Agc.value = [createEmptyFuncModule(), ...(arrData ?? [])];
      }

      function createEmptyFuncModule(): clsFuncModule_AgcEN {
        const obj = new clsFuncModule_AgcEN();
        obj.funcModuleAgcId = '0';
        obj.funcModuleName = '选模块...';
        return obj;
      }

      function buildWhereCond(): string {
        let strWhereCond = Format(
          " 1=1 And TabName Not In (select TabName From PrjTab Where PrjId='{0}')",
          currSelPrjId,
        );
        if (query.value.tabId !== '') {
          strWhereCond += Format(" And PrjTab.TabId like '%{0}%'", query.value.tabId);
        }
        if (query.value.tabName !== '') {
          strWhereCond += Format(" And PrjTab.TabName like '%{0}%'", query.value.tabName);
        }
        if (query.value.tabCnName !== '') {
          strWhereCond += Format(" And PrjTab.TabCnName like '%{0}%'", query.value.tabCnName);
        }
        if (query.value.sourcePrjId !== '' && query.value.sourcePrjId !== '0') {
          strWhereCond += Format(" And PrjTab.PrjId='{0}'", query.value.sourcePrjId);
        }
        if (query.value.dataBaseName !== '') {
          strWhereCond += Format(" And PrjTab.DataBaseName like '%{0}%'", query.value.dataBaseName);
        }
        if (query.value.funcModuleAgcId !== '' && query.value.funcModuleAgcId !== '0') {
          strWhereCond += Format(" and PrjTab.FuncModuleAgcId='{0}'", query.value.funcModuleAgcId);
        }
        return strWhereCond;
      }

      async function loadRows() {
        loading.value = true;
        lblMsg.value = '';
        try {
          const strWhereCond = buildWhereCond();
          const recCount = await PrjTab_GetRecCountByCondAsync(strWhereCond);
          totalRecords.value = recCount;
          if (recCount === 0) {
            rows.value = [];
            emptyRecNumInfo.value = '无记录！';
            currentPage.value = 1;
            jumpPage.value = '1';
            return;
          }
          const objPagerPara: stuPagerPara = {
            pageIndex: 1,
            pageSize: recCount,
            whereCond: strWhereCond,
            orderBy: 'TabId Asc',
            sortFun: (x, y) => {
              x = y;
              return 0;
            },
          };
          const arrData = await PrjTabEx_GetObjExLstByPagerAsync(objPagerPara);
          const arrDataWithName = await fillDisplayNames(arrData);
          rows.value = arrDataWithName.map((item) => ({
            checked: false,
            tabId: item.tabId,
            tabName: item.tabName,
            tabCnName: item.tabCnName,
            prjId: item.prjId,
            prjName: item.prjName,
            funcModuleAgcId: item.funcModuleAgcId,
            funcModuleName: item.funcModuleName,
            dataBaseName: item.dataBaseName,
            updDate: item.updDate,
            memo: item.memo,
          }));
          emptyRecNumInfo.value = '';
          if (currentPage.value > totalPages.value) {
            currentPage.value = totalPages.value || 1;
          }
          jumpPage.value = String(currentPage.value);
        } catch (e) {
          console.error(e);
          rows.value = [];
          totalRecords.value = 0;
          emptyRecNumInfo.value = '查询失败，请检查条件或接口。';
          alert(Format('加载工程表列表失败！{0}', e));
        } finally {
          loading.value = false;
        }
      }

      async function fillDisplayNames(
        arrData: Array<clsPrjTabENEx>,
      ): Promise<Array<clsPrjTabENEx>> {
        const arrTask = arrData.map(async (item) => {
          await fillProjectName(item);
          await fillFuncModuleName(item);
          return item;
        });
        return Promise.all(arrTask);
      }

      async function fillProjectName(item: clsPrjTabENEx): Promise<void> {
        if (item.prjName != null && item.prjName !== '') return;
        if (item.prjId == null || item.prjId === '') return;

        const cacheName = prjNameCache.get(item.prjId);
        if (cacheName != null) {
          item.prjName = cacheName;
          return;
        }

        const objPrj = await Projects_GetObjByPrjIdCache(item.prjId);
        const prjName = objPrj?.prjName ?? '';
        prjNameCache.set(item.prjId, prjName);
        item.prjName = prjName;
      }

      async function fillFuncModuleName(item: clsPrjTabENEx): Promise<void> {
        if (item.funcModuleName != null && item.funcModuleName !== '') return;
        if (item.prjId == null || item.prjId === '') return;
        if (item.funcModuleAgcId == null || item.funcModuleAgcId === '') return;

        const funcModuleAgcId = item.funcModuleAgcId;
        const cacheKey = `${item.prjId}_${funcModuleAgcId}`;
        const cacheName = funcModuleNameCache.get(cacheKey);
        if (cacheName != null) {
          item.funcModuleName = cacheName;
          return;
        }

        const objModule = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
          funcModuleAgcId,
          item.prjId,
        );
        const moduleName = objModule?.funcModuleName ?? '';
        funcModuleNameCache.set(cacheKey, moduleName);
        item.funcModuleName = moduleName;
      }

      async function btnQuery_Click() {
        currentPage.value = 1;
        jumpPage.value = '1';
        await loadRows();
      }

      async function btnCopyPrjTab_Click() {
        const arrSouTabId = rows.value.filter((item) => item.checked).map((item) => item.tabId);
        if (arrSouTabId.length === 0) {
          alert('请选择需要复制的工程表！');
          return;
        }
        if (confirm(`确定要复制这${arrSouTabId.length}个工程表到当前工程吗?`) === false) {
          return;
        }
        loading.value = true;
        try {
          let intSuccCount = 0;
          const strUserId = clsPubLocalStorage.userId || '';
          for (const strSouTabId of arrSouTabId) {
            const returnBool = await PrjTabEx_CopyPrjTab(currSelPrjId, strSouTabId, strUserId);
            if (returnBool === true) {
              intSuccCount++;
            }
          }

          if (intSuccCount > 0) {
            lblMsg.value = `复制成功${intSuccCount}条，共${arrSouTabId.length}条。`;
            vPrjTab_Sim_ReFreshThisCache(currSelPrjId);
            alert(lblMsg.value);
            await loadRows();
          } else {
            lblMsg.value = '复制源工程表到当前工程失败！';
            alert(lblMsg.value);
          }
        } catch (e) {
          console.error(e);
          lblMsg.value = '复制源工程表到当前工程失败！';
          alert(Format('{0}{1}', lblMsg.value, e));
        } finally {
          loading.value = false;
        }
      }

      async function btnExportExcel4Dg_Click() {
        if (rows.value.length === 0) {
          alert('当前没有可导出的记录！');
          return;
        }
        const headers = [
          '表ID',
          '表名',
          '表中文名',
          '工程名称',
          '模块名称',
          '数据库名',
          '修改日期',
          '说明',
        ];
        const lines = rows.value.map((item) => [
          item.tabId,
          item.tabName,
          item.tabCnName,
          item.prjName,
          item.funcModuleName,
          item.dataBaseName,
          formatDate(item.updDate),
          item.memo,
        ]);
        downloadCsv('PrjTab_Copy.csv', [headers, ...lines]);
      }

      function changeSort(key: RowKey) {
        if (sortKey.value === key) {
          sortDirection.value = sortDirection.value === 'Asc' ? 'Desc' : 'Asc';
        } else {
          sortKey.value = key;
          sortDirection.value = 'Asc';
        }
      }

      function sortMark(key: RowKey): string {
        if (sortKey.value !== key) return '';
        return sortDirection.value === 'Asc' ? ' ↑' : ' ↓';
      }

      function compareRows(
        left: PrjTabCopyRow,
        right: PrjTabCopyRow,
        key: RowKey,
        direction: SortDirection,
      ): number {
        const leftValue = normalizeValue(left[key]);
        const rightValue = normalizeValue(right[key]);
        if (leftValue < rightValue) return direction === 'Asc' ? -1 : 1;
        if (leftValue > rightValue) return direction === 'Asc' ? 1 : -1;
        return 0;
      }

      function normalizeValue(value: unknown): string {
        if (value == null) return '';
        return String(value).toLowerCase();
      }

      function formatDate(value: string): string {
        if (value == null || value === '') return '';
        return value.length > 19 ? value.substring(0, 19) : value;
      }

      function goPrevPage() {
        if (currentPage.value <= 1) return;
        currentPage.value--;
        jumpPage.value = String(currentPage.value);
      }

      function goNextPage() {
        if (currentPage.value >= totalPages.value) return;
        currentPage.value++;
        jumpPage.value = String(currentPage.value);
      }

      function goJumpPage() {
        const pageNum = Number(jumpPage.value);
        if (Number.isNaN(pageNum) || pageNum < 1 || pageNum > totalPages.value) {
          alert('跳转页码不正确！');
          jumpPage.value = String(currentPage.value);
          return;
        }
        currentPage.value = pageNum;
      }

      function downloadCsv(fileName: string, data: Array<Array<string>>) {
        const csvText = data
          .map((row) => row.map((item) => escapeCsvValue(item ?? '')).join(','))
          .join('\r\n');
        const blob = new Blob([`\ufeff${csvText}`], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      }

      function escapeCsvValue(value: string): string {
        const strValue = String(value).replace(/"/g, '""');
        return `"${strValue}"`;
      }

      return {
        allPageChecked,
        arrFuncModule_Agc,
        arrProjects,
        btnCopyPrjTab_Click,
        btnExportExcel4Dg_Click,
        btnQuery_Click,
        changeSort,
        currSelPrjId,
        currSelPrjName,
        currentPage,
        emptyRecNumInfo,
        formatDate,
        goJumpPage,
        goNextPage,
        goPrevPage,
        jumpPage,
        lblMsg,
        loading,
        pagedRows,
        query,
        selectedCount,
        sortMark,
        totalPages,
        totalRecords,
      };
    },
  });
</script>

<style scoped>
  .prjtab-copy-page {
    min-height: 100%;
    background: linear-gradient(180deg, #f8fbff 0%, #f6f3ee 100%);
  }

  .sort-link {
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    font-weight: 600;
  }

  .sort-link:hover {
    text-decoration: underline;
  }

  .pager-input {
    width: 72px;
  }
</style>
