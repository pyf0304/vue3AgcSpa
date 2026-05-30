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
          <label
            id="lblGCConstantPrjIdRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC常量工程关系列表</label
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
                  v-for="(item, index) in getSelectOptions(cmd.auxControlOptionsKey)"
                  :key="index"
                  :value="getSelectValue(item, cmd.auxControlOptionsKey)"
                >
                  {{ getSelectText(item, cmd.auxControlOptionsKey) }}
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
      <GCConstantPrjIdRela_ListCom
        ref="refGCConstantPrjIdRela_List"
        :items="dataListGCConstantPrjIdRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortGCConstantPrjIdRelaBy" type="hidden" />
    </div>

    <GCConstantPrjIdRela_EditCom ref="refGCConstantPrjIdRela_Edit" />
    <GCConstantPrjIdRela_DetailCom ref="refGCConstantPrjIdRela_DetailAi" />
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
    refGCConstantPrjIdRela_Edit,
    refGCConstantPrjIdRela_DetailAi,
    refGCConstantPrjIdRela_List,
    showErrorMessage,
    dataListGCConstantPrjIdRela,
    emptyRecNumInfo,
    dataColumn,
    prjId_q,
    dataTypeId_q,
    constName_q,
    constId_q,
    PrjId_Session,
  } from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';

  import GCConstantPrjIdRela_EditCom from '@/views/GeneCode/GCConstantPrjIdRela_EditAi.vue';

  import GCConstantPrjIdRela_DetailCom from '@/views/GeneCode/GCConstantPrjIdRela_DetailAi.vue';
  import GCConstantPrjIdRela_ListCom from '@/views/GeneCode/GCConstantPrjIdRela_ListAi.vue';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import GCConstantPrjIdRelaCRUDAiEx from '@/views/GeneCode/GCConstantPrjIdRelaCRUDAiEx';
  import { GCConstantPrjIdRelaKey } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    GCConstantPrjIdRelaQueryFieldSpecAi,
  } from '@/viewsBase/GeneCode/GCConstantPrjIdRelaCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    GCConstantPrjIdRelaCommandIdAi,
    GCConstantPrjIdRelaCommandSpecAi,
  } from '@/viewsBase/GeneCode/GCConstantPrjIdRelaCRUDAiCommands';

  export default defineComponent({
    name: 'GCConstantPrjIdRelaCRUDAi',
    components: {
      GCConstantPrjIdRela_EditCom,

      GCConstantPrjIdRela_DetailCom,
      GCConstantPrjIdRela_ListCom,
    },

    setup() {
      PrjId_Session.value = '0005';

      const strTitle = ref('GC常量工程关系维护(Ai版-命令Schema)');
      const objPage = ref<GCConstantPrjIdRelaCRUDAiEx>();
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);
      const arrGCDefaConstants = ref<clsGCDefaConstantsEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<GCConstantPrjIdRelaQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<GCConstantPrjIdRelaQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<GCConstantPrjIdRelaCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<GCConstantPrjIdRelaCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): GCConstantPrjIdRelaCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: GCConstantPrjIdRelaQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'prjId_q':
            return prjId_q.value;
          case 'dataTypeId_q':
            return dataTypeId_q.value;
          case 'constName_q':
            return constName_q.value;
          case 'constId_q':
            return constId_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: GCConstantPrjIdRelaQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'prjId_q':
            prjId_q.value = value;
            break;
          case 'dataTypeId_q':
            dataTypeId_q.value = value;
            break;
          case 'constName_q':
            constName_q.value = value;
            break;
          case 'constId_q':
            constId_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: 'dataTypeAbbr' | 'gCDefaConstants' | string) => {
        switch (optionsKey) {
          case 'dataTypeAbbr':
            return arrDataTypeAbbr.value ?? [];
          case 'gCDefaConstants':
            return arrGCDefaConstants.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (
        item: any,
        optionsKey?: 'dataTypeAbbr' | 'gCDefaConstants' | string,
      ) => {
        switch (optionsKey) {
          case 'dataTypeAbbr':
            return item.dataTypeId;
          case 'gCDefaConstants':
            return item.constId;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?: 'dataTypeAbbr' | 'gCDefaConstants' | string,
      ) => {
        switch (optionsKey) {
          case 'dataTypeAbbr':
            return item.dataTypeName;
          case 'gCDefaConstants':
            return item.constName;
          default:
            return '';
        }
      };

      const updateAuxControlValue = (commandId: GCConstantPrjIdRelaCommandIdAi, value: string) => {
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

      const runCommand = async (commandId: GCConstantPrjIdRelaCommandIdAi) => {
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

      function btn_Click(strCommandName: string, key: GCConstantPrjIdRelaKey | null) {
        GCConstantPrjIdRelaCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          prjId_q,
          dataTypeId_q,
          constName_q,
          constId_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrDataTypeAbbr.value = queryOptions.arrDataTypeAbbr;
        arrGCDefaConstants.value = queryOptions.arrGCDefaConstants;

        GCConstantPrjIdRelaCRUDAiEx.vuebtn_Click = btn_Click;
        GCConstantPrjIdRelaCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new GCConstantPrjIdRelaCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editGCConstantPrjIdRela', params: { constId: data.constId } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refGCConstantPrjIdRela_Edit,

        refGCConstantPrjIdRela_DetailAi,
        refGCConstantPrjIdRela_List,
        showErrorMessage,
        dataListGCConstantPrjIdRela,
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
        updateAuxControlValue,
        runCommand,
        EditTabRelaInfo,
        SortColumn,
      };
    },
  });
</script>

<style scoped></style>
