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
            <template v-for="field in queryRow1" :key="field.key">
              <td class="text-right">
                <label class="col-form-label text-right" style="width: 90px">
                  {{ field.label }}
                </label>
              </td>
              <td class="text-left">
                <input
                  v-if="field.controlType === 'text'"
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @input="setQueryValue(field.key, ($event.target as HTMLInputElement).value)"
                />
                <select
                  v-else
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @change="setQueryValue(field.key, ($event.target as HTMLSelectElement).value)"
                >
                  <option
                    v-for="(item, index) in getSelectOptions(field.optionsKey)"
                    :key="index"
                    :value="getSelectValue(item, field.optionsKey)"
                  >
                    {{ getSelectText(item, field.optionsKey) }}
                  </option>
                </select>
              </td>
            </template>
          </tr>
          <tr>
            <template v-for="field in queryRow2" :key="field.key">
              <td class="text-right">
                <label class="col-form-label text-right" style="width: 90px">
                  {{ field.label }}
                </label>
              </td>
              <td class="text-left">
                <select
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @change="setQueryValue(field.key, ($event.target as HTMLSelectElement).value)"
                >
                  <option
                    v-for="(item, index) in getSelectOptions(field.optionsKey)"
                    :key="index"
                    :value="getSelectValue(item, field.optionsKey)"
                  >
                    {{ getSelectText(item, field.optionsKey) }}
                  </option>
                </select>
              </td>
            </template>
            <td v-for="cmd in queryCommands" :key="cmd.id" class="text-left">
              <button
                :id="cmd.elementId"
                type="button"
                :class="cmd.btnClass"
                @click="runCommand(cmd.id)"
              >
                {{ cmd.text }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblFileResourceList" class="col-form-label text-info" style="width: 250px"
            >文件资源列表</label
          >
        </li>
        <li v-for="cmd in featureCommands" :key="cmd.id" class="nav-item ml-3">
          <template v-if="cmd.needAuxControl">
            <div class="btn-group" role="group" :aria-label="cmd.text">
              <span v-if="cmd.auxControlLabel" class="mr-2 align-self-center text-muted small">
                {{ cmd.auxControlLabel }}
              </span>
              <select
                v-if="cmd.auxControlType === 'select4Bool'"
                :id="cmd.auxControlId"
                class="form-control form-control-sm"
                style="width: 100px"
                :value="auxControlValues[cmd.id]"
                @change="updateAuxControlValue(cmd.id, ($event.target as HTMLSelectElement).value)"
              >
                <template v-if="cmd.id === 'identifyFileType'">
                  <option value="false">全部记录</option>
                  <option value="true">仅未设置</option>
                </template>
                <template v-else>
                  <option value="0">选择是/否</option>
                  <option value="true">是</option>
                  <option value="false">否</option>
                </template>
              </select>
              <select
                v-else
                :id="cmd.auxControlId"
                class="form-control form-control-sm"
                style="width: 150px"
                :value="auxControlValues[cmd.id]"
                @change="updateAuxControlValue(cmd.id, ($event.target as HTMLSelectElement).value)"
              >
                <option
                  v-for="(item, index) in getSelectOptionsInFeature(cmd.auxControlOptionsKey)"
                  :key="index"
                  :value="getSelectValueInFeature(item, cmd.auxControlOptionsKey)"
                >
                  {{ getSelectTextInFeature(item, cmd.auxControlOptionsKey) }}
                </option>
              </select>
              <button
                :id="cmd.elementId"
                :class="cmd.btnClass"
                :disabled="isCommandDisabled(cmd.id)"
                @click="runCommand(cmd.id)"
              >
                {{ getCommandText(cmd) }}
              </button>
            </div>
          </template>
          <button
            v-else
            :id="cmd.elementId"
            :class="cmd.btnClass"
            :disabled="isCommandDisabled(cmd.id)"
            @click="runCommand(cmd.id)"
          >
            {{ getCommandText(cmd) }}
          </button>
        </li>
      </ul>
      <div class="current-root-path-bar">
        <label class="current-root-path-label" for="ddlCurrentApplicationType">应用类型：</label>
        <select
          id="ddlCurrentApplicationType"
          class="form-control form-control-sm current-root-path-select"
          :value="selectedApplicationTypeId"
          @change="onApplicationTypeChange(($event.target as HTMLSelectElement).value)"
        >
          <option
            v-for="item in arrApplicationTypeOptions"
            :key="item.applicationTypeId"
            :value="item.applicationTypeId"
          >
            {{ item.applicationTypeName }}
          </option>
        </select>
        <span class="current-root-path-label">当前根目录：</span>
        <span class="current-root-path-value">{{ currentRootDirDisplay }}</span>
      </div>
    </div>

    <div id="divList" ref="refDivList" class="div_List">
      <FileResource_ListCom
        ref="refFileResource_List"
        :items="dataListFileResource"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        :current-root-dir="currentRootDir"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortFileResourceBy" type="hidden" />
    </div>

    <FileResource_EditCom ref="refFileResource_Edit" />
    <FileResource_DetailCom ref="refFileResource_DetailAi" />
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref, reactive, computed } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFileResource_Edit,
    refFileResource_DetailAi,
    refFileResource_List,
    showErrorMessage,
    dataListFileResource,
    emptyRecNumInfo,
    dataColumn,
    codeTypeId_q,
    fileDirName_q,
    fileName_q,
    extension_q,
    tabId_q,
    isBelongsCurrCMPrj_q,
    isGeneCode_q,
    isCanDel_q,
    inUse_q,
    isExistFile_q,
    prjId_q,
    cmPrjId_q,
    PrjId_Session,
    ProgLangTypeId_Static,
    CmPrjId_Local,
    prjFileTypeId_q,
  } from '@/views/ResourceMan/FileResourceVueShare';

  import FileResource_EditCom from '@/views/ResourceMan/FileResource_EditAi.vue';

  import FileResource_DetailCom from '@/views/ResourceMan/FileResource_DetailAi.vue';
  import FileResource_ListCom from '@/views/ResourceMan/FileResource_ListAi.vue';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import FileResourceCRUDAiEx from '@/views/ResourceMan/FileResourceCRUDAiExBak';
  import { FileResourceKey } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    FileResourceQueryFieldSpecAi,
  } from '@/viewsBase/ResourceMan/FileResourceCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    FileResourceCommandIdAi,
    FileResourceCommandSpecAi,
  } from '@/viewsBase/ResourceMan/FileResourceCRUDAiCommandsBak';
  import { FileResourceEx_GetCodeTypeIdList } from '@/ts/L3ForWApiEx/ResourceMan/clsFileResourceExWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { useUserStore } from '@/store/modulesShare/user';
  import { useUserCodeRootPathStore } from '@/store/modules/userCodeRootPath';
  import { useCMProjectAppRelaStore } from '@/store/modules/CMProjectAppRela';
  import { useApplicationTypeStore } from '@/store/modules/ApplicationType';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

  export default defineComponent({
    name: 'FileResourceCRUDAi',
    components: {
      FileResource_EditCom,

      FileResource_DetailCom,
      FileResource_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      ProgLangTypeId_Static.value = '09';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const userStore = useUserStore();
      const userCodeRootPathStore = useUserCodeRootPathStore();
      const cmProjectAppRelaStore = useCMProjectAppRelaStore();
      const applicationTypeStore = useApplicationTypeStore();
      const strTitle = ref('文件资源维护(Ai版-命令Schema)');
      const objPage = ref<FileResourceCRUDAiEx>();
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrApplicationTypeOptions = ref<
        Array<{
          applicationTypeId: string;
          applicationTypeName: string;
        }>
      >([]);
      const selectedApplicationTypeId = ref('0');
      const currentRootDir = ref('');
      const isCurrentRootDirLoading = ref(false);

      const getApplicationTypeStorageKey = () => {
        const strUserId = userStore.getUserId || 'anonymous';
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId || 'default';
        return `FileResourceCRUDAi_SelectedApplicationType_${strUserId}_${strCmPrjId}`;
      };

      const saveSelectedApplicationTypeId = (strApplicationTypeId: string) => {
        localStorage.setItem(getApplicationTypeStorageKey(), strApplicationTypeId);
      };

      const readSelectedApplicationTypeId = (): string => {
        return localStorage.getItem(getApplicationTypeStorageKey()) ?? '';
      };

      const currentRootDirDisplay = computed(() => {
        if (isCurrentRootDirLoading.value == true) return '加载中...';
        if (IsNullOrEmpty(currentRootDir.value) == true) return '未获取到';
        return currentRootDir.value;
      });

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<FileResourceQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<FileResourceQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<FileResourceCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<FileResourceCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});
      const isIdentifyFileTypeRunning = ref(false);

      const ensurePage = (): FileResourceCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const pickDisplayRootPath = (objPath: {
        codePath?: string;
        codePathBackup?: string;
      }): string => {
        const strCodePath = objPath.codePath ?? '';
        if (IsNullOrEmpty(strCodePath) == false) return strCodePath;
        const strCodePathBackup = objPath.codePathBackup ?? '';
        if (IsNullOrEmpty(strCodePathBackup) == false) return strCodePathBackup;
        return '';
      };

      const loadCurrentRootDir = async () => {
        isCurrentRootDirLoading.value = true;
        try {
          const strUserId = userStore.getUserId;
          const strMachineName = await userStore.initMachineName();
          const strPrjId = clsPrivateSessionStorage.currSelPrjId;
          const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
          const intApplicationTypeId = Number(selectedApplicationTypeId.value || '0');

          if (
            IsNullOrEmpty(strUserId) == true ||
            IsNullOrEmpty(strMachineName) == true ||
            IsNullOrEmpty(strPrjId) == true ||
            IsNullOrEmpty(strCmPrjId) == true ||
            intApplicationTypeId <= 0
          ) {
            currentRootDir.value = '';
            return;
          }

          let strRootDir = '';
          if (IsNullOrEmpty(codeTypeId_q.value) == false && codeTypeId_q.value != '0') {
            const objCodePath = await userCodeRootPathStore.getOrFetchCodePath(
              strUserId,
              strMachineName,
              strPrjId,
              strCmPrjId,
              intApplicationTypeId,
              codeTypeId_q.value,
            );
            strRootDir = pickDisplayRootPath(objCodePath);
          }

          if (IsNullOrEmpty(strRootDir) == true) {
            const objRootPath = await userCodeRootPathStore.getOrFetch(
              strUserId,
              strMachineName,
              strPrjId,
              strCmPrjId,
              intApplicationTypeId,
            );
            strRootDir = pickDisplayRootPath(objRootPath);
          }

          currentRootDir.value = strRootDir;
        } catch (e) {
          console.warn('loadCurrentRootDir warning:', e);
          currentRootDir.value = '';
        } finally {
          isCurrentRootDirLoading.value = false;
        }
      };

      const loadApplicationTypeOptions = async () => {
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        const arrApplicationTypeId = await cmProjectAppRelaStore.getApplicationTypeIdLstByCmPrjId(
          strCmPrjId,
        );
        const arrOptions: Array<{ applicationTypeId: string; applicationTypeName: string }> = [];

        for (const intApplicationTypeId of arrApplicationTypeId) {
          const objApplicationType = await applicationTypeStore.getObj(intApplicationTypeId);
          if (objApplicationType == null) continue;
          arrOptions.push({
            applicationTypeId: objApplicationType.applicationTypeId.toString(),
            applicationTypeName: objApplicationType.applicationTypeName,
          });
        }

        if (arrOptions.length == 0) {
          const intCurrentApplicationTypeId = Number(
            clsPrivateSessionStorage.applicationTypeId || '0',
          );
          if (intCurrentApplicationTypeId > 0) {
            const objApplicationType = await applicationTypeStore.getObj(
              intCurrentApplicationTypeId,
            );
            if (objApplicationType != null) {
              arrOptions.push({
                applicationTypeId: objApplicationType.applicationTypeId.toString(),
                applicationTypeName: objApplicationType.applicationTypeName,
              });
            }
          }
        }

        arrApplicationTypeOptions.value = arrOptions;

        const strSavedApplicationTypeId = readSelectedApplicationTypeId();
        const strSessionApplicationTypeId = clsPrivateSessionStorage.applicationTypeId || '';
        const arrOptionIds = arrOptions.map((x) => x.applicationTypeId);
        let strDefaultApplicationTypeId = '';

        if (arrOptionIds.indexOf(strSavedApplicationTypeId) > -1) {
          strDefaultApplicationTypeId = strSavedApplicationTypeId;
        } else if (arrOptionIds.indexOf(strSessionApplicationTypeId) > -1) {
          strDefaultApplicationTypeId = strSessionApplicationTypeId;
        } else if (arrOptions.length > 0) {
          strDefaultApplicationTypeId = arrOptions[0].applicationTypeId;
        }

        selectedApplicationTypeId.value = IsNullOrEmpty(strDefaultApplicationTypeId)
          ? '0'
          : strDefaultApplicationTypeId;
        if (selectedApplicationTypeId.value != '0') {
          clsPrivateSessionStorage.applicationTypeId = selectedApplicationTypeId.value;
          saveSelectedApplicationTypeId(selectedApplicationTypeId.value);
        }
      };

      const onApplicationTypeChange = async (value: string) => {
        selectedApplicationTypeId.value = value;
        if (IsNullOrEmpty(value) == false && value != '0') {
          clsPrivateSessionStorage.applicationTypeId = value;
          saveSelectedApplicationTypeId(value);
        }
        await loadCurrentRootDir();
      };

      const getQueryValue = (key: FileResourceQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'codeTypeId_q':
            return codeTypeId_q.value;
          case 'fileDirName_q':
            return fileDirName_q.value;
          case 'fileName_q':
            return fileName_q.value;
          case 'extension_q':
            return extension_q.value;
          case 'tabId_q':
            return tabId_q.value;
          case 'isBelongsCurrCMPrj_q':
            return isBelongsCurrCMPrj_q.value;
          case 'isGeneCode_q':
            return isGeneCode_q.value;
          case 'isCanDel_q':
            return isCanDel_q.value;
          case 'inUse_q':
            return inUse_q.value;
          case 'isExistFile_q':
            return isExistFile_q.value;
          case 'prjId_q':
            return prjId_q.value;
          case 'cmPrjId_q':
            return cmPrjId_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: FileResourceQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'codeTypeId_q':
            codeTypeId_q.value = value;
            loadCurrentRootDir();
            break;
          case 'fileDirName_q':
            fileDirName_q.value = value;
            break;
          case 'fileName_q':
            fileName_q.value = value;
            break;
          case 'extension_q':
            extension_q.value = value;
            break;
          case 'tabId_q':
            tabId_q.value = value;
            break;
          case 'isBelongsCurrCMPrj_q':
            isBelongsCurrCMPrj_q.value = value;
            break;
          case 'isGeneCode_q':
            isGeneCode_q.value = value;
            break;
          case 'isCanDel_q':
            isCanDel_q.value = value;
            break;
          case 'inUse_q':
            inUse_q.value = value;
            break;
          case 'isExistFile_q':
            isExistFile_q.value = value;
            break;
          case 'prjId_q':
            prjId_q.value = value;
            appendMissingCodeTypeOptions();
            break;
          case 'cmPrjId_q':
            cmPrjId_q.value = value;
            appendMissingCodeTypeOptions();
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: 'codeTypeId_q' | 'tabId_q' | string) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return arrvCodeType_Sim.value ?? [];
          case 'tabId_q':
            return arrvPrjTab_Sim.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (item: any, optionsKey?: 'codeTypeId_q' | 'tabId_q' | string) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return item.codeTypeId;
          case 'tabId_q':
            return item.tabId;
          default:
            return '';
        }
      };

      const getSelectText = (item: any, optionsKey?: 'codeTypeId_q' | 'tabId_q' | string) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return item.codeTypeName;
          case 'tabId_q':
            return item.tabName;
          default:
            return '';
        }
      };

      const getSelectOptionsInFeature = (optionsKey?: string) => {
        console.log('getSelectOptionsInFeature optionsKey:', optionsKey);
        return [];
      };

      const getSelectValueInFeature = (item: any, optionsKey?: string) => {
        console.log('getSelectValueInFeature optionsKey:', optionsKey, 'item:', item);
        return '';
      };

      const getSelectTextInFeature = (item: any, optionsKey?: string) => {
        console.log('getSelectValueInFeature optionsKey:', optionsKey, 'item:', item);
        return '';
      };

      const updateAuxControlValue = (commandId: FileResourceCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;
      };

      const getCurrPrjAndCmPrjId = () => {
        const strPrjId =
          IsNullOrEmpty(prjId_q.value) == true
            ? clsPrivateSessionStorage.currSelPrjId || ''
            : prjId_q.value;
        const strCmPrjId =
          IsNullOrEmpty(cmPrjId_q.value) == true
            ? clsPrivateSessionStorage.cmPrjId || ''
            : cmPrjId_q.value;
        return {
          strPrjId,
          strCmPrjId,
        };
      };

      const appendMissingCodeTypeOptions = async () => {
        const { strPrjId, strCmPrjId } = getCurrPrjAndCmPrjId();
        if (IsNullOrEmpty(strPrjId) == true) return;

        try {
          const objResult = await FileResourceEx_GetCodeTypeIdList({
            strPrjId,
            strCmPrjId,
          });
          if (objResult.errorId != 0) {
            console.warn('GetCodeTypeIdList error:', objResult.errorMsg);
            return;
          }

          if (arrvCodeType_Sim.value == null) {
            arrvCodeType_Sim.value = [];
          }

          const setExistsCodeTypeId = new Set(
            (arrvCodeType_Sim.value ?? []).map((item) => item.codeTypeId),
          );

          const arrMissingCodeType = objResult.codeTypeIdList.filter((strCodeTypeId) => {
            if (IsNullOrEmpty(strCodeTypeId) == true) return false;
            return setExistsCodeTypeId.has(strCodeTypeId) == false;
          });

          if (arrMissingCodeType.length == 0) return;

          const arrAdditionalCodeType = await Promise.all(
            arrMissingCodeType.map(async (strCodeTypeId) => {
              let strCodeTypeName = '';
              try {
                const objCodeTypeById = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
                strCodeTypeName = objCodeTypeById?.codeTypeName ?? '';
              } catch (error) {
                console.warn('resolve codeTypeName warning:', strCodeTypeId, error);
              }

              const objCodeType = new clsvCodeType_SimEN();
              objCodeType.codeTypeId = strCodeTypeId;
              objCodeType.codeTypeName =
                IsNullOrEmpty(strCodeTypeName) == true
                  ? `${strCodeTypeId}(补齐项)`
                  : `${strCodeTypeName}(补齐项)`;
              return objCodeType;
            }),
          );
          arrAdditionalCodeType.sort((a, b) =>
            (a.codeTypeName ?? '').localeCompare(b.codeTypeName ?? ''),
          );
          arrvCodeType_Sim.value = [...(arrvCodeType_Sim.value ?? []), ...arrAdditionalCodeType];
        } catch (e) {
          console.warn('appendMissingCodeTypeOptions warning:', e);
        }
      };

      const isCommandDisabled = (commandId: FileResourceCommandIdAi): boolean => {
        if (commandId === 'identifyFileType') {
          return isIdentifyFileTypeRunning.value;
        }
        return false;
      };

      const getCommandText = (cmd: FileResourceCommandSpecAi): string => {
        if (cmd.id === 'identifyFileType' && isIdentifyFileTypeRunning.value == true) {
          return '识别中...';
        }
        return cmd.text;
      };

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
        }
      };
      const runCommand = async (commandId: FileResourceCommandIdAi) => {
        const page = ensurePage();
        if (page == null) return;

        if (commandId === 'identifyFileType' && isIdentifyFileTypeRunning.value == true) return;

        const strAuxValue = auxControlValues[commandId];
        if (commandId === 'identifyFileType') {
          isIdentifyFileTypeRunning.value = true;
        }

        try {
          const result = await page.executeCommand(commandId, strAuxValue);
          if (commandId === 'export' && result != null) {
            const data = result as ExportExcelData;
            if (data.sheetName === '') {
              alert('获取导出数据出错,请检查!');
              return;
            }
            exportToExcel(data.arrObjLst, data.sheetName, data.fileName);
          }
        } finally {
          if (commandId === 'identifyFileType') {
            isIdentifyFileTypeRunning.value = false;
          }
        }
      };

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }

      function btn_Click(strCommandName: string, key: FileResourceKey | null) {
        FileResourceCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          codeTypeId_q,
          prjFileTypeId_q,
          fileDirName_q,
          fileName_q,
          extension_q,
          tabId_q,
          isBelongsCurrCMPrj_q,
          isGeneCode_q,
          isCanDel_q,
          inUse_q,
          isExistFile_q,
          prjId_q,
          cmPrjId_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;
        arrvPrjTab_Sim.value = queryOptions.arrvPrjTab_Sim;
        await appendMissingCodeTypeOptions();
        await loadApplicationTypeOptions();

        auxControlValues.identifyFileType = 'false';

        FileResourceCRUDAiEx.vuebtn_Click = btn_Click;
        FileResourceCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new FileResourceCRUDAiEx();
        await objPage.value.PageLoadCache();
        await loadCurrentRootDir();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editFileResource', params: { fileResourceID: data.fileResourceID } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refFileResource_Edit,

        refFileResource_DetailAi,
        refFileResource_List,
        showErrorMessage,
        dataListFileResource,
        emptyRecNumInfo,
        dataColumn,
        arrApplicationTypeOptions,
        selectedApplicationTypeId,
        currentRootDir,
        currentRootDirDisplay,
        queryRow1,
        queryRow2,
        queryCommands,
        featureCommands,
        auxControlValues,
        getQueryValue,
        setQueryValue,
        getSelectOptions,
        getSelectValue,
        getSelectText,
        getSelectOptionsInFeature,
        getSelectValueInFeature,
        getSelectTextInFeature,
        updateAuxControlValue,
        isCommandDisabled,
        getCommandText,
        onApplicationTypeChange,
        runCommand,
        EditTabRelaInfo,
        SortColumn,
      };
    },
  });
</script>

<style scoped>
  .current-root-path-bar {
    padding: 4px 12px 10px;
    color: #0f5132;
    font-size: 13px;
    word-break: break-all;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .current-root-path-label {
    font-weight: 600;
  }

  .current-root-path-select {
    width: 180px;
  }

  .current-root-path-value {
    color: #495057;
  }
</style>
