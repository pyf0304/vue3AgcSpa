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
          <label id="lblPrjDataBaseList" class="col-form-label text-info" style="width: 250px"
            >数据库对象列表</label
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
      <PrjDataBase_ListCom
        ref="refPrjDataBase_List"
        :items="dataListPrjDataBase"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortPrjDataBaseBy" type="hidden" />
    </div>

    <PrjDataBase_EditCom ref="refPrjDataBase_Edit" />
    <PrjDataBase_DetailCom ref="refPrjDataBase_DetailAi" />
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
    refPrjDataBase_Edit,
    refPrjDataBase_DetailAi,
    refPrjDataBase_List,
    showErrorMessage,
    dataListPrjDataBase,
    emptyRecNumInfo,
    dataColumn,
    databaseOwner_q,
    dataBaseTypeId_q,
    dataBaseUserId_q,
    ipAddress_q,
    useStateId_q,
    useStateId_f,
  } from '@/views/PrjManage/PrjDataBaseVueShare';
  import PrjDataBase_EditCom from '@/views/PrjManage/PrjDataBase_EditAi.vue';
  import PrjDataBase_DetailCom from '@/views/PrjManage/PrjDataBase_DetailAi.vue';
  import PrjDataBase_ListCom from '@/views/PrjManage/PrjDataBase_ListAi.vue';
  import { PrjDataBaseKey } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';

  import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import PrjDataBaseCRUDAiEx from '@/views/PrjManage/PrjDataBaseCRUDAiEx';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadFeatureOptionsAi,
    loadQueryOptionsAi,
    PrjDataBaseQueryFieldSpecAi,
  } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    PrjDataBaseCommandIdAi,
    PrjDataBaseCommandSpecAi,
  } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAiCommands';

  export default defineComponent({
    name: 'PrjDataBaseCRUDAi',
    components: {
      PrjDataBase_EditCom,
      PrjDataBase_DetailCom,
      PrjDataBase_ListCom,
    },
    setup() {
      const strTitle = ref('数据库对象维护(Ai4版-命令Schema)');
      const objPage = ref<PrjDataBaseCRUDAiEx>();
      const arrDataBaseType = ref<clsDataBaseTypeEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<PrjDataBaseQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<PrjDataBaseQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<PrjDataBaseCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<PrjDataBaseCommandSpecAi>>(getFeatureCommandsAi());

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

      const ensurePage = (strCaller: string): PrjDataBaseCRUDAiEx | null => {
        if (objPage.value == null) {
          const caller = getEnsurePageCaller();
          const errorMessage = `页面初始化不成功,请联系管理员! 调用者: ${strCaller}, 调用栈: ${caller}`;
          console.error(errorMessage);
          alert(errorMessage);
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: PrjDataBaseQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'databaseOwner_q':
            return databaseOwner_q.value;
          case 'dataBaseTypeId_q':
            return dataBaseTypeId_q.value;
          case 'dataBaseUserId_q':
            return dataBaseUserId_q.value;
          case 'ipAddress_q':
            return ipAddress_q.value;
          case 'useStateId_q':
            return useStateId_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: PrjDataBaseQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'databaseOwner_q':
            databaseOwner_q.value = value;
            break;
          case 'dataBaseTypeId_q':
            dataBaseTypeId_q.value = value;
            break;
          case 'dataBaseUserId_q':
            dataBaseUserId_q.value = value;
            break;
          case 'ipAddress_q':
            ipAddress_q.value = value;
            break;
          case 'useStateId_q':
            useStateId_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: 'dataBaseType' | 'useState') => {
        switch (optionsKey) {
          case 'dataBaseType':
            return arrDataBaseType.value ?? [];
          case 'useState':
            return arrUseState.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (item: any, optionsKey?: 'dataBaseType' | 'useState') => {
        switch (optionsKey) {
          case 'dataBaseType':
            return item.dataBaseTypeId;
          case 'useState':
            return item.useStateId;
          default:
            return '';
        }
      };

      const getSelectText = (item: any, optionsKey?: 'dataBaseType' | 'useState') => {
        switch (optionsKey) {
          case 'dataBaseType':
            return item.dataBaseTypeName;
          case 'useState':
            return item.useStateName;
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

      const runCommand = async (commandId: PrjDataBaseCommandIdAi) => {
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

      function btn_Click(strCommandName: string, key: PrjDataBaseKey) {
        PrjDataBaseCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          databaseOwner_q,
          dataBaseTypeId_q,
          dataBaseUserId_q,
          ipAddress_q,
          useStateId_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrDataBaseType.value = queryOptions.arrDataBaseType;
        arrUseState.value = queryOptions.arrUseState;

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        useStateId_f.value = '0';

        PrjDataBaseCRUDAiEx.vuebtn_Click = btn_Click;
        PrjDataBaseCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new PrjDataBaseCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage('SortColumn');
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editPrjDataBase', params: { prjDataBaseId: data.prjDataBaseId } });
      };

      return {
        showErrorMessage,
        dataListPrjDataBase,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refPrjDataBase_Edit,
        refPrjDataBase_DetailAi,
        refPrjDataBase_List,
        useStateId_f,

        arrDataBaseType,
        arrUseState,
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
