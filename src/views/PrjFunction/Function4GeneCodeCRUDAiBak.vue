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
          <label id="lblFunction4GeneCodeList" class="col-form-label text-info" style="width: 250px"
            >函数4GeneCode列表</label
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
      <Function4GeneCode_ListCom
        ref="refFunction4GeneCode_List"
        :items="dataListFunction4GeneCode"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortFunction4GeneCodeBy" type="hidden" />
    </div>

    <Function4GeneCode_EditCom ref="refFunction4GeneCode_Edit" />
    <Function4GeneCode_DetailCom ref="refFunction4GeneCode_DetailAi" />
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
    refFunction4GeneCode_Edit,
    refFunction4GeneCode_DetailAi,
    refFunction4GeneCode_List,
    showErrorMessage,
    dataListFunction4GeneCode,
    emptyRecNumInfo,
    dataColumn,
    funcId4GC_q,
    funcName_q,
    sqlDsTypeId_q,
    funcCodeTypeId_q,
    inUse_q,
    progLangTypeId_q,
    funcTypeId_q,
    isTemplate_q,
    isFuncTemplate_q,
    funcId4Code_q,
    inUse_f,
    PrjId_Session,
    UserId_Local,
    FeatureTypeId_Static,
    ProgLangTypeId_Static,
    IsVisible_Giving,
    FuncPurposeId_Static,
  } from '@/views/PrjFunction/Function4GeneCodeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  import Function4GeneCode_EditCom from '@/views/PrjFunction/Function4GeneCode_EditAi.vue';
  import Function4GeneCode_DetailCom from '@/views/PrjFunction/Function4GeneCode_DetailAi.vue';
  import Function4GeneCode_ListCom from '@/views/PrjFunction/Function4GeneCode_ListAi.vue';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
  import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import Function4GeneCodeCRUDAiEx from '@/views/PrjFunction/Function4GeneCodeCRUDAiEx';
  import { Function4GeneCodeKey } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadFeatureOptionsAi,
    loadQueryOptionsAi,
    Function4GeneCodeQueryFieldSpecAi,
  } from '@/viewsBase/PrjFunction/Function4GeneCodeCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    Function4GeneCodeCommandIdAi,
    Function4GeneCodeCommandSpecAi,
  } from '@/viewsBase/PrjFunction/Function4GeneCodeCRUDAiCommands';

  export default defineComponent({
    name: 'Function4GeneCodeCRUDAi',
    components: {
      Function4GeneCode_EditCom,
      Function4GeneCode_DetailCom,
      Function4GeneCode_ListCom,
    },

    setup() {
      const userStore = useUserStore();

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = userStore.getUserId;
      FeatureTypeId_Static.value = '02';
      ProgLangTypeId_Static.value = '09';
      IsVisible_Giving.value = true;
      FuncPurposeId_Static.value = '02';

      const strTitle = ref('函数4GeneCode维护(Ai版-命令Schema)');
      const objPage = ref<Function4GeneCodeCRUDAiEx>();
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrFunctionType = ref<clsFunctionTypeEN[] | null>([]);
      const arrvFunction4Code_Sim = ref<clsvFunction4Code_SimEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<Function4GeneCodeQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<Function4GeneCodeQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<Function4GeneCodeCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<Function4GeneCodeCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): Function4GeneCodeCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: Function4GeneCodeQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'funcId4GC_q':
            return funcId4GC_q.value;
          case 'funcName_q':
            return funcName_q.value;
          case 'sqlDsTypeId_q':
            return sqlDsTypeId_q.value;
          case 'funcCodeTypeId_q':
            return funcCodeTypeId_q.value;
          case 'inUse_q':
            return inUse_q.value;
          case 'progLangTypeId_q':
            return progLangTypeId_q.value;
          case 'funcTypeId_q':
            return funcTypeId_q.value;
          case 'isTemplate_q':
            return isTemplate_q.value;
          case 'isFuncTemplate_q':
            return isFuncTemplate_q.value;
          case 'funcId4Code_q':
            return funcId4Code_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: Function4GeneCodeQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'funcId4GC_q':
            funcId4GC_q.value = value;
            break;
          case 'funcName_q':
            funcName_q.value = value;
            break;
          case 'sqlDsTypeId_q':
            sqlDsTypeId_q.value = value;
            break;
          case 'funcCodeTypeId_q':
            funcCodeTypeId_q.value = value;
            break;
          case 'inUse_q':
            inUse_q.value = value;
            break;
          case 'progLangTypeId_q':
            progLangTypeId_q.value = value;
            break;
          case 'funcTypeId_q':
            funcTypeId_q.value = value;
            break;
          case 'isTemplate_q':
            isTemplate_q.value = value;
            break;
          case 'isFuncTemplate_q':
            isFuncTemplate_q.value = value;
            break;
          case 'funcId4Code_q':
            funcId4Code_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (
        optionsKey?:
          | 'sQLDSType'
          | 'vCodeType_Sim'
          | 'progLangType'
          | 'functionType'
          | 'vFunction4Code_Sim'
          | string,
      ) => {
        switch (optionsKey) {
          case 'sQLDSType':
            return arrSQLDSType.value ?? [];
          case 'vCodeType_Sim':
            return arrvCodeType_Sim.value ?? [];
          case 'progLangType':
            return arrProgLangType.value ?? [];
          case 'functionType':
            return arrFunctionType.value ?? [];
          case 'vFunction4Code_Sim':
            return arrvFunction4Code_Sim.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (
        item: any,
        optionsKey?:
          | 'sQLDSType'
          | 'vCodeType_Sim'
          | 'progLangType'
          | 'functionType'
          | 'vFunction4Code_Sim'
          | string,
      ) => {
        switch (optionsKey) {
          case 'sQLDSType':
            return item.sqlDsTypeId;
          case 'vCodeType_Sim':
            return item.codeTypeId;
          case 'progLangType':
            return item.progLangTypeId;
          case 'functionType':
            return item.funcTypeId;
          case 'vFunction4Code_Sim':
            return item.funcId4Code;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?:
          | 'sQLDSType'
          | 'vCodeType_Sim'
          | 'progLangType'
          | 'functionType'
          | 'vFunction4Code_Sim'
          | string,
      ) => {
        switch (optionsKey) {
          case 'sQLDSType':
            return item.sqlDsTypeName;
          case 'vCodeType_Sim':
            return item.codeTypeName;
          case 'progLangType':
            return item.progLangTypeName;
          case 'functionType':
            return item.funcTypeName;
          case 'vFunction4Code_Sim':
            return item.funcName4Code;
          default:
            return '';
        }
      };

      const updateAuxControlValue = (commandId: Function4GeneCodeCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;

        const command = featureCommands.value.find((x) => x.id === commandId);
        if (command && command.fieldNameCamel) {
          switch (command.fieldNameCamel) {
            case 'inUse_f':
              inUse_f.value = value;
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

      const runCommand = async (commandId: Function4GeneCodeCommandIdAi) => {
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

      function btn_Click(strCommandName: string, key: Function4GeneCodeKey | null) {
        Function4GeneCodeCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          funcId4GC_q,
          funcName_q,
          sqlDsTypeId_q,
          funcCodeTypeId_q,
          inUse_q,
          progLangTypeId_q,
          funcTypeId_q,
          isTemplate_q,
          isFuncTemplate_q,
          funcId4Code_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrSQLDSType.value = queryOptions.arrSQLDSType;
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;
        arrProgLangType.value = queryOptions.arrProgLangType;
        arrFunctionType.value = queryOptions.arrFunctionType;
        arrvFunction4Code_Sim.value = queryOptions.arrvFunction4Code_Sim;

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        inUse_f.value = '0';

        featureCommands.value.forEach((cmd) => {
          if (cmd.needAuxControl) {
            auxControlValues[cmd.id] = '0';
          }
        });

        Function4GeneCodeCRUDAiEx.vuebtn_Click = btn_Click;
        Function4GeneCodeCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new Function4GeneCodeCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editFunction4GeneCode', params: { funcId4GC: data.funcId4GC } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refFunction4GeneCode_Edit,
        refFunction4GeneCode_DetailAi,
        refFunction4GeneCode_List,
        showErrorMessage,
        dataListFunction4GeneCode,
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
