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
                <label class="col-form-label text-right" style="width: 90px">{{
                  field.label
                }}</label>
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
                <label class="col-form-label text-right" style="width: 90px">{{
                  field.label
                }}</label>
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
          <label id="lblPrjDataBaseList" class="col-form-label text-info" style="width: 250px"
            >数据库对象列表</label
          >
        </li>
        <li v-for="cmd in featureCommands" :key="cmd.id" class="nav-item ml-3">
          <div v-if="cmd.needAuxControl" class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlUseStateId_SetFldValue"
              v-model="useStateId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">{{
                item.useStateName
              }}</option>
            </select>
            <button :id="cmd.elementId" :class="cmd.btnClass" @click="runCommand(cmd.id)">{{
              cmd.text
            }}</button>
          </div>
          <button v-else :id="cmd.elementId" :class="cmd.btnClass" @click="runCommand(cmd.id)">
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
    <PrjDataBase_DetailCom ref="refPrjDataBase_Detail" />
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
    refPrjDataBase_Detail,
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
  import PrjDataBase_EditCom from '@/views/PrjManage/PrjDataBase_Edit.vue';
  import PrjDataBase_DetailCom from '@/views/PrjManage/PrjDataBase_Detail.vue';
  import PrjDataBase_ListCom from '@/views/PrjManage/PrjDataBase_ListAi.vue';
  import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import PrjDataBaseCRUDExAi4 from '@/views/PrjManage/PrjDataBaseCRUDExAi4';
  import {
    getQueryRowsAi3,
    initQueryDefaultsAi3,
    loadFeatureOptionsAi3,
    loadQueryOptionsAi3,
    PrjDataBaseQueryFieldSpecAi3,
  } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAi3Query';
  import {
    getFeatureCommandsAi4,
    getQueryCommandsAi4,
    PrjDataBaseCommandIdAi4,
    PrjDataBaseCommandSpecAi4,
  } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAi4Commands';

  export default defineComponent({
    name: 'PrjDataBaseCRUDAi4',
    components: {
      PrjDataBase_EditCom,
      PrjDataBase_DetailCom,
      PrjDataBase_ListCom,
    },
    setup() {
      const strTitle = ref('数据库对象维护(Ai4版-命令Schema)');
      const objPage = ref<PrjDataBaseCRUDExAi4>();
      const arrDataBaseType = ref<clsDataBaseTypeEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi3();
      const queryRow1 = ref<Array<PrjDataBaseQueryFieldSpecAi3>>(row1);
      const queryRow2 = ref<Array<PrjDataBaseQueryFieldSpecAi3>>(row2);

      const queryCommands = ref<Array<PrjDataBaseCommandSpecAi4>>(getQueryCommandsAi4());
      const featureCommands = ref<Array<PrjDataBaseCommandSpecAi4>>(getFeatureCommandsAi4());

      const ensurePage = (): PrjDataBaseCRUDExAi4 | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: PrjDataBaseQueryFieldSpecAi3['key']): string => {
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

      const setQueryValue = (key: PrjDataBaseQueryFieldSpecAi3['key'], value: string) => {
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
        if (optionsKey === 'dataBaseType') return arrDataBaseType.value ?? [];
        if (optionsKey === 'useState') return arrUseState.value ?? [];
        return [];
      };

      const getSelectValue = (item: any, optionsKey?: 'dataBaseType' | 'useState') => {
        if (optionsKey === 'dataBaseType') return item.dataBaseTypeId;
        if (optionsKey === 'useState') return item.useStateId;
        return '';
      };

      const getSelectText = (item: any, optionsKey?: 'dataBaseType' | 'useState') => {
        if (optionsKey === 'dataBaseType') return item.dataBaseTypeName;
        if (optionsKey === 'useState') return item.useStateName;
        return '';
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

      const runCommand = async (commandId: PrjDataBaseCommandIdAi4) => {
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
        PrjDataBaseCRUDExAi4.btn_Click(strCommandName, strKeyId);
      }

      onMounted(async () => {
        initQueryDefaultsAi3({
          databaseOwner_q,
          dataBaseTypeId_q,
          dataBaseUserId_q,
          ipAddress_q,
          useStateId_q,
        });

        const queryOptions = await loadQueryOptionsAi3();
        arrDataBaseType.value = queryOptions.arrDataBaseType;
        arrUseState.value = queryOptions.arrUseState;

        const featureOptions = await loadFeatureOptionsAi3();
        arrUseState.value = featureOptions.arrUseState;
        useStateId_f.value = '0';

        PrjDataBaseCRUDExAi4.vuebtn_Click = btn_Click;
        PrjDataBaseCRUDExAi4.GetPropValue = GetPropValue;
        objPage.value = new PrjDataBaseCRUDExAi4();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editPrjDataBase', params: { courseId: data.courseId } });
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
        refPrjDataBase_Detail,
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

<style scoped></style>
