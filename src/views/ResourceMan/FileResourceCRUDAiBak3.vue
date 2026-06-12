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
              <select
                v-if="cmd.auxControlType === 'select4Bool'"
                :id="cmd.auxControlId"
                class="form-control form-control-sm"
                style="width: 100px"
                :value="auxControlValues[cmd.id]"
                @change="updateAuxControlValue(cmd.id, ($event.target as HTMLSelectElement).value)"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option>
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
              <button :id="cmd.elementId" :class="cmd.btnClass" @click="runCommand(cmd.id)">
                {{ cmd.text }}
              </button>
            </div>
          </template>
          <button v-else :id="cmd.elementId" :class="cmd.btnClass" @click="runCommand(cmd.id)">
            {{ cmd.text }}
          </button>
        </li>
      </ul>
    </div>

    <div id="divList" ref="refDivList" class="div_List">
      <FileResource_ListCom
        ref="refFileResource_List"
        :items="dataListFileResource"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
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
  import { defineComponent, onMounted, ref, reactive } from 'vue';
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
    prjFileTypeId_f,
    PrjId_Session,
    ProgLangTypeId_Static,
    CmPrjId_Local,
  } from '@/views/ResourceMan/FileResourceVueShare';

  import FileResource_EditCom from '@/views/ResourceMan/FileResource_EditAi.vue';

  import FileResource_DetailCom from '@/views/ResourceMan/FileResource_DetailAi.vue';
  import FileResource_ListCom from '@/views/ResourceMan/FileResource_ListAi.vue';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsPrjFileTypeEN } from '@/ts/L0Entity/GeneCode/clsPrjFileTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import FileResourceCRUDAiEx from '@/views/ResourceMan/FileResourceCRUDAiEx';
  import { FileResourceKey } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    FileResourceQueryFieldSpecAi,
  } from '@/viewsBase/ResourceMan/FileResourceCRUDAiQuery';
  import {
    loadFeatureOptionsAi,
    getFeatureCommandsAi,
    getQueryCommandsAi,
    FileResourceCommandIdAi,
    FileResourceCommandSpecAi,
  } from '@/viewsBase/ResourceMan/FileResourceCRUDAiCommands';

  export default defineComponent({
    name: 'FileResourceCRUDAi',
    components: {
      FileResource_EditCom,

      FileResource_DetailCom,
      FileResource_ListCom,
    },

    setup() {
      PrjId_Session.value = '';
      ProgLangTypeId_Static.value = '09';
      CmPrjId_Local.value = '';

      const strTitle = ref('文件资源维护(Ai版-命令Schema)');
      const objPage = ref<FileResourceCRUDAiEx>();
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrPrjFileType = ref<clsPrjFileTypeEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<FileResourceQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<FileResourceQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<FileResourceCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<FileResourceCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): FileResourceCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: FileResourceQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'codeTypeId_q':
            return codeTypeId_q.value;
          case 'prjFileTypeId_q':
            return prjFileTypeId_q.value;
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
            break;
          case 'prjFileTypeId_q':
            prjFileTypeId_q.value = value;
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
            break;
          case 'cmPrjId_q':
            cmPrjId_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (
        optionsKey?: 'codeTypeId_q' | 'prjFileTypeId_q' | 'tabId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return arrvCodeType_Sim.value ?? [];
          case 'prjFileTypeId_q':
            return arrPrjFileType.value ?? [];
          case 'tabId_q':
            return arrvPrjTab_Sim.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (
        item: any,
        optionsKey?: 'codeTypeId_q' | 'prjFileTypeId_q' | 'tabId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return item.codeTypeId;
          case 'prjFileTypeId_q':
            return item.prjFileTypeId;
          case 'tabId_q':
            return item.tabId;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?: 'codeTypeId_q' | 'prjFileTypeId_q' | 'tabId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'codeTypeId_q':
            return item.codeTypeName;
          case 'prjFileTypeId_q':
            return item.prjFileTypeName;
          case 'tabId_q':
            return item.tabName;
          default:
            return '';
        }
      };

      const getSelectOptionsInFeature = (optionsKey?: 'prjFileTypeId_f' | string) => {
        switch (optionsKey) {
          case 'prjFileTypeId_f':
            return arrPrjFileType.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValueInFeature = (item: any, optionsKey?: 'prjFileTypeId_f' | string) => {
        switch (optionsKey) {
          case 'prjFileTypeId_f':
            return item.prjFileTypeId;
          default:
            return '';
        }
      };

      const getSelectTextInFeature = (item: any, optionsKey?: 'prjFileTypeId_f' | string) => {
        switch (optionsKey) {
          case 'prjFileTypeId_f':
            return item.prjFileTypeName;
          default:
            return '';
        }
      };

      const updateAuxControlValue = (commandId: FileResourceCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;

        const command = featureCommands.value.find((x) => x.id === commandId);
        if (command && command.fieldNameCamel) {
          switch (command.fieldNameCamel) {
            case 'prjFileTypeId':
              prjFileTypeId_f.value = value;
              break;
            default:
              break;
          }
        }
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

        const result = await page.executeCommand(commandId);
        if (commandId === 'export' && result != null) {
          const data = result as ExportExcelData;
          if (data.sheetName === '') {
            alert('获取导出数据出错,请检查!');
            return;
          }
          exportToExcel(data.arrObjLst, data.sheetName, data.fileName);
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
        arrPrjFileType.value = queryOptions.arrPrjFileType;
        arrvPrjTab_Sim.value = queryOptions.arrvPrjTab_Sim;

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        arrPrjFileType.value = featureOptions.arrPrjFileType;
        prjFileTypeId_f.value = '0';

        featureCommands.value.forEach((cmd) => {
          if (cmd.needAuxControl) {
            auxControlValues[cmd.id] = '0';
          }
        });

        FileResourceCRUDAiEx.vuebtn_Click = btn_Click;
        FileResourceCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new FileResourceCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editFileResource', params: { fileResourceId: data.fileResourceId } });
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
        runCommand,
        EditTabRelaInfo,
        SortColumn,
      };
    },
  });
</script>

<style scoped></style>
