已完成恢复，并已写入目标文件。该文件当前通过本地错误检查（无报错）。完整内容如下：

<template>
  <div class="view-info-copy-page container-fluid py-3">
    <div class="card mb-3">
      <div class="card-header fw-bold">查询条件</div>
      <div class="card-body">
        <div class="row g-2 align-items-end">
          <div class="col-12 col-md-4 col-lg-3">
            <label class="form-label">源工程</label>
            <input
              v-model.trim="queryForm.sourcePrjId"
              type="text"
              class="form-control"
              placeholder="请输入源工程Id"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <label class="form-label">界面名</label>
            <input
              v-model.trim="queryForm.sourceViewName"
              type="text"
              class="form-control"
              placeholder="支持模糊查询"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <label class="form-label">中文名</label>
            <input
              v-model.trim="queryForm.sourceViewCnName"
              type="text"
              class="form-control"
              placeholder="支持模糊查询"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <label class="form-label">数据库</label>
            <input
              v-model.trim="queryForm.sourceDataBaseName"
              type="text"
              class="form-control"
              placeholder="如: AGC_CS12"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <label class="form-label">冲突策略</label>
            <select v-model="queryForm.conflictStrategy" class="form-select">
              <option value="skip">skip(跳过冲突)</option>
              <option value="overwrite">overwrite(覆盖)</option>
              <option value="rename">rename(重命名)</option>
            </select>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <button class="btn btn-primary me-2" :disabled="queryLoading" @click="btnQuery_Click">
              {{ queryLoading ? '查询中...' : '查询' }}
            </button>
            <span class="text-muted">
              共 {{ sourceViewRows.length }} 条，目标工程: {{ targetPrjId || '未设置' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header fw-bold">源界面列表</div>
      <div class="card-body table-responsive">
        <table class="table table-striped table-hover align-middle mb-2">
          <thead>
            <tr>
              <th style="width: 64px">序号</th>
              <th style="width: 110px">界面ID</th>
              <th>界面名</th>
              <th>中文名</th>
              <th>数据库</th>
              <th style="width: 100px">区域数</th>
              <th style="width: 300px">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in pagedSourceRows" :key="row.viewId">
              <td>{{ (pageIndex - 1) * pageSize + idx + 1 }}</td>
              <td>{{ row.viewId }}</td>
              <td>{{ row.viewName }}</td>
              <td>{{ row.viewCnName }}</td>
              <td>{{ row.dataBaseName }}</td>
              <td>{{ row.regionNum }}</td>
              <td>
                <button
                  class="btn btn-outline-secondary btn-sm me-2"
                  :disabled="regionLoading"
                  @click="btnLoadRegions_Click(row)"
                >
                  查看区域
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  :disabled="copyPrepareLoading"
                  @click="btnCopy_Click(row)"
                >
                  准备复制
                </button>
              </td>
            </tr>
            <tr v-if="pagedSourceRows.length === 0">
              <td colspan="7" class="text-center text-muted py-4">暂无数据</td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex justify-content-between align-items-center">
          <span class="text-muted">第 {{ pageIndex }} / {{ totalPages }} 页</span>
          <div>
            <button
              class="btn btn-light btn-sm me-2"
              :disabled="pageIndex <= 1"
              @click="goPrevPage"
            >
              上一页
            </button>
            <button
              class="btn btn-light btn-sm"
              :disabled="pageIndex >= totalPages"
              @click="goNextPage"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header fw-bold">复制状态</div>
      <div class="card-body">
        <div class="row g-2 mb-3">
          <div class="col-12 col-md-3">
            <div class="status-box">区域总数: {{ statusTotalCount }}</div>
          </div>
          <div class="col-12 col-md-3">
            <div class="status-box">已复制个数: {{ statusCopiedCount }}</div>
          </div>
          <div class="col-12 col-md-3">
            <div class="status-box">已建立关系个数: {{ statusRelationCount }}</div>
          </div>
          <div class="col-12 col-md-3">
            <div class="status-box text-danger">失败个数: {{ statusFailedCount }}</div>
          </div>
        </div>

        <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
          <button class="btn btn-success" :disabled="executeLoading" @click="btnExecuteCopy_Click">
            {{ executeBtnText }}
          </button>
          <button
            class="btn btn-outline-info"
            :disabled="activeTaskId <= 0 || refreshLoading"
            @click="refreshTaskStatus"
          >
            手动刷新状态
          </button>
          <span class="text-muted"
            >任务Id: {{ activeTaskId > 0 ? activeTaskId : '-' }} | 状态:
            {{ currentTaskStatus || '-' }} | 步骤: {{ currentStep || '-' }}</span
          >
        </div>

        <div v-if="taskMessage" class="alert alert-light border mb-3 py-2 px-3">{{
          taskMessage
        }}</div>

        <div class="table-responsive">
          <table class="table table-bordered table-sm align-middle mb-0">
            <thead>
              <tr>
                <th>源区域ID</th>
                <th>类名</th>
                <th>目标区域ID</th>
                <th>区域复制状态</th>
                <th>关系建立状态</th>
                <th>错误信息</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in regionStatuses" :key="row.sourceRegionId + '_' + row.clsName">
                <td>{{ row.sourceRegionId }}</td>
                <td>{{ row.clsName }}</td>
                <td>{{ row.targetRegionId }}</td>
                <td :class="statusClass(row.copyStatus)">{{ row.copyStatus }}</td>
                <td :class="statusClass(row.relationStatus)">{{ row.relationStatus }}</td>
                <td class="text-danger">{{ row.errorMessage }}</td>
              </tr>
              <tr v-if="regionStatuses.length === 0">
                <td colspan="6" class="text-center text-muted py-4">请先查看区域或准备复制任务</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
  import { message } from 'ant-design-vue';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
  import { ViewInfo_GetObjLstAsync } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
  import { ViewRegionEx_GetObjLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
  import {
    type ViewInfoExCopyRegionStatus,
    type ViewInfoExCopyTaskStatusResult,
    ViewInfoEx_ExecuteCopyTask,
    ViewInfoEx_GetCopyTaskStatus,
    ViewInfoEx_StartOrResumeCopyTask,
  } from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';

  type ViewInfoCopyRow = {
    viewId: string;
    viewName: string;
    viewCnName: string;
    dataBaseName: string;
    prjId: string;
    regionNum: number;
  };

  type RegionCopyStatus = {
    sourceRegionId: string;
    clsName: string;
    targetRegionId: string;
    copyStatus: string;
    relationStatus: string;
    errorMessage: string;
  };

  const queryForm = reactive({
    sourcePrjId: clsPrivateSessionStorage.currSelPrjId || clsPrivateSessionStorage.currPrjId,
    sourceViewName: '',
    sourceViewCnName: '',
    sourceDataBaseName: '',
    conflictStrategy: 'skip',
  });

  const targetPrjId = clsPrivateSessionStorage.currSelPrjId || clsPrivateSessionStorage.currPrjId;
  const userId = clsPrivateSessionStorage.userId;

  const sourceViewRows = ref<Array<ViewInfoCopyRow>>([]);
  const pageIndex = ref(1);
  const pageSize = ref(10);

  const queryLoading = ref(false);
  const regionLoading = ref(false);
  const copyPrepareLoading = ref(false);
  const executeLoading = ref(false);
  const refreshLoading = ref(false);

  const selectedSourceRow = ref<ViewInfoCopyRow | null>(null);

  const activeTaskId = ref(0);
  const currentTaskStatus = ref('');
  const currentStep = ref('');
  const taskMessage = ref('');
  const targetViewId = ref('');
  const targetViewName = ref('');

  const regionStatuses = ref<Array<RegionCopyStatus>>([]);

  const totalPages = computed(() => {
    const pageCount = Math.ceil(sourceViewRows.value.length / pageSize.value);
    return pageCount <= 0 ? 1 : pageCount;
  });

  const pagedSourceRows = computed(() => {
    const start = (pageIndex.value - 1) * pageSize.value;
    return sourceViewRows.value.slice(start, start + pageSize.value);
  });

  const statusTotalCount = computed(() => regionStatuses.value.length);
  const statusCopiedCount = computed(
    () => regionStatuses.value.filter((x) => isSuccessStatus(x.copyStatus)).length,
  );
  const statusRelationCount = computed(
    () => regionStatuses.value.filter((x) => isSuccessStatus(x.relationStatus)).length,
  );
  const statusFailedCount = computed(
    () =>
      regionStatuses.value.filter((x) =>
        isFailStatus(x.copyStatus, x.relationStatus, x.errorMessage),
      ).length,
  );

  const executeBtnText = computed(() => {
    if (activeTaskId.value <= 0) return '开始复制';
    const status = currentTaskStatus.value.toLowerCase();
    if (
      status === 'completed' ||
      status === 'success' ||
      status === 'failed' ||
      status === 'error'
    ) {
      return '开始复制';
    }
    return '继续复制';
  });

  let pollingTimer: ReturnType<typeof setInterval> | null = null;
  const isRefreshingTask = ref(false);

  function normalizeString(value: unknown): string {
    if (value == null) return '';
    return String(value);
  }

  function escapeSqlLike(value: string): string {
    return value.replace(/'/g, "''");
  }

  function getErrorMessage(error: unknown): string {
    if (typeof error === 'string') return error;
    const anyErr = error as any;
    if (typeof anyErr?.message === 'string' && anyErr.message.length > 0) {
      return anyErr.message;
    }
    if (typeof anyErr?.toString === 'function') {
      return anyErr.toString();
    }
    return '操作失败，请稍后重试。';
  }

  function statusClass(statusText: string): string {
    if (isSuccessStatus(statusText)) return 'text-success';
    if (isFailStatus(statusText, statusText, '')) return 'text-danger';
    return 'text-secondary';
  }

  function isSuccessStatus(statusText: string): boolean {
    const text = normalizeString(statusText).toLowerCase();
    return (
      text.includes('success') ||
      text.includes('completed') ||
      text.includes('done') ||
      text.includes('成功') ||
      text.includes('完成')
    );
  }

  function isFailStatus(copyStatus: string, relationStatus: string, errorMessage: string): boolean {
    const joinText = `${copyStatus} ${relationStatus}`.toLowerCase();
    return (
      joinText.includes('fail') ||
      joinText.includes('error') ||
      joinText.includes('失败') ||
      joinText.includes('错误') ||
      !IsNullOrEmpty(errorMessage)
    );
  }

  function resetTaskRuntimeInfo() {
    stopPolling();
    activeTaskId.value = 0;
    currentTaskStatus.value = '';
    currentStep.value = '';
    taskMessage.value = '';
    targetViewId.value = '';
    targetViewName.value = '';
  }

  function goPrevPage() {
    if (pageIndex.value > 1) pageIndex.value -= 1;
  }

  function goNextPage() {
    if (pageIndex.value < totalPages.value) pageIndex.value += 1;
  }

  function buildWhereCond(): string {
    const arrCond: Array<string> = ['1=1'];

    if (!IsNullOrEmpty(queryForm.sourcePrjId)) {
      arrCond.push(`${clsViewInfoEN.con_PrjId}='${escapeSqlLike(queryForm.sourcePrjId)}'`);
    }
    if (!IsNullOrEmpty(queryForm.sourceViewName)) {
      arrCond.push(
        `${clsViewInfoEN.con_ViewName} like '%${escapeSqlLike(queryForm.sourceViewName)}%'`,
      );
    }
    if (!IsNullOrEmpty(queryForm.sourceViewCnName)) {
      arrCond.push(
        `${clsViewInfoEN.con_ViewCnName} like '%${escapeSqlLike(queryForm.sourceViewCnName)}%'`,
      );
    }
    if (!IsNullOrEmpty(queryForm.sourceDataBaseName)) {
      arrCond.push(
        `${clsViewInfoEN.con_DataBaseName} like '%${escapeSqlLike(queryForm.sourceDataBaseName)}%'`,
      );
    }
    return arrCond.join(' and ');
  }

  async function btnQuery_Click() {
    queryLoading.value = true;
    try {
      const strWhere = buildWhereCond();
      const arrViewInfo = await ViewInfo_GetObjLstAsync(strWhere);

      sourceViewRows.value = arrViewInfo
        .map((x) => ({
          viewId: x.viewId,
          viewName: x.viewName,
          viewCnName: x.viewCnName,
          dataBaseName: x.dataBaseName,
          prjId: x.prjId,
          regionNum: Number(x.regionNum ?? 0),
        }))
        .sort((a, b) => a.viewName.localeCompare(b.viewName));

      pageIndex.value = 1;
      message.success(`查询成功，匹配 ${sourceViewRows.value.length} 条记录。`);
    } catch (error) {
      const errMsg = getErrorMessage(error);
      message.error(`查询失败: ${errMsg}`);
    } finally {
      queryLoading.value = false;
    }
  }

  async function loadSourceRegionsAsPending(sourceViewId: string) {
    const cmPrjId = clsPrivateSessionStorage.cmPrjId;
    const arrSourceRegions = await ViewRegionEx_GetObjLstByViewIdCache(sourceViewId, cmPrjId);
    regionStatuses.value = arrSourceRegions.map((x) => ({
      sourceRegionId: x.regionId,
      clsName: x.clsName,
      targetRegionId: '',
      copyStatus: '待复制',
      relationStatus: '待建立',
      errorMessage: '',
    }));
  }

  async function btnLoadRegions_Click(row: ViewInfoCopyRow) {
    selectedSourceRow.value = row;
    regionLoading.value = true;
    try {
      resetTaskRuntimeInfo();
      await loadSourceRegionsAsPending(row.viewId);
      taskMessage.value = `仅查看源界面区域: ${row.viewName}(${row.viewId})`;
      message.success('区域加载完成（仅查看，不创建复制任务）。');
    } catch (error) {
      const errMsg = getErrorMessage(error);
      message.error(`加载源区域失败: ${errMsg}`);
    } finally {
      regionLoading.value = false;
    }
  }

  async function btnCopy_Click(row: ViewInfoCopyRow) {
    selectedSourceRow.value = row;
    copyPrepareLoading.value = true;
    try {
      stopPolling();
      const taskResult = await ViewInfoEx_StartOrResumeCopyTask(
        targetPrjId,
        row.viewId,
        userId,
        queryForm.conflictStrategy,
      );

      activeTaskId.value = taskResult.taskId;
      currentTaskStatus.value = taskResult.status;
      currentStep.value = taskResult.currentStep;
      taskMessage.value = taskResult.message;

      // 尝试加载源区域，但即使失败也不影响任务创建结果
      try {
        await loadSourceRegionsAsPending(row.viewId);
      } catch (eRegion) {
        console.warn('加载区域列表失败，但任务已创建:', eRegion);
        taskMessage.value = `任务已创建(TaskId=${activeTaskId.value})，但加载区域出错，可以直接点击"开始复制"继续。`;
      }

      if (activeTaskId.value > 0) {
        startPolling();
      }

      if (taskResult.isNewTask) {
        message.success(`复制任务已创建。TaskId=${taskResult.taskId}`);
      } else {
        message.info(`已加载未完成任务。TaskId=${taskResult.taskId}`);
      }
    } catch (error) {
      const errMsg = getErrorMessage(error);
      if (activeTaskId.value > 0) {
        // 任务已创建，仅提示加载失败
        message.warning(
          `任务已创建(TaskId=${activeTaskId.value})，但加载部分信息失败: ${errMsg}。可以继续点击"开始复制"。`,
        );
      } else {
        // 任务未创建，提示完整失败
        message.error(`准备复制失败: ${errMsg}`);
      }
    } finally {
      copyPrepareLoading.value = false;
    }
  }

  async function btnExecuteCopy_Click() {
    if (selectedSourceRow.value == null) {
      message.warning('请先在源界面列表中选择“查看区域”或“准备复制”。');
      return;
    }

    executeLoading.value = true;
    try {
      if (activeTaskId.value <= 0) {
        await btnCopy_Click(selectedSourceRow.value);
      }

      if (activeTaskId.value <= 0) {
        message.warning('未获取到有效任务Id，无法执行复制。');
        return;
      }

      await ViewInfoEx_ExecuteCopyTask(activeTaskId.value);
      message.success('已开始执行复制任务。');

      startPolling();
      await refreshTaskStatus();
    } catch (error) {
      const errMsg = getErrorMessage(error);
      message.error(`执行复制失败: ${errMsg}`);
    } finally {
      executeLoading.value = false;
    }
  }

  function applyTaskStatus(taskStatus: ViewInfoExCopyTaskStatusResult) {
    activeTaskId.value = taskStatus.taskId;
    currentTaskStatus.value = taskStatus.status;
    currentStep.value = taskStatus.currentStep;
    taskMessage.value = taskStatus.message;
    targetViewId.value = taskStatus.targetViewId;
    targetViewName.value = taskStatus.targetViewName;
    regionStatuses.value = taskStatus.regionStatuses.map((x: ViewInfoExCopyRegionStatus) => ({
      sourceRegionId: x.sourceRegionId,
      clsName: x.clsName,
      targetRegionId: x.targetRegionId,
      copyStatus: x.copyStatus,
      relationStatus: x.relationStatus,
      errorMessage: normalizeString(x.errorMessage),
    }));
  }

  async function refreshTaskStatus() {
    if (activeTaskId.value <= 0 || isRefreshingTask.value) return;

    isRefreshingTask.value = true;
    refreshLoading.value = true;
    try {
      const taskStatus = await ViewInfoEx_GetCopyTaskStatus(activeTaskId.value);
      applyTaskStatus(taskStatus);

      const status = currentTaskStatus.value.toLowerCase();
      const isFinish =
        status.includes('completed') ||
        status.includes('success') ||
        status.includes('failed') ||
        status.includes('error');

      if (isFinish) {
        stopPolling();
        if (status.includes('completed') || status.includes('success')) {
          message.success(`复制完成，目标界面: ${targetViewName.value || targetViewId.value}`);
        } else {
          message.warning('复制任务已结束，但存在失败项，请检查错误信息。');
        }
      }
    } catch (error) {
      stopPolling();
      const errMsg = getErrorMessage(error);
      message.error(`刷新任务状态失败: ${errMsg}`);
    } finally {
      isRefreshingTask.value = false;
      refreshLoading.value = false;
    }
  }

  function startPolling() {
    if (pollingTimer != null) return;
    pollingTimer = setInterval(async () => {
      await refreshTaskStatus();
    }, 1500);
  }

  function stopPolling() {
    if (pollingTimer == null) return;
    clearInterval(pollingTimer);
    pollingTimer = null;
  }

  onMounted(async () => {
    await btnQuery_Click();
  });

  onUnmounted(() => {
    stopPolling();
  });
</script>

<style scoped>
  .view-info-copy-page .card {
    border: 1px solid #dfe3e8;
  }

  .view-info-copy-page .card-header {
    background: #f8fafc;
  }

  .view-info-copy-page .status-box {
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 8px 10px;
    background: #fff;
    min-height: 40px;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
</style>
