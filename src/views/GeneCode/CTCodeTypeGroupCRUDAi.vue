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
          <label id="lblCTCodeTypeGroupList" class="col-form-label text-info" style="width: 250px"
            >CTCodeTypeGroup列表</label
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
      <CTCodeTypeGroup_ListCom
        ref="refCTCodeTypeGroup_List"
        :items="dataListCTCodeTypeGroup"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        :relation-map="groupRelaMap"
        :relation-loading-map="groupRelaLoadingMap"
        :show-relation-manage="true"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
        @on-add-rela="openAddRelaDialog"
        @on-del-rela="deleteRela"
      />
      <div id="divPager" class="pager"></div>
      <input id="hidSortCTCodeTypeGroupBy" type="hidden" />
    </div>

    <a-modal v-model:visible="relaDialogVisible" :title="relaDialogTitle" :width="560">
      <div class="table-responsive">
        <table class="table table-bordered table-sm mb-0">
          <tbody>
            <tr>
              <td class="text-right" style="width: 120px">应用类型</td>
              <td>
                <select
                  v-model="selectedApplicationTypeId"
                  class="form-control form-control-sm"
                  @change="onApplicationTypeChange"
                >
                  <option value="0">请选择应用类型</option>
                  <option
                    v-for="item in applicationTypeOptions"
                    :key="item.applicationTypeId"
                    :value="item.applicationTypeId.toString()"
                  >
                    {{ item.applicationTypeName }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="text-right" style="width: 120px">代码类型</td>
              <td>
                <div v-if="showCodeTypeFallbackTip" class="text-warning mb-1">
                  当前应用类型未维护关系，已显示全部代码类型
                </div>
                <input
                  v-model="codeTypeKeyword"
                  class="form-control form-control-sm mb-1"
                  placeholder="搜索代码类型(名称/ID)"
                />
                <select v-model="selectedCodeTypeId" class="form-control form-control-sm">
                  <option value="">请选择代码类型</option>
                  <option
                    v-for="item in filteredCodeTypeOptions"
                    :key="item.codeTypeId"
                    :value="item.codeTypeId"
                  >
                    {{ item.codeTypeName }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="text-right">是否主组</td>
              <td>
                <select
                  v-model="selectedIsMainGroup"
                  class="form-control form-control-sm"
                  style="width: 160px"
                >
                  <option value="false">否</option>
                  <option value="true">是</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="text-right">序号</td>
              <td>
                <input
                  v-model.number="selectedOrderNum"
                  type="number"
                  class="form-control form-control-sm"
                  style="width: 160px"
                  min="0"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <template #footer>
        <a-button @click="relaDialogVisible = false">取消</a-button>
        <a-button type="primary" @click="saveRela">确定添加</a-button>
      </template>
    </a-modal>

    <CTCodeTypeGroup_EditCom ref="refCTCodeTypeGroup_Edit" />
    <CTCodeTypeGroup_DetailCom ref="refCTCodeTypeGroup_DetailAi" />
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref, reactive, watch, computed } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCTCodeTypeGroup_Edit,
    refCTCodeTypeGroup_DetailAi,
    refCTCodeTypeGroup_List,
    showErrorMessage,
    dataListCTCodeTypeGroup,
    emptyRecNumInfo,
    dataColumn,
    ctGroupId_q,
    groupName_q,
    groupENName_q,
    inUse_q,
    inUse_f,
  } from '@/views/GeneCode/CTCodeTypeGroupVueShare';

  import CTCodeTypeGroup_EditCom from '@/views/GeneCode/CTCodeTypeGroup_EditAi.vue';

  import CTCodeTypeGroup_DetailCom from '@/views/GeneCode/CTCodeTypeGroup_DetailAi.vue';
  import CTCodeTypeGroup_ListCom from '@/views/GeneCode/CTCodeTypeGroup_ListAi.vue';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import CTCodeTypeGroupCRUDAiEx from '@/views/GeneCode/CTCodeTypeGroupCRUDAiEx';
  import { CTCodeTypeGroupKey } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
  import { clsCTCodeTypeGroupRelaEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import {
    CTCodeTypeGroupRela_AddNewRecordAsync,
    CTCodeTypeGroupRela_DelRecordAsync,
    CTCodeTypeGroupRela_GetObjLstAsync,
  } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';
  import { ApplicationType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { AppCodeTypeRela_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
  import { vCodeType_Sim_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { Format } from '@/ts/PubFun/clsString';
  import {
    getQueryRowsAi,
    initQueryDefaultsAi,
    loadQueryOptionsAi,
    CTCodeTypeGroupQueryFieldSpecAi,
  } from '@/viewsBase/GeneCode/CTCodeTypeGroupCRUDAiQuery';
  import {
    loadFeatureOptionsAi,
    getFeatureCommandsAi,
    getQueryCommandsAi,
    CTCodeTypeGroupCommandIdAi,
    CTCodeTypeGroupCommandSpecAi,
  } from '@/viewsBase/GeneCode/CTCodeTypeGroupCRUDAiCommands';

  export default defineComponent({
    name: 'CTCodeTypeGroupCRUDAi',
    components: {
      CTCodeTypeGroup_EditCom,

      CTCodeTypeGroup_DetailCom,
      CTCodeTypeGroup_ListCom,
    },

    setup() {
      /*__VIEW_VARIABLES_INIT_CODE__*/

      type GroupRelaUi = {
        codeTypeId: string;
        codeTypeName: string;
        isMainGroup: boolean;
        orderNum: number;
      };

      const strTitle = ref('CTCodeTypeGroup维护(Ai版-命令Schema)');
      const objPage = ref<CTCodeTypeGroupCRUDAiEx>();

      const { row1, row2 } = getQueryRowsAi();
      const queryRow1 = ref<Array<CTCodeTypeGroupQueryFieldSpecAi>>(row1);
      const queryRow2 = ref<Array<CTCodeTypeGroupQueryFieldSpecAi>>(row2);

      const queryCommands = ref<Array<CTCodeTypeGroupCommandSpecAi>>(getQueryCommandsAi());
      const featureCommands = ref<Array<CTCodeTypeGroupCommandSpecAi>>(getFeatureCommandsAi());

      const auxControlValues = reactive<Record<string, string>>({});
      const groupRelaMap = reactive<Record<string, Array<GroupRelaUi>>>({});
      const groupRelaLoadingMap = reactive<Record<string, boolean>>({});

      const codeTypeOptions = ref<Array<clsvCodeType_SimEN>>([]);
      const applicationTypeOptions = ref<Array<clsApplicationTypeEN>>([]);
      const appCodeTypeRelaOptions = ref<Array<clsAppCodeTypeRelaEN>>([]);
      const codeTypeNameMap = reactive<Record<string, string>>({});
      const codeTypeOptionsByAppType = ref<Array<clsvCodeType_SimEN>>([]);

      const relaDialogVisible = ref(false);
      const relaDialogTitle = ref('添加代码类型到组');
      const currentGroupId = ref('');
      const selectedApplicationTypeId = ref('0');
      const codeTypeKeyword = ref('');
      const showCodeTypeFallbackTip = ref(false);
      const selectedCodeTypeId = ref('');
      const selectedIsMainGroup = ref('false');
      const selectedOrderNum = ref(0);

      const filteredCodeTypeOptions = computed(() => {
        const keyword = codeTypeKeyword.value.trim().toLowerCase();
        if (keyword === '') return codeTypeOptionsByAppType.value;
        return codeTypeOptionsByAppType.value.filter((x) => {
          const name = (x.codeTypeName || '').toLowerCase();
          const id = (x.codeTypeId || '').toLowerCase();
          return name.includes(keyword) || id.includes(keyword);
        });
      });

      const ensurePage = (): CTCodeTypeGroupCRUDAiEx | null => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return null;
        }
        return objPage.value;
      };

      const getQueryValue = (key: CTCodeTypeGroupQueryFieldSpecAi['key']): string => {
        switch (key) {
          case 'ctGroupId_q':
            return ctGroupId_q.value;
          case 'groupName_q':
            return groupName_q.value;
          case 'groupENName_q':
            return groupENName_q.value;
          case 'inUse_q':
            return inUse_q.value;
          default:
            return '';
        }
      };

      const setQueryValue = (key: CTCodeTypeGroupQueryFieldSpecAi['key'], value: string) => {
        switch (key) {
          case 'ctGroupId_q':
            ctGroupId_q.value = value;
            break;
          case 'groupName_q':
            groupName_q.value = value;
            break;
          case 'groupENName_q':
            groupENName_q.value = value;
            break;
          case 'inUse_q':
            inUse_q.value = value;
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

      const updateAuxControlValue = (commandId: CTCodeTypeGroupCommandIdAi, value: string) => {
        auxControlValues[commandId] = value;

        const command = featureCommands.value.find((x) => x.id === commandId);
        if (command && command.fieldNameCamel) {
          switch (command.fieldNameCamel) {
            case 'inUse':
              inUse_f.value = value;
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

      const runCommand = async (commandId: CTCodeTypeGroupCommandIdAi) => {
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

      const ensureCodeTypeOptions = async () => {
        if (codeTypeOptions.value.length > 0) return;
        const arrCodeTypes = await vCodeType_Sim_GetObjLstCache();
        codeTypeOptions.value = arrCodeTypes;
        arrCodeTypes.forEach((item) => {
          codeTypeNameMap[item.codeTypeId] = item.codeTypeName;
        });
      };

      const ensureApplicationTypeOptions = async () => {
        if (applicationTypeOptions.value.length > 0) return;
        const arrApplicationType = await ApplicationType_GetObjLstCache();
        applicationTypeOptions.value = arrApplicationType.filter((x) => x.isVisible === true);
      };

      const ensureAppCodeTypeRelaOptions = async () => {
        if (appCodeTypeRelaOptions.value.length > 0) return;
        appCodeTypeRelaOptions.value = await AppCodeTypeRela_GetObjLstCache();
      };

      const refreshCodeTypeOptionsByApplicationType = async () => {
        await ensureCodeTypeOptions();
        await ensureAppCodeTypeRelaOptions();

        const intApplicationTypeId = Number(selectedApplicationTypeId.value || '0');
        if (intApplicationTypeId <= 0) {
          codeTypeOptionsByAppType.value = [];
          showCodeTypeFallbackTip.value = false;
          selectedCodeTypeId.value = '';
          return;
        }

        const arrAppCodeTypeRela = appCodeTypeRelaOptions.value
          .filter((x) => x.applicationTypeId === intApplicationTypeId)
          .sort((a, b) => a.orderNum - b.orderNum);

        const hsCodeTypeId = new Set(arrAppCodeTypeRela.map((x) => x.codeTypeId));
        let arrCodeType = codeTypeOptions.value.filter((x) => hsCodeTypeId.has(x.codeTypeId));

        // 如果应用类型关系表未维护（或为空），兜底显示全量代码类型，避免下拉项过少。
        if (arrCodeType.length === 0) {
          arrCodeType = codeTypeOptions.value;
          showCodeTypeFallbackTip.value = true;
        } else {
          showCodeTypeFallbackTip.value = false;
        }

        codeTypeOptionsByAppType.value = arrCodeType;

        if (arrCodeType.some((x) => x.codeTypeId === selectedCodeTypeId.value) === false) {
          selectedCodeTypeId.value = '';
        }
      };

      const onApplicationTypeChange = async () => {
        await refreshCodeTypeOptionsByApplicationType();
      };

      const loadGroupRelaByCtGroupId = async (ctGroupId: string) => {
        if (ctGroupId == null || ctGroupId === '') return;
        groupRelaLoadingMap[ctGroupId] = true;
        try {
          const whereCond = Format("{0}='{1}'", clsCTCodeTypeGroupRelaEN.con_CtGroupId, ctGroupId);
          const arrRela = await CTCodeTypeGroupRela_GetObjLstAsync(whereCond);
          groupRelaMap[ctGroupId] = arrRela.map((item) => ({
            codeTypeId: item.codeTypeId,
            codeTypeName: codeTypeNameMap[item.codeTypeId] || item.codeTypeId,
            isMainGroup: item.isMainGroup,
            orderNum: item.orderNum,
          }));
        } catch (e) {
          console.error('加载组关联代码类型失败:', e);
          groupRelaMap[ctGroupId] = [];
        } finally {
          groupRelaLoadingMap[ctGroupId] = false;
        }
      };

      const openAddRelaDialog = async (data: {
        ctGroupId: string;
        groupName?: string;
        applicationTypeId?: number;
      }) => {
        await ensureCodeTypeOptions();
        await ensureApplicationTypeOptions();
        currentGroupId.value = data.ctGroupId;
        selectedApplicationTypeId.value = (data.applicationTypeId || 0).toString();
        codeTypeKeyword.value = '';
        showCodeTypeFallbackTip.value = false;
        selectedCodeTypeId.value = '';
        selectedIsMainGroup.value = 'false';
        selectedOrderNum.value = 0;
        await refreshCodeTypeOptionsByApplicationType();
        relaDialogTitle.value = `为组[${data.groupName || data.ctGroupId}]添加代码类型`;
        relaDialogVisible.value = true;
      };

      const saveRela = async () => {
        if (currentGroupId.value === '') return;
        if (selectedCodeTypeId.value === '') {
          alert('请选择代码类型!');
          return;
        }

        const objRela = new clsCTCodeTypeGroupRelaEN();
        objRela.SetCtGroupId(currentGroupId.value);
        objRela.SetCodeTypeId(selectedCodeTypeId.value);
        objRela.SetIsMainGroup(selectedIsMainGroup.value === 'true');
        objRela.SetOrderNum(Number(selectedOrderNum.value) || 0);

        try {
          const returnBool = await CTCodeTypeGroupRela_AddNewRecordAsync(objRela);
          if (returnBool === false) {
            alert('添加关系失败!');
            return;
          }
          relaDialogVisible.value = false;
          await loadGroupRelaByCtGroupId(currentGroupId.value);
        } catch (e) {
          const strMsg = `添加关系失败:${e}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const deleteRela = async (data: {
        ctGroupId: string;
        codeTypeId: string;
        codeTypeName?: string;
        groupName?: string;
        orderNum?: number;
        isMainGroup?: boolean;
      }) => {
        const strName = data.codeTypeName || data.codeTypeId;
        const strIsMainGroup = data.isMainGroup === true ? '是' : '否';
        const strConfirmMsg = `确认删除如下关系吗?\n组: ${
          data.groupName || data.ctGroupId
        }\n代码类型: ${strName}(${data.codeTypeId})\n是否主组: ${strIsMainGroup}\n序号: ${
          data.orderNum ?? 0
        }`;
        if (confirm(strConfirmMsg) === false) return;
        try {
          const returnInt = await CTCodeTypeGroupRela_DelRecordAsync({
            ctGroupId: data.ctGroupId,
            codeTypeId: data.codeTypeId,
          });
          if (returnInt <= 0) {
            alert('删除关系失败!');
            return;
          }
          await loadGroupRelaByCtGroupId(data.ctGroupId);
        } catch (e) {
          const strMsg = `删除关系失败:${e}`;
          console.error(strMsg);
          alert(strMsg);
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

      function btn_Click(strCommandName: string, key: CTCodeTypeGroupKey | null) {
        CTCodeTypeGroupCRUDAiEx.btn_Click(strCommandName, key);
      }

      onMounted(async () => {
        initQueryDefaultsAi({
          ctGroupId_q,
          groupName_q,
          groupENName_q,
          inUse_q,
        });

        await loadQueryOptionsAi();

        const featureOptions = await loadFeatureOptionsAi();
        console.log('featureOptions:', featureOptions);
        inUse_f.value = '0';

        featureCommands.value.forEach((cmd) => {
          if (cmd.needAuxControl) {
            auxControlValues[cmd.id] = '0';
          }
        });

        CTCodeTypeGroupCRUDAiEx.vuebtn_Click = btn_Click;
        CTCodeTypeGroupCRUDAiEx.GetPropValue = GetPropValue;
        objPage.value = new CTCodeTypeGroupCRUDAiEx();
        await ensureCodeTypeOptions();
        await ensureApplicationTypeOptions();
        await objPage.value.PageLoadCache();
      });

      watch(
        () => dataListCTCodeTypeGroup.value.map((x) => x.ctGroupId).join(','),
        async (newVal) => {
          if (newVal === '') return;
          const arrGroupId = dataListCTCodeTypeGroup.value.map((x) => x.ctGroupId);
          for (const ctGroupId of arrGroupId) {
            await loadGroupRelaByCtGroupId(ctGroupId);
          }
        },
        { immediate: true },
      );

      const SortColumn = async (data: any) => {
        const page = ensurePage();
        if (page == null) return;
        await page.SortColumn(data.sortColumnKey, data.sortDirection);
      };

      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        router.push({ name: 'editCTCodeTypeGroup', params: { ctGroupId: data.ctGroupId } });
      };

      return {
        strTitle,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refCTCodeTypeGroup_Edit,

        refCTCodeTypeGroup_DetailAi,
        refCTCodeTypeGroup_List,
        showErrorMessage,
        dataListCTCodeTypeGroup,
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
        groupRelaMap,
        groupRelaLoadingMap,
        relaDialogVisible,
        relaDialogTitle,
        applicationTypeOptions,
        selectedApplicationTypeId,
        onApplicationTypeChange,
        codeTypeKeyword,
        showCodeTypeFallbackTip,
        codeTypeOptions,
        filteredCodeTypeOptions,
        selectedCodeTypeId,
        selectedIsMainGroup,
        selectedOrderNum,
        openAddRelaDialog,
        saveRela,
        deleteRela,
        EditTabRelaInfo,
        SortColumn,
      };
    },
  });
</script>

<style scoped></style>
