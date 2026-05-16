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
                  v-else-if="field.controlType === 'select4Bool'"
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @change="setQueryValue(field.key, ($event.target as HTMLSelectElement).value)"
                >
                  <option value="0">选择是/否</option>
                  <option value="true">是</option>
                  <option value="false">否</option>
                </select>
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
                <input
                  v-if="field.controlType === 'text'"
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @input="setQueryValue(field.key, ($event.target as HTMLInputElement).value)"
                />
                <select
                  v-else-if="field.controlType === 'select4Bool'"
                  :id="field.id"
                  class="form-control form-control-sm"
                  :style="{ width: field.width + 'px' }"
                  :value="getQueryValue(field.key)"
                  @change="setQueryValue(field.key, ($event.target as HTMLSelectElement).value)"
                >
                  <option value="0">选择是/否</option>
                  <option value="true">是</option>
                  <option value="false">否</option>
                </select>
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
            id="lblFunctionTemplateRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数与模板关系列表</label
          >
        </li>
        <li v-for="cmd in featureCommands" :key="cmd.id" class="nav-item ml-3">
          <button :id="cmd.elementId" :class="cmd.btnClass" @click="runCommand(cmd.id)">
            {{ cmd.text }}
          </button>
        </li>
      </ul>
    </div>

    <div id="divList" ref="refDivList" class="div_List">
      <FunctionTemplateRela_ListCom
        ref="refFunctionTemplateRela_List"
        :items="dataListFunctionTemplateRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortFunctionTemplateRelaBy" type="hidden" />
    </div>

    <FunctionTemplateRela_EditCom ref="refFunctionTemplateRela_Edit" />
    <FunctionTemplateRela_DetailCom ref="refFunctionTemplateRela_Detail" />
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunctionTemplateRela_Edit,
    refFunctionTemplateRela_Detail,
    refFunctionTemplateRela_List,
    showErrorMessage,
    dataListFunctionTemplateRela,
    emptyRecNumInfo,
    dataColumn,
    functionTemplateId_q,
    regionTypeId_q,
    codeTypeId_q,
    funcId4GC_q,
    isGeneCode_q,
    functionTemplateId_f,
  } from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
  import FunctionTemplateRela_EditCom from '@/views/PrjFunction/FunctionTemplateRela_Edit.vue';
  import FunctionTemplateRela_DetailCom from '@/views/PrjFunction/FunctionTemplateRela_Detail.vue';
  import FunctionTemplateRela_ListCom from '@/views/PrjFunction/FunctionTemplateRela_ListAi.vue';

  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import FunctionTemplateRelaCRUDExAi from '@/views/PrjFunction/FunctionTemplateRelaCRUDExAi';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadFeatureOptionsAi,
    loadQueryOptionsAi,
    FunctionTemplateRelaQueryFieldSpecAi,
  } from '@/viewsBase/PrjFunction/FunctionTemplateRelaCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    FunctionTemplateRelaCommandIdAi,
    FunctionTemplateRelaCommandSpecAi,
  } from '@/viewsBase/PrjFunction/FunctionTemplateRelaCRUDAiCommands';

  export default defineComponent({
    name: 'FunctionTemplateRelaCRUDAi',
    components: {
      FunctionTemplateRela_EditCom,
      FunctionTemplateRela_DetailCom,
      FunctionTemplateRela_ListCom,
    },
    setup() {
      const strTitle = ref('函数与模板关系维护(Ai4版-命令Schema)');
      const objPage = ref<FunctionTemplateRelaCRUDExAi>();
      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrFunction4GeneCode = ref<clsFunction4GeneCodeEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<FunctionTemplateRelaQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<FunctionTemplateRelaQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<FunctionTemplateRelaCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<FunctionTemplateRelaCommandSpecAi>>(getFeatureCommandsAi());

      const ensurePage = (): FunctionTemplateRelaCRUDExAi | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: FunctionTemplateRelaQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'functionTemplateId_q':
            return functionTemplateId_q.value;
          case 'regionTypeId_q':
            return regionTypeId_q.value;
          case 'codeTypeId_q':
            return codeTypeId_q.value;
          case 'funcId4GC_q':
            return funcId4GC_q.value;
          case 'isGeneCode_q':
            return isGeneCode_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: FunctionTemplateRelaQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'functionTemplateId_q':
            functionTemplateId_q.value = value;
            break;
          case 'regionTypeId_q':
            regionTypeId_q.value = value;
            break;
          case 'codeTypeId_q':
            codeTypeId_q.value = value;
            break;
          case 'funcId4GC_q':
            funcId4GC_q.value = value;
            break;
          case 'isGeneCode_q':
            isGeneCode_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (
        optionsKey?: 'functionTemplate' | 'regionType' | 'vCodeType_Sim' | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return arrFunctionTemplate.value ?? [];
          case 'regionType':
            return arrRegionType.value ?? [];
          case 'vCodeType_Sim':
            return arrvCodeType_Sim.value ?? [];
          case 'function4GeneCode':
            return arrFunction4GeneCode.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (
        item: any,
        optionsKey?: 'functionTemplate' | 'regionType' | 'vCodeType_Sim' | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return item.functionTemplateId;
          case 'regionType':
            return item.regionTypeId;
          case 'vCodeType_Sim':
            return item.vCodeType_SimId;
          case 'function4GeneCode':
            return item.function4GeneCodeId;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?: 'functionTemplate' | 'regionType' | 'vCodeType_Sim' | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return item.functionTemplateName;
          case 'regionType':
            return item.regionTypeName;
          case 'vCodeType_Sim':
            return item.vCodeType_SimName;
          case 'function4GeneCode':
            return item.function4GeneCodeName;
          default:
            return '';
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

      const runCommand = async (commandId: FunctionTemplateRelaCommandIdAi) => {
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

      function btn_Click(strCommandName: string, strKeyId: string) {
        FunctionTemplateRelaCRUDExAi.btn_Click(strCommandName, strKeyId);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          functionTemplateId_q,
          regionTypeId_q,
          codeTypeId_q,
          funcId4GC_q,
          isGeneCode_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrFunctionTemplate.value = queryOptions.arrFunctionTemplate;
        arrRegionType.value = queryOptions.arrRegionType;
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;
        arrFunction4GeneCode.value = queryOptions.arrFunction4GeneCode;

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        functionTemplateId_f.value = '0';

        FunctionTemplateRelaCRUDExAi.vuebtn_Click = btn_Click;
        FunctionTemplateRelaCRUDExAi.GetPropValue = GetPropValue;
        objPage.value = new FunctionTemplateRelaCRUDExAi();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editFunctionTemplateRela', params: { mId: data.mId } });
      };

      return {
        showErrorMessage,
        dataListFunctionTemplateRela,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refFunctionTemplateRela_Edit,
        refFunctionTemplateRela_Detail,
        refFunctionTemplateRela_List,
        functionTemplateId_f,

        arrFunctionTemplate,
        arrRegionType,
        arrvCodeType_Sim,
        arrFunction4GeneCode,
        queryRow1,
        queryRow2,
        queryCommands,
        featureCommands,
        getQueryValue,
        setQueryValue,
        getSelectOptions,
        getSelectValue,
        getSelectText,
        runCommand,
        SortColumn,
        EditTabRelaInfo,
      };
    },
  });
</script>

<style scoped=""></style>
