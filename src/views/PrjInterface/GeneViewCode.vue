<template>
  <div id="divLayout" ref="refDivLayout" class="tab_layout">
    <!--  标题层  -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 界面CRUD </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div class="row">
      <div class="col-7" style="height: 900px; overflow: auto">
        <!-- 查询层 -->
        <span id="spaTitle4Query" class="h5 text-success"></span>
        <div id="divQuery" ref="refDivQuery_Show" class="div_query"> </div>
        <span id="spaTitle4Feature" class="h5 text-success"></span>

        <!-- 功能区 -->
        <div>
          <ul class="nav ml-3">
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_0"
                type="checkbox"
                value="0001"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">查询区</label>
            </li>
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_1"
                type="checkbox"
                checked="true"
                value="0008"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">功能区</label>
            </li>
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_2"
                type="checkbox"
                value="0002"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">列表区</label>
            </li>
          </ul>
        </div>
        <div id="divFeature" ref="refDivFunction_Show" class="table table-bordered table-hover">
        </div>
        <!-- 列表层 -->
        <span id="spaTitle4List" class="h5 text-success"></span>
        <div id="divList" ref="refDivList_Show" class="div_List">
          <div
            id="divDataLst"
            ref="refDivDataLst"
            class="div_List"
            style="height: 600px; overflow: auto"
          >
          </div>
          <div id="divPager" class="pager" value="1"> </div>
        </div>
        <!-- 编辑层 -->
        <span id="spaTitle4Edit" class="h5 text-success"></span>

        <div id="divEdit" ref="refDivEdit_Show" value="1"></div>
        <!-- 详细信息层 -->
        <span id="spaTitle4Detail" class="h5 text-success"></span>
        <div id="divDetail" ref="refDivDetail_Show" value="1"></div>
        <!-- Excel导出信息层 -->
        <span id="spaTitle4ExcelExport" class="h5 text-success"></span>
        <div id="divExcelExport" ref="refDivExcelExport_Show" value="1"></div>
      </div>
      <div class="col-5">
        <!-- <div>
          <span>{{ viewInfo4GC }}</span>
        </div> -->
        <div
          class="local-log-entry mb-2"
          @mouseenter="logHintVisible = true"
          @mouseleave="logHintVisible = false"
        >
          <button
            type="button"
            class="btn btn-outline-info btn-sm local-log-flag"
            @click="openLogMenuOnly"
          >
            日志
          </button>
          <div v-if="logHintVisible" class="local-log-hover-card">
            <div class="local-log-menu-item" @click="runLogActionFromHover('recent20')">
              <span class="local-log-menu-marker">▶</span>
              <span>最近20条写文件日志</span>
            </div>
            <div class="local-log-menu-item" @click="runLogActionFromHover('syncRecent20')">
              <span class="local-log-menu-marker">▶</span>
              <span>落盘日志文件并查看最近20条</span>
            </div>
            <div class="local-log-menu-item" @click="runLogActionFromHover('recent5m')">
              <span class="local-log-menu-marker">▶</span>
              <span>最近5分钟日志</span>
            </div>
            <div class="local-log-menu-item" @click="runLogActionFromHover('clear')">
              <span class="local-log-menu-marker">▶</span>
              <span>清空写文件日志</span>
            </div>
          </div>
        </div>
        <div id="divCodeTypeLst" ref="refDivCodeTypeLst"></div>
        <div>
          <div class="mb-2">
            <div>
              <span class="text-muted">本机名:</span>
              <span id="lblCurrMachine2" class="text-warning">获取中...</span>
            </div>
            <div class="mt-1">
              <span class="text-muted">生成根目录:</span>
              <span id="lblCurrRootPath2" class="text-info">获取中...</span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm ml-2"
                @click="openSetUserCodeRootPathModal"
              >
                设置用户代码根目录
              </button>
            </div>
            <div class="mt-1">
              <span class="text-muted">备份目录:</span>
              <span id="lblCurrRootPathBackup2" class="text-info">获取中...</span>
            </div>
            <div class="mt-1"><span id="lblResult" class="text-warning"></span></div>
          </div>
          <div class="mt-1">
            <span class="text-muted">写入完整路径:</span>
            <span id="lblSavedFilePath" class="text-info"></span>
          </div>
          <table class="code-info-table" style="width: 100%">
            <tr class="row-nowrap">
              <td>类名</td>
              <td>
                <input
                  id="lblClassName"
                  v-model="className"
                  type="text"
                  class="Content nowrap-input"
                  style="width: 600px; height: 24px"
                />
              </td>
              <td><span id="lblResult" class="text-warning"></span></td>
            </tr>
            <tr class="row-nowrap">
              <td>文件名</td>
              <td>
                <input
                  id="lblFileName"
                  v-model="fileName"
                  type="text"
                  class="text-info nowrap-input"
                  style="width: 600px"
                />
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>生成的代码</td>
              <td>
                <textarea
                  id="txtCodeText"
                  v-model="codeText"
                  style="width: 100%; height: 720px"
                ></textarea>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>写文件日志</td>
              <td>
                <textarea
                  id="txtLocalAccessLogs"
                  readonly
                  style="width: 100%; height: 220px"
                ></textarea>
              </td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortViewInfoBy" type="hidden" value="" />

    <div v-if="logModalVisible" class="local-log-modal-mask" @click.self="closeLogActionModal">
      <div class="local-log-modal-panel">
        <div class="local-log-modal-header">
          <span>写文件日志</span>
          <button type="button" class="btn btn-sm btn-light" @click="closeLogActionModal"
            >关闭</button
          >
        </div>
        <div class="local-log-modal-actions">
          <button
            type="button"
            class="btn btn-outline-info btn-sm"
            @click="runLogAction('recent20')"
          >
            最近20条写文件日志
          </button>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="runLogAction('syncRecent20')"
          >
            落盘日志文件并查看最近20条
          </button>
          <button
            type="button"
            class="btn btn-outline-info btn-sm"
            @click="runLogAction('recent5m')"
          >
            最近5分钟日志
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="runLogAction('clear')"
          >
            清空写文件日志
          </button>
        </div>
        <pre class="local-log-modal-content">{{ logModalContent }}</pre>
      </div>
    </div>

    <div
      v-if="setRootModalVisible"
      class="local-log-modal-mask"
      @click.self="closeSetUserCodeRootPathModal"
    >
      <div class="local-log-modal-panel">
        <div class="local-log-modal-header">
          <span>设置用户代码根目录</span>
          <button type="button" class="btn btn-sm btn-light" @click="closeSetUserCodeRootPathModal">
            关闭
          </button>
        </div>
        <div class="local-root-edit-box">
          <label for="txtSetCodeRootPath" class="mb-1">生成根目录(codePath)</label>
          <input
            id="txtSetCodeRootPath"
            v-model="setRootPathInput"
            type="text"
            class="form-control form-control-sm"
            placeholder="例如: e:/Vue3Prj/vue3AgcSpa"
          />

          <label for="txtSetCodeRootPathBackup" class="mt-2 mb-1">备份目录(codePathBackup)</label>
          <input
            id="txtSetCodeRootPathBackup"
            v-model="setRootPathBackupInput"
            type="text"
            class="form-control form-control-sm"
            placeholder="可为空"
          />

          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="confirmSetUserCodeRootPath"
            >
              一起设置
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm ml-2"
              @click="closeSetUserCodeRootPathModal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { GeneViewCodeEx } from '@/views/PrjInterface/GeneViewCodeEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    viewInfo4GC,
  } from '@/views/PrjInterface/GeneViewCodeVueShare';
  import {
    refViewMaster_Detail,
    refViewMaster_Edit,
  } from '@/views/PrjInterface/ViewMasterVueShare';
  export default defineComponent({
    name: 'GeneViewCode',
    components: {
      // 组件注册
    },
    setup() {
      const codeText = ref('');
      const fileName = ref('结果');
      const className = ref('结果');
      const strTitle = ref('界面母版维护');
      const logHintVisible = ref(false);
      const logModalVisible = ref(false);
      const logModalContent = ref('请点击上方按钮查看日志内容。');
      const setRootModalVisible = ref(false);
      const setRootPathInput = ref('');
      const setRootPathBackupInput = ref('');

      const refDivList_Show = ref();
      const refDivFunction_Show = ref();
      const refDivQuery_Show = ref();

      const refDivEdit_Show = ref();
      const refDivDetail_Show = ref();
      const refDivExcelExport_Show = ref();
      const refDivCodeTypeLst = ref();
      refDivCodeTypeLst;
      onMounted(() => {
        GeneViewCodeEx.divFeature = refDivFunction_Show.value;
        GeneViewCodeEx.divQuery = refDivQuery_Show.value;
        GeneViewCodeEx.divList = refDivList_Show.value;

        GeneViewCodeEx.divEdit = refDivEdit_Show.value;
        GeneViewCodeEx.divDetail = refDivDetail_Show.value;
        GeneViewCodeEx.divExcelExport = refDivExcelExport_Show.value;
        GeneViewCodeEx.divCodeTypeLst = refDivCodeTypeLst.value;

        const objPage = new GeneViewCodeEx();
        objPage.PageLoadCache();
      });

      function showRecentWriteLogs20() {
        GeneViewCodeEx.ShowRecentWriteLogsByCountOnPage(20);
      }

      async function showRecentWriteLogs20AndSyncFile() {
        const strTrace = `[GeneViewCode.vue] showRecentWriteLogs20AndSyncFile clicked at ${new Date().toISOString()}`;
        console.error(strTrace);

        const txtLocalAccessLogs = document.getElementById('txtLocalAccessLogs');
        if (txtLocalAccessLogs instanceof HTMLTextAreaElement) {
          txtLocalAccessLogs.value = `${strTrace}\n${txtLocalAccessLogs.value ?? ''}`;
        }

        try {
          await GeneViewCodeEx.ShowRecentWriteLogsByCountOnPageAndSyncFile(20);
        } catch (e: any) {
          const strErrMsg = e?.message ?? String(e);
          const strErrTrace = `[GeneViewCode.vue] showRecentWriteLogs20AndSyncFile failed: ${strErrMsg}`;
          console.error(strErrTrace);
          if (txtLocalAccessLogs instanceof HTMLTextAreaElement) {
            txtLocalAccessLogs.value = `${strErrTrace}\n${txtLocalAccessLogs.value ?? ''}`;
          }
        }
      }

      function showRecentWriteLogs5Min() {
        GeneViewCodeEx.ShowRecentWriteLogsByMinutesOnPage(5);
      }

      function clearWriteLogs() {
        GeneViewCodeEx.ClearWriteLogsOnPage();
      }

      function openSetUserCodeRootPathModal() {
        const strCurrRootPath =
          (document.getElementById('lblCurrRootPath2') as HTMLSpanElement | null)?.innerText ?? '';
        const strCurrRootPathBackup =
          (document.getElementById('lblCurrRootPathBackup2') as HTMLSpanElement | null)
            ?.innerText ?? '';
        setRootPathInput.value = strCurrRootPath == '未配置' ? '' : strCurrRootPath;
        setRootPathBackupInput.value =
          strCurrRootPathBackup == '未配置' ? '' : strCurrRootPathBackup;
        setRootModalVisible.value = true;
      }

      function closeSetUserCodeRootPathModal() {
        setRootModalVisible.value = false;
      }

      async function confirmSetUserCodeRootPath() {
        const objSetResult = await GeneViewCodeEx.SetUserCodeRootPathFromPage(
          setRootPathInput.value,
          setRootPathBackupInput.value,
        );
        alert(objSetResult.msg);
        if (objSetResult.isSuccess == true) {
          setRootModalVisible.value = false;
        }
      }

      function syncLogModalContentFromTextArea() {
        const txtLocalAccessLogs = document.getElementById('txtLocalAccessLogs');
        if (txtLocalAccessLogs instanceof HTMLTextAreaElement) {
          logModalContent.value = txtLocalAccessLogs.value?.trim() || '(无日志内容)';
          return;
        }
        logModalContent.value = '(日志显示框不存在)';
      }

      function openLogMenuOnly() {
        logHintVisible.value = true;
        logModalVisible.value = false;
      }

      function closeLogActionModal() {
        logModalVisible.value = false;
      }

      async function runLogAction(strAction: 'recent20' | 'syncRecent20' | 'recent5m' | 'clear') {
        try {
          switch (strAction) {
            case 'recent20':
              showRecentWriteLogs20();
              break;
            case 'syncRecent20':
              await showRecentWriteLogs20AndSyncFile();
              break;
            case 'recent5m':
              showRecentWriteLogs5Min();
              break;
            case 'clear':
              clearWriteLogs();
              break;
          }
          syncLogModalContentFromTextArea();
        } catch (e: any) {
          const strErrMsg = e?.message ?? String(e);
          logModalContent.value = `操作失败: ${strErrMsg}`;
        }
      }

      async function runLogActionFromHover(
        strAction: 'recent20' | 'syncRecent20' | 'recent5m' | 'clear',
      ) {
        logHintVisible.value = false;
        logModalVisible.value = true;
        logModalContent.value = '处理中...';
        await runLogAction(strAction);
      }

      function testTabRef() {
        alert('testTabRef');
        //        return GeneViewCodeEx.viewInfo4GC;
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
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
        // GeneViewCodeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDivQuery_Show,
        refDivFunction_Show,
        refDivList_Show,
        refDivEdit_Show,
        refDivDetail_Show,
        refDivExcelExport_Show,
        refDivCodeTypeLst,
        refViewMaster_Edit,
        refViewMaster_Detail,
        viewInfo4GC,
        codeText,
        fileName,
        className,
        showRecentWriteLogs20,
        showRecentWriteLogs20AndSyncFile,
        showRecentWriteLogs5Min,
        clearWriteLogs,
        setRootModalVisible,
        setRootPathInput,
        setRootPathBackupInput,
        openSetUserCodeRootPathModal,
        closeSetUserCodeRootPathModal,
        confirmSetUserCodeRootPath,
        logHintVisible,
        logModalVisible,
        logModalContent,
        openLogMenuOnly,
        closeLogActionModal,
        runLogAction,
        runLogActionFromHover,
        testTabRef,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>

<style>
  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }

  .code-info-table .row-nowrap td {
    white-space: nowrap;
  }

  .nowrap-input {
    white-space: nowrap;
  }

  .local-root-box {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 8px 0;
  }

  .local-root-input {
    flex: 1;
    min-width: 220px;
  }

  .local-root-edit-box {
    padding: 12px;
  }

  .local-log-entry {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .local-log-flag {
    min-width: 52px;
  }

  .local-log-hover-card {
    position: absolute;
    top: 34px;
    left: 0;
    z-index: 1060;
    min-width: 260px;
    padding: 8px 10px;
    background: #fff;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    color: #2f3a4a;
    line-height: 1.6;
    font-size: 12px;
  }

  .local-log-menu-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
  }

  .local-log-menu-item:hover {
    background: #f1f7ff;
  }

  .local-log-menu-marker {
    width: 14px;
    color: #0b6ea8;
    opacity: 0;
    font-size: 11px;
  }

  .local-log-menu-item:hover .local-log-menu-marker {
    opacity: 1;
  }

  .local-log-modal-mask {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  .local-log-modal-panel {
    width: min(920px, 96vw);
    max-height: 88vh;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
  }

  .local-log-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid #e9ecef;
    font-weight: 600;
  }

  .local-log-modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid #e9ecef;
  }

  .local-log-modal-content {
    margin: 0;
    padding: 12px;
    white-space: pre-wrap;
    overflow: auto;
    font-size: 12px;
    line-height: 1.5;
    background: #f8fafc;
    color: #1f2d3d;
    flex: 1;
  }
</style>

<!-- 
<script>


    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/PrjInterface/GeneViewCodeEx.js"], function (viewinfo) {
            viewinfo.GeneViewCodeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }

    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/PrjInterface/GeneViewCodeEx.js"], function (viewinfo) {
            var objPage = new viewinfo.GeneViewCodeEx();
            objPage.Page_LoadCache();
        });
    }


</script> -->
