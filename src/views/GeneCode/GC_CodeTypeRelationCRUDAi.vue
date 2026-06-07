<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
      <button
        id="btnOpenMindMap"
        type="button"
        class="btn btn-sm btn-outline-primary ml-2"
        @click="openMindMap"
      >
        思维导图维护
      </button>
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
            id="lblGC_CodeTypeRelationList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC_代码类型关系列表</label
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
      <GC_CodeTypeRelation_ListCom
        ref="refGC_CodeTypeRelation_List"
        :items="dataListGC_CodeTypeRelation"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortGC_CodeTypeRelationBy" type="hidden" />
    </div>

    <GC_CodeTypeRelation_EditCom ref="refGC_CodeTypeRelation_Edit" />
    <GC_CodeTypeRelation_DetailCom ref="refGC_CodeTypeRelation_DetailAi" />
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
    refGC_CodeTypeRelation_Edit,
    refGC_CodeTypeRelation_DetailAi,
    refGC_CodeTypeRelation_List,
    showErrorMessage,
    dataListGC_CodeTypeRelation,
    emptyRecNumInfo,
    dataColumn,
    parentCodeTypeId_q,
    childCodeTypeId_q,
    ctRelationTypeId_q,
    childCodeTypeName_q,
    childCodeTypeId_f,
    ctRelationTypeId_f,
    ProgLangTypeId_Static,
  } from '@/views/GeneCode/GC_CodeTypeRelationVueShare';

  import GC_CodeTypeRelation_EditCom from '@/views/GeneCode/GC_CodeTypeRelation_EditAi.vue';

  import GC_CodeTypeRelation_DetailCom from '@/views/GeneCode/GC_CodeTypeRelation_DetailAi.vue';
  import GC_CodeTypeRelation_ListCom from '@/views/GeneCode/GC_CodeTypeRelation_ListAi.vue';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsCTRelationTypeEN } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import GC_CodeTypeRelationCRUDAiEx from '@/views/GeneCode/GC_CodeTypeRelationCRUDAiEx';
  import { GC_CodeTypeRelationKey } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    GC_CodeTypeRelationQueryFieldSpecAi,
  } from '@/viewsBase/GeneCode/GC_CodeTypeRelationCRUDAiQuery';
  import {
    loadFeatureOptionsAi,
    getFeatureCommandsAi,
    getQueryCommandsAi,
    GC_CodeTypeRelationCommandIdAi,
    GC_CodeTypeRelationCommandSpecAi,
  } from '@/viewsBase/GeneCode/GC_CodeTypeRelationCRUDAiCommands';

  export default defineComponent({
    name: 'GCCodeTypeRelationCRUDAi',
    components: {
      GC_CodeTypeRelation_EditCom,

      GC_CodeTypeRelation_DetailCom,
      GC_CodeTypeRelation_ListCom,
    },

    setup() {
      ProgLangTypeId_Static.value = '09';

      const strTitle = ref('GC_代码类型关系维护(Ai版-命令Schema)');
      const objPage = ref<GC_CodeTypeRelationCRUDAiEx>();
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrCTRelationType = ref<clsCTRelationTypeEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<GC_CodeTypeRelationQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<GC_CodeTypeRelationQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<GC_CodeTypeRelationCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<GC_CodeTypeRelationCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): GC_CodeTypeRelationCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: GC_CodeTypeRelationQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'parentCodeTypeId_q':
            return parentCodeTypeId_q.value;
          case 'childCodeTypeId_q':
            return childCodeTypeId_q.value;
          case 'ctRelationTypeId_q':
            return ctRelationTypeId_q.value;
          case 'childCodeTypeName_q':
            return childCodeTypeName_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: GC_CodeTypeRelationQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'parentCodeTypeId_q':
            parentCodeTypeId_q.value = value;
            break;
          case 'childCodeTypeId_q':
            childCodeTypeId_q.value = value;
            break;
          case 'ctRelationTypeId_q':
            ctRelationTypeId_q.value = value;
            break;
          case 'childCodeTypeName_q':
            childCodeTypeName_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (
        optionsKey?: 'parentCodeTypeId_q' | 'childCodeTypeId_q' | 'ctRelationTypeId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'parentCodeTypeId_q':
            return arrvCodeType_Sim.value ?? [];
          case 'childCodeTypeId_q':
            return arrvCodeType_Sim.value ?? [];
          case 'ctRelationTypeId_q':
            return arrCTRelationType.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (
        item: any,
        optionsKey?: 'parentCodeTypeId_q' | 'childCodeTypeId_q' | 'ctRelationTypeId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'parentCodeTypeId_q':
            return item.codeTypeId;
          case 'childCodeTypeId_q':
            return item.codeTypeId;
          case 'ctRelationTypeId_q':
            return item.ctRelationTypeId;
          default:
            return '';
        }
      };

      const getSelectText = (
        item: any,
        optionsKey?: 'parentCodeTypeId_q' | 'childCodeTypeId_q' | 'ctRelationTypeId_q' | string,
      ) => {
        switch (optionsKey) {
          case 'parentCodeTypeId_q':
            return item.codeTypeName;
          case 'childCodeTypeId_q':
            return item.codeTypeName;
          case 'ctRelationTypeId_q':
            return item.relationTypeName;
          default:
            return '';
        }
      };

      const getSelectOptionsInFeature = (
        optionsKey?: 'childCodeTypeId_f' | 'ctRelationTypeId_f' | string,
      ) => {
        switch (optionsKey) {
          case 'childCodeTypeId_f':
            return arrvCodeType_Sim.value ?? [];
          case 'ctRelationTypeId_f':
            return arrCTRelationType.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValueInFeature = (
        item: any,
        optionsKey?: 'childCodeTypeId_f' | 'ctRelationTypeId_f' | string,
      ) => {
        switch (optionsKey) {
          case 'childCodeTypeId_f':
            return item.codeTypeId;
          case 'ctRelationTypeId_f':
            return item.ctRelationTypeId;
          default:
            return '';
        }
      };

      const getSelectTextInFeature = (
        item: any,
        optionsKey?: 'childCodeTypeId_f' | 'ctRelationTypeId_f' | string,
      ) => {
        switch (optionsKey) {
          case 'childCodeTypeId_f':
            return item.codeTypeName;
          case 'ctRelationTypeId_f':
            return item.relationTypeName;
          default:
            return '';
        }
      };

      const updateAuxControlValue = (commandId: GC_CodeTypeRelationCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;

        const command = featureCommands.value.find((x) => x.id === commandId);
        if (command && command.fieldNameCamel) {
          switch (command.fieldNameCamel) {
            case 'childCodeTypeId_f':
              childCodeTypeId_f.value = value;
              break;
            case 'ctRelationTypeId_f':
              ctRelationTypeId_f.value = value;
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

      const runCommand = async (commandId: GC_CodeTypeRelationCommandIdAi) => {
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

      const openMindMap = () => {
        router.push({ name: 'account-GC_CodeTypeRelationMindMapAi' });
      };

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }

      function btn_Click(strCommandName: string, key: GC_CodeTypeRelationKey | null) {
        GC_CodeTypeRelationCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          parentCodeTypeId_q,
          childCodeTypeId_q,
          ctRelationTypeId_q,
          childCodeTypeName_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;
        arrCTRelationType.value = queryOptions.arrCTRelationType;

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        arrvCodeType_Sim.value = featureOptions.arrvCodeType_Sim;
        arrCTRelationType.value = featureOptions.arrCTRelationType;
        childCodeTypeId_f.value = '0';
        ctRelationTypeId_f.value = '0';

        featureCommands.value.forEach((cmd) => {
          if (cmd.needAuxControl) {
            auxControlValues[cmd.id] = '0';
          }
        });

        GC_CodeTypeRelationCRUDAiEx.vuebtn_Click = btn_Click;
        GC_CodeTypeRelationCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new GC_CodeTypeRelationCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editGC_CodeTypeRelation', params: { relationId: data.relationId } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refGC_CodeTypeRelation_Edit,

        refGC_CodeTypeRelation_DetailAi,
        refGC_CodeTypeRelation_List,
        showErrorMessage,
        dataListGC_CodeTypeRelation,
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
        openMindMap,
        EditTabRelaInfo,
        SortColumn,
      };
    },
  });
</script>

<style scoped></style>
