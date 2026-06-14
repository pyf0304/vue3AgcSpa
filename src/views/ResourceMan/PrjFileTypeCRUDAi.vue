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
          <label id="lblPrjFileTypeList" class="col-form-label text-info" style="width: 250px"
            >工程文件类型列表</label
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
      <PrjFileType_ListCom
        ref="refPrjFileType_List"
        :items="dataListPrjFileType"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortPrjFileTypeBy" type="hidden" />
    </div>

    <PrjFileType_EditCom ref="refPrjFileType_Edit" />
    <PrjFileType_DetailCom ref="refPrjFileType_DetailAi" />
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
    refPrjFileType_Edit,
    refPrjFileType_DetailAi,
    refPrjFileType_List,
    showErrorMessage,
    dataListPrjFileType,
    emptyRecNumInfo,
    dataColumn,
    prjFileTypeId_q,
    prjFileTypeName_q,
  } from '@/views/ResourceMan/PrjFileTypeVueShare';

  import PrjFileType_EditCom from '@/views/ResourceMan/PrjFileType_EditAi.vue';

  import PrjFileType_DetailCom from '@/views/ResourceMan/PrjFileType_DetailAi.vue';
  import PrjFileType_ListCom from '@/views/ResourceMan/PrjFileType_ListAiBak.vue';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import PrjFileTypeCRUDAiEx from '@/views/ResourceMan/PrjFileTypeCRUDAiEx';
  import { PrjFileTypeKey } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    PrjFileTypeQueryFieldSpecAi,
  } from '@/viewsBase/ResourceMan/PrjFileTypeCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    PrjFileTypeCommandIdAi,
    PrjFileTypeCommandSpecAi,
  } from '@/viewsBase/ResourceMan/PrjFileTypeCRUDAiCommands';

  export default defineComponent({
    name: 'PrjFileTypeCRUDAi',
    components: {
      PrjFileType_EditCom,

      PrjFileType_DetailCom,
      PrjFileType_ListCom,
    },

    setup() {
      /*__VIEW_VARIABLES_INIT_CODE__*/

      const strTitle = ref('工程文件类型维护(Ai版-命令Schema)');
      const objPage = ref<PrjFileTypeCRUDAiEx>();

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<PrjFileTypeQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<PrjFileTypeQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<PrjFileTypeCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<PrjFileTypeCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): PrjFileTypeCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: PrjFileTypeQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'prjFileTypeId_q':
            return prjFileTypeId_q.value;
          case 'prjFileTypeName_q':
            return prjFileTypeName_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: PrjFileTypeQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'prjFileTypeId_q':
            prjFileTypeId_q.value = value;
            break;
          case 'prjFileTypeName_q':
            prjFileTypeName_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: string) => {
        console.log('getSelectOptions optionsKey:', optionsKey);
        return [];
      };

      const getSelectValue = (item: any, optionsKey?: string) => {
        console.log('getSelectValue optionsKey:', optionsKey, 'item:', item);
        return '';
      };

      const getSelectText = (item: any, optionsKey?: string) => {
        console.log('getSelectValue optionsKey:', optionsKey, 'item:', item);
        return '';
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

      const updateAuxControlValue = (commandId: PrjFileTypeCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;
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
      const runCommand = async (commandId: PrjFileTypeCommandIdAi) => {
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

      function btn_Click(strCommandName: string, key: PrjFileTypeKey | null) {
        PrjFileTypeCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          prjFileTypeId_q,
          prjFileTypeName_q,
        });

        const queryOptions = await loadQueryOptionsAi();

        PrjFileTypeCRUDAiEx.vuebtn_Click = btn_Click;
        PrjFileTypeCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new PrjFileTypeCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editPrjFileType', params: { prjFileTypeId: data.prjFileTypeId } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refPrjFileType_Edit,

        refPrjFileType_DetailAi,
        refPrjFileType_List,
        showErrorMessage,
        dataListPrjFileType,
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
