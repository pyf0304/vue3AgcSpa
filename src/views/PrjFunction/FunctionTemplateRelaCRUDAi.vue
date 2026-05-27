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
    progLangTypeId_q,
    codeTypeId_q,
    funcId4GC_q,
    isGeneCode_q,
    functionTemplateId_f,
    ProgLangTypeId_Static,
    CodeTypeId_Static,
    FunctionTemplateId_Static,
  } from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
  import FunctionTemplateRela_EditCom from '@/views/PrjFunction/FunctionTemplateRela_EditAi.vue';
  import FunctionTemplateRela_DetailCom from '@/views/PrjFunction/FunctionTemplateRela_DetailAi.vue';
  import FunctionTemplateRela_ListCom from '@/views/PrjFunction/FunctionTemplateRela_ListAi.vue';
  import { FunctionTemplateRelaKey } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';

  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import { clsProgLangTypeEN, enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import FunctionTemplateRelaCRUDAiEx from '@/views/PrjFunction/FunctionTemplateRelaCRUDAiEx';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadCodeTypeOptionsByProgLangTypeAi,
    loadFeatureOptionsAi,
    loadFunctionOptionsByCodeTypeAi,
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
      ProgLangTypeId_Static.value = enumProgLangType.TypeScript_09;
      CodeTypeId_Static.value = '0254';
      FunctionTemplateId_Static.value = '0001';

      const strTitle = ref('函数与模板关系维护(Ai4版-命令Schema)');
      const objPage = ref<FunctionTemplateRelaCRUDAiEx>();
      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrFunction4GeneCode = ref<clsFunction4GeneCodeEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<FunctionTemplateRelaQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<FunctionTemplateRelaQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<FunctionTemplateRelaCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<FunctionTemplateRelaCommandSpecAi>>(getFeatureCommandsAi());

      const getEnsurePageCaller = (): string => {
        const stack = new Error().stack;
        if (stack == null || stack === '') return 'unknown';

        const lines = stack
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line !== '');

        // stack格式通常为: Error -> getEnsurePageCaller -> ensurePage -> 调用者
        return lines[3] ?? lines[2] ?? 'unknown';
      };

      const ensurePage = (strCaller: string): FunctionTemplateRelaCRUDAiEx | null => {
        if (objPage.value == null) {
          const caller = getEnsurePageCaller();
          const errorMessage = `页面初始化不成功,请联系管理员! 调用者: ${strCaller}, 调用栈: ${caller}`;
          console.error(errorMessage);
          alert(errorMessage);
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
          case 'progLangTypeId_q':
            return progLangTypeId_q.value;
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
          case 'progLangTypeId_q':
            progLangTypeId_q.value = value;
            syncCodeTypeByProgLangType(value).catch((error) => console.error(error));
            break;
          case 'codeTypeId_q':
            codeTypeId_q.value = value;
            CodeTypeId_Static.value = value;
            syncFunctionByCodeType(value).catch((error) => console.error(error));
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
        optionsKey?:
          | 'functionTemplate'
          | 'regionType'
          | 'progLangType'
          | 'vCodeType_Sim'
          | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return arrFunctionTemplate.value ?? [];
          case 'regionType':
            return arrRegionType.value ?? [];
          case 'progLangType':
            return arrProgLangType.value ?? [];
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
        optionsKey?:
          | 'functionTemplate'
          | 'regionType'
          | 'progLangType'
          | 'vCodeType_Sim'
          | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return item.functionTemplateId;
          case 'regionType':
            return item.regionTypeId;
          case 'progLangType':
            return item.progLangTypeId;
          case 'vCodeType_Sim':
            return item.codeTypeId;
          case 'function4GeneCode':
            return item.funcId4GC;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?:
          | 'functionTemplate'
          | 'regionType'
          | 'progLangType'
          | 'vCodeType_Sim'
          | 'function4GeneCode',
      ) => {
        switch (optionsKey) {
          case 'functionTemplate':
            return item.functionTemplateName;
          case 'regionType':
            return item.regionTypeName;
          case 'progLangType':
            return item.progLangTypeSimName || item.progLangTypeName;
          case 'vCodeType_Sim':
            return item.codeTypeName;
          case 'function4GeneCode':
            return item.funcName;
          default:
            return '';
        }
      };

      const syncFunctionByCodeType = async (strCodeTypeId: string) => {
        arrFunction4GeneCode.value = await loadFunctionOptionsByCodeTypeAi(strCodeTypeId);
        if (!arrFunction4GeneCode.value || arrFunction4GeneCode.value.length === 0) {
          funcId4GC_q.value = '0';
          return;
        }
        const hasCurrent = arrFunction4GeneCode.value.some(
          (x) => x.funcId4GC === funcId4GC_q.value,
        );
        if (!hasCurrent) {
          funcId4GC_q.value = arrFunction4GeneCode.value[0].funcId4GC;
        }
      };

      const syncCodeTypeByProgLangType = async (strProgLangTypeId: string) => {
        ProgLangTypeId_Static.value = strProgLangTypeId;
        arrvCodeType_Sim.value = await loadCodeTypeOptionsByProgLangTypeAi(strProgLangTypeId);
        if (!arrvCodeType_Sim.value || arrvCodeType_Sim.value.length === 0) {
          codeTypeId_q.value = '0';
          CodeTypeId_Static.value = '0';
          await syncFunctionByCodeType('0');
          return;
        }
        const hasCurrent = arrvCodeType_Sim.value.some((x) => x.codeTypeId === codeTypeId_q.value);
        if (!hasCurrent) {
          codeTypeId_q.value = arrvCodeType_Sim.value[0].codeTypeId;
        }
        CodeTypeId_Static.value = codeTypeId_q.value;
        await syncFunctionByCodeType(codeTypeId_q.value);
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
        const page = ensurePage(commandId);
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

      function btn_Click(strCommandName: string, key: FunctionTemplateRelaKey) {
        FunctionTemplateRelaCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          functionTemplateId_q,
          regionTypeId_q,
          progLangTypeId_q,
          codeTypeId_q,
          funcId4GC_q,
          isGeneCode_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrFunctionTemplate.value = queryOptions.arrFunctionTemplate;
        arrRegionType.value = queryOptions.arrRegionType;
        arrProgLangType.value = queryOptions.arrProgLangType;
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;
        arrFunction4GeneCode.value = queryOptions.arrFunction4GeneCode;

        if (
          progLangTypeId_q.value === '0' &&
          arrProgLangType.value &&
          arrProgLangType.value.length > 0
        ) {
          progLangTypeId_q.value = arrProgLangType.value[0].progLangTypeId;
        }
        await syncCodeTypeByProgLangType(progLangTypeId_q.value);

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        functionTemplateId_f.value = '0';

        FunctionTemplateRelaCRUDAiEx.vuebtn_Click = btn_Click;
        FunctionTemplateRelaCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new FunctionTemplateRelaCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage('SortColumn');
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
        arrProgLangType,
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
