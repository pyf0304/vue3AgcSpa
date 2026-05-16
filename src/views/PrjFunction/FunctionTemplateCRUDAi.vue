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
          <label id="lblFunctionTemplateList" class="col-form-label text-info" style="width: 250px"
            >函数模板列表</label
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
      <FunctionTemplate_ListCom
        ref="refFunctionTemplate_List"
        :items="dataListFunctionTemplate"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortFunctionTemplateBy" type="hidden" />
    </div>

    <FunctionTemplate_EditCom ref="refFunctionTemplate_Edit" />
    <FunctionTemplate_DetailCom ref="refFunctionTemplate_Detail" />
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
    refFunctionTemplate_Edit,
    refFunctionTemplate_Detail,
    refFunctionTemplate_List,
    showErrorMessage,
    dataListFunctionTemplate,
    emptyRecNumInfo,
    dataColumn,
    functionTemplateId_q,
    functionTemplateName_q,
    functionTemplateENName_q,
    progLangTypeId_q,
    createUserId_q,
  } from '@/views/PrjFunction/FunctionTemplateVueShare';
  import FunctionTemplate_EditCom from '@/views/PrjFunction/FunctionTemplate_Edit.vue';
  import FunctionTemplate_DetailCom from '@/views/PrjFunction/FunctionTemplate_Detail.vue';
  import FunctionTemplate_ListCom from '@/views/PrjFunction/FunctionTemplate_ListAi.vue';

  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import FunctionTemplateCRUDExAi from '@/views/PrjFunction/FunctionTemplateCRUDExAi';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    FunctionTemplateQueryFieldSpecAi,
  } from '@/viewsBase/PrjFunction/FunctionTemplateCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    FunctionTemplateCommandIdAi,
    FunctionTemplateCommandSpecAi,
  } from '@/viewsBase/PrjFunction/FunctionTemplateCRUDAiCommands';

  export default defineComponent({
    name: 'FunctionTemplateCRUDAi',
    components: {
      FunctionTemplate_EditCom,
      FunctionTemplate_DetailCom,
      FunctionTemplate_ListCom,
    },
    setup() {
      const strTitle = ref('函数模板维护(Ai4版-命令Schema)');
      const objPage = ref<FunctionTemplateCRUDExAi>();
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<FunctionTemplateQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<FunctionTemplateQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<FunctionTemplateCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<FunctionTemplateCommandSpecAi>>(getFeatureCommandsAi());

      const ensurePage = (): FunctionTemplateCRUDExAi | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: FunctionTemplateQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'functionTemplateId_q':
            return functionTemplateId_q.value;
          case 'functionTemplateName_q':
            return functionTemplateName_q.value;
          case 'functionTemplateENName_q':
            return functionTemplateENName_q.value;
          case 'progLangTypeId_q':
            return progLangTypeId_q.value;
          case 'createUserId_q':
            return createUserId_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: FunctionTemplateQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'functionTemplateId_q':
            functionTemplateId_q.value = value;
            break;
          case 'functionTemplateName_q':
            functionTemplateName_q.value = value;
            break;
          case 'functionTemplateENName_q':
            functionTemplateENName_q.value = value;
            break;
          case 'progLangTypeId_q':
            progLangTypeId_q.value = value;
            break;
          case 'createUserId_q':
            createUserId_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: 'progLangType') => {
        switch (optionsKey) {
          case 'progLangType':
            return arrProgLangType.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (item: any, optionsKey?: 'progLangType') => {
        switch (optionsKey) {
          case 'progLangType':
            return item.progLangTypeId;
          default:
            return '';
        }
      };

      const getSelectText = (item: any, optionsKey?: 'progLangType') => {
        switch (optionsKey) {
          case 'progLangType':
            return item.progLangTypeName;
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

      const runCommand = async (commandId: FunctionTemplateCommandIdAi) => {
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
        FunctionTemplateCRUDExAi.btn_Click(strCommandName, strKeyId);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          functionTemplateId_q,
          functionTemplateName_q,
          functionTemplateENName_q,
          progLangTypeId_q,
          createUserId_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrProgLangType.value = queryOptions.arrProgLangType;

        FunctionTemplateCRUDExAi.vuebtn_Click = btn_Click;
        FunctionTemplateCRUDExAi.GetPropValue = GetPropValue;
        objPage.value = new FunctionTemplateCRUDExAi();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({
          name: 'editFunctionTemplate',
          params: { functionTemplateId: data.functionTemplateId },
        });
      };

      return {
        showErrorMessage,
        dataListFunctionTemplate,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refFunctionTemplate_Edit,
        refFunctionTemplate_Detail,
        refFunctionTemplate_List,

        arrProgLangType,
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
