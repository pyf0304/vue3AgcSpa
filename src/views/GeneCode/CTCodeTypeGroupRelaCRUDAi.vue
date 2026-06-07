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
            id="lblCTCodeTypeGroupRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >CTCodeTypeGroupRela列表</label
          >
        </li>
        <li class="nav-item ml-3">
          <button
            type="button"
            class="btn btn-sm btn-outline-primary"
            :disabled="!canOpenAddCodeTypePanel"
            :title="canOpenAddCodeTypePanel ? '打开添加弹窗' : '请先选择代码组'"
            @click="openAddCodeTypePanel"
          >
            为当前组添加代码类型
          </button>
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
      <CTCodeTypeGroupRela_ListCom
        ref="refCTCodeTypeGroupRela_List"
        :items="dataListCTCodeTypeGroupRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortCTCodeTypeGroupRelaBy" type="hidden" />
    </div>

    <CTCodeTypeGroupRela_EditCom ref="refCTCodeTypeGroupRela_Edit" />
    <CTCodeTypeGroupRela_DetailCom ref="refCTCodeTypeGroupRela_DetailAi" />

    <div
      v-if="isAddCodeTypePanelVisible"
      class="add-code-type-modal-mask"
      @click.self="closeAddCodeTypePanel"
    >
      <div class="add-code-type-modal">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <strong class="text-primary">添加代码类型到当前组</strong>
          <button type="button" class="close" @click="closeAddCodeTypePanel">
            <span>&times;</span>
          </button>
        </div>
        <CTCodeTypeGroupAddCodeTypePanelAi
          :current-group-id="ctGroupId_q"
          @added="onCodeTypeAddedToGroup"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { computed, defineComponent, onMounted, ref, reactive } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCTCodeTypeGroupRela_Edit,
    refCTCodeTypeGroupRela_DetailAi,
    refCTCodeTypeGroupRela_List,
    showErrorMessage,
    dataListCTCodeTypeGroupRela,
    emptyRecNumInfo,
    dataColumn,
    ctGroupId_q,
    codeTypeId_q,
    ApplicationTypeId_Static,
    ProgLangTypeId_Static,
  } from '@/views/GeneCode/CTCodeTypeGroupRelaVueShare';

  import CTCodeTypeGroupRela_EditCom from '@/views/GeneCode/CTCodeTypeGroupRela_EditAi.vue';
  import CTCodeTypeGroupAddCodeTypePanelAi from '@/views/GeneCode/CTCodeTypeGroupAddCodeTypePanelAi.vue';

  import CTCodeTypeGroupRela_DetailCom from '@/views/GeneCode/CTCodeTypeGroupRela_DetailAi.vue';
  import CTCodeTypeGroupRela_ListCom from '@/views/GeneCode/CTCodeTypeGroupRela_ListAi.vue';
  import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import CTCodeTypeGroupRelaCRUDAiEx from '@/views/GeneCode/CTCodeTypeGroupRelaCRUDAiEx';
  import { CTCodeTypeGroupRelaKey } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    CTCodeTypeGroupRelaQueryFieldSpecAi,
  } from '@/viewsBase/GeneCode/CTCodeTypeGroupRelaCRUDAiQuery';
  import {
    getFeatureCommandsAi,
    getQueryCommandsAi,
    CTCodeTypeGroupRelaCommandIdAi,
    CTCodeTypeGroupRelaCommandSpecAi,
  } from '@/viewsBase/GeneCode/CTCodeTypeGroupRelaCRUDAiCommands';
  import { enumApplicationType } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';

  export default defineComponent({
    name: 'CTCodeTypeGroupRelaCRUDAi',
    components: {
      CTCodeTypeGroupRela_EditCom,
      CTCodeTypeGroupAddCodeTypePanelAi,

      CTCodeTypeGroupRela_DetailCom,
      CTCodeTypeGroupRela_ListCom,
    },

    setup() {
      ApplicationTypeId_Static.value = enumApplicationType.VueAppInCore_TS_30;
      ProgLangTypeId_Static.value = '09';

      const strTitle = ref('CTCodeTypeGroupRela维护(Ai版-命令Schema)');
      const objPage = ref<CTCodeTypeGroupRelaCRUDAiEx>();
      const arrCTCodeTypeGroup = ref<clsCTCodeTypeGroupEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<CTCodeTypeGroupRelaQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<CTCodeTypeGroupRelaQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<CTCodeTypeGroupRelaCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<CTCodeTypeGroupRelaCommandSpecAi>>(getFeatureCommandsAi());
      const isAddCodeTypePanelVisible = ref(false);
      const canOpenAddCodeTypePanel = computed(() => {
        return ctGroupId_q.value !== '' && ctGroupId_q.value !== '0';
      });

      const auxControlValues = reactive<Record<string, string>>({});

      const ensurePage = (): CTCodeTypeGroupRelaCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: CTCodeTypeGroupRelaQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'ctGroupId_q':
            return ctGroupId_q.value;
          case 'codeTypeId_q':
            return codeTypeId_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: CTCodeTypeGroupRelaQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'ctGroupId_q':
            ctGroupId_q.value = value;
            break;
          case 'codeTypeId_q':
            codeTypeId_q.value = value;
            break;
          default:
            break;
        }
      };

      const getSelectOptions = (optionsKey?: 'ctGroupId_q' | 'codeTypeId_q' | string) => {
        switch (optionsKey) {
          case 'ctGroupId_q':
            return arrCTCodeTypeGroup.value ?? [];
          case 'codeTypeId_q':
            return arrvCodeType_Sim.value ?? [];
          default:
            return [];
        }
      };

      const getSelectValue = (item: any, optionsKey?: 'ctGroupId_q' | 'codeTypeId_q' | string) => {
        switch (optionsKey) {
          case 'ctGroupId_q':
            return item.ctGroupId;
          case 'codeTypeId_q':
            return item.codeTypeId;
          default:
            return '';
        }
      };

      const getSelectText = (item: any, optionsKey?: 'ctGroupId_q' | 'codeTypeId_q' | string) => {
        switch (optionsKey) {
          case 'ctGroupId_q':
            return item.groupName;
          case 'codeTypeId_q':
            return item.codeTypeName;
          default:
            return '';
        }
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

      const updateAuxControlValue = (commandId: CTCodeTypeGroupRelaCommandIdAi, value: string) => {
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

      const runCommand = async (commandId: CTCodeTypeGroupRelaCommandIdAi) => {
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

      function btn_Click(strCommandName: string, key: CTCodeTypeGroupRelaKey | null) {
        CTCodeTypeGroupRelaCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          ctGroupId_q,
          codeTypeId_q,
        });

        const queryOptions = await loadQueryOptionsAi();
        arrCTCodeTypeGroup.value = queryOptions.arrCTCodeTypeGroup;
        arrvCodeType_Sim.value = queryOptions.arrvCodeType_Sim;

        CTCodeTypeGroupRelaCRUDAiEx.vuebtn_Click = btn_Click;
        CTCodeTypeGroupRelaCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new CTCodeTypeGroupRelaCRUDAiEx();
        await objPage.value.PageLoadCache();
      });

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editCTCodeTypeGroupRela', params: { codeTypeId: data.codeTypeId } });
      };

      const openAddCodeTypePanel = () => {
        if (!canOpenAddCodeTypePanel.value) {
          alert('请先选择代码组');
          return;
        }
        isAddCodeTypePanelVisible.value = true;
      };

      const closeAddCodeTypePanel = () => {
        isAddCodeTypePanelVisible.value = false;
      };

      const onCodeTypeAddedToGroup = async () => {
        closeAddCodeTypePanel();
        const page = ensurePage();
        if (page == null) return;
        await page.executeCommand('query');
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refCTCodeTypeGroupRela_Edit,

        refCTCodeTypeGroupRela_DetailAi,
        refCTCodeTypeGroupRela_List,
        showErrorMessage,
        dataListCTCodeTypeGroupRela,
        emptyRecNumInfo,
        dataColumn,
        queryRow1,
        queryRow2,
        queryCommands,
        featureCommands,
        isAddCodeTypePanelVisible,
        canOpenAddCodeTypePanel,
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
        ctGroupId_q,
        runCommand,
        EditTabRelaInfo,
        SortColumn,
        openAddCodeTypePanel,
        closeAddCodeTypePanel,
        onCodeTypeAddedToGroup,
      };
    },
  });
</script>

<style scoped>
  .add-code-type-modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 3000;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 80px;
  }

  .add-code-type-modal {
    width: 760px;
    max-width: calc(100vw - 32px);
    background: #fff;
    border-radius: 6px;
    border: 1px solid #d7e3ef;
    box-shadow: 0 8px 28px rgba(24, 48, 88, 0.22);
    padding: 12px;
  }
</style>
