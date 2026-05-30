<template>
  <div class="page-wrap">
    <div class="page-title-wrap">
      <h4 class="page-title">模板函数导航视图</h4>
      <span class="text-warning small">{{ tipMsg }}</span>
    </div>

    <div class="content-wrap">
      <div class="left-pane">
        <div class="pane-title">模板 - 前后端 - 代码类型</div>
        <tree
          ref="treeRef"
          :tree-data="treeData"
          :selected-node="selectedNode"
          @on-node-click="onNodeClick"
        />
      </div>

      <div class="right-pane">
        <div class="pane-title">
          函数列表
          <span class="small ml-2 text-muted">{{ selectedPath }}</span>
        </div>

        <div class="toolbar-wrap">
          <label class="toolbar-label">新增函数:</label>
          <input
            v-model="addSearchKeyword"
            type="text"
            class="form-control form-control-sm toolbar-search"
            placeholder="搜索函数名/函数ID"
          />
          <select v-model="selectedFuncIdToAdd" class="form-control form-control-sm toolbar-select">
            <option value="">请选择函数</option>
            <option
              v-for="fn in candidateFunctionsFiltered"
              :key="fn.funcId4GC"
              :value="fn.funcId4GC"
            >
              {{ fn.funcName }} ({{ fn.funcId4GC }}) [{{ getFuncCodeTypeName(fn) }}]
            </option>
          </select>
          <label class="toolbar-label ml-2">
            <input v-model="newRelIsGeneCode" type="checkbox" class="mr-1" />是否生成
          </label>
          <button class="btn btn-sm btn-primary ml-2" @click="addRelation">添加到当前模板</button>
          <button class="btn btn-sm btn-outline-danger ml-2" @click="deleteSelectedRelations">
            批量删除
          </button>
        </div>

        <div class="toolbar-wrap">
          <label class="toolbar-label">复制到新代码类型:</label>
          <select
            v-model="copyTargetCodeTypeId"
            class="form-control form-control-sm toolbar-select"
            :disabled="copyTargetCodeTypeOptions.length === 0"
          >
            <option value="">请选择目标代码类型</option>
            <option
              v-for="item in copyTargetCodeTypeOptions"
              :key="item.codeTypeId"
              :value="item.codeTypeId"
            >
              {{ item.codeTypeSimName || item.codeTypeName || item.codeTypeId }}
              [{{ item.codeTypeId }}]
            </option>
          </select>
          <button class="btn btn-sm btn-success ml-2" @click="copySelectedToTargetCodeType">
            复制到新代码类型
          </button>
          <span class="small text-muted ml-2">仅显示与选中函数代码类型同语言的代码类型</span>
        </div>

        <div class="table-wrap">
          <table class="table table-bordered table-hover table-sm">
            <thead>
              <tr>
                <th style="width: 42px">
                  <input
                    :checked="isAllSelected"
                    type="checkbox"
                    @change="toggleSelectAll(($event.target as HTMLInputElement).checked)"
                  />
                </th>
                <th style="width: 120px">函数ID</th>
                <th>函数名</th>
                <th style="width: 100px">代码类型</th>
                <th style="width: 120px">函数代码类型</th>
                <th style="width: 120px">语言类型</th>
                <th style="width: 100px">前后端</th>
                <th style="width: 80px">生成代码</th>
                <th style="width: 80px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in functionRows" :key="item.key">
                <td>
                  <input
                    :checked="selectedRowKeys.includes(item.key)"
                    type="checkbox"
                    @change="
                      toggleRowSelection(item.key, ($event.target as HTMLInputElement).checked)
                    "
                  />
                </td>
                <td>{{ item.funcId4GC }}</td>
                <td>{{ item.funcName }}</td>
                <td>{{ item.codeTypeName }}</td>
                <td>{{ item.funcCodeTypeName }}</td>
                <td>{{ item.progLangTypeName }}</td>
                <td>{{ item.frontOrBack }}</td>
                <td>
                  <input
                    :checked="item.isGeneCode"
                    type="checkbox"
                    @change="toggleIsGeneCode(item, ($event.target as HTMLInputElement).checked)"
                  />
                </td>
                <td>
                  <button class="btn btn-sm btn-outline-danger" @click="deleteRelation(item)">
                    删除
                  </button>
                </td>
              </tr>
              <tr v-if="functionRows.length === 0">
                <td colspan="9" class="text-center text-secondary">请在左侧选择一个代码类型</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'bootstrap/dist/css/bootstrap.css';
  import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue';

  import type { TreeNode } from '@/ts/components/TreeNode';
  import tree from '@/ts/components/myTree.vue';

  import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
  import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';

  import {
    vCodeType_Sim_GetObjLstAsync,
    vCodeType_Sim_GetObjLstCache,
  } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { CodeType_GetObjByCodeTypeIdAsync } from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
  import {
    FunctionTemplateRela_AddNewRecordAsync,
    FunctionTemplateRela_DelRecordAsync,
    FunctionTemplateRela_GetObjByKeyAsync,
    FunctionTemplateRela_GetObjLstAsync,
    FunctionTemplateRela_UpdateRecordAsync,
  } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateRelaWApi';
  import {
    FunctionTemplate_GetObjByFunctionTemplateIdAsync,
    FunctionTemplate_GetObjLstAsync,
    FunctionTemplate_GetObjLstCache,
  } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { vFunction4GeneCode_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
  import { Function4GeneCode_GetObjByKeyAsync } from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
  import {
    vFunctionTemplateRela_Sim_GetObjLstAsync,
    vFunctionTemplateRela_Sim_GetObjLstCache,
    vFunctionTemplateRela_Sim_ReFreshThisCache,
  } from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
  import {
    ProgLangType_GetObjLstAsync,
    ProgLangType_GetObjLstCache,
  } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { Format } from '@/ts/PubFun/clsString';
  import { vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';

  interface SelectedCodeType {
    templateId: string;
    templateName: string;
    frontOrBack: string;
    codeTypeId: string;
    codeTypeName: string;
  }

  interface FunctionRow {
    key: string;
    mId: number;
    codeTypeId: string;
    funcId4GC: string;
    funcName: string;
    codeTypeName: string;
    funcCodeTypeName: string;
    progLangTypeName: string;
    frontOrBack: string;
    isGeneCode: boolean;
  }

  export default defineComponent({
    name: 'FunctionTemplateRelaTree',
    components: {
      tree,
    },
    setup() {
      const treeRef = ref();
      const selectedNode = ref<TreeNode | null>(null);
      const treeData = ref<TreeNode[]>([]);
      const tipMsg = ref('');

      const functionRows = ref<FunctionRow[]>([]);
      const selectedCodeType = ref<SelectedCodeType | null>(null);
      const selectedFuncIdToAdd = ref('');
      const addSearchKeyword = ref('');
      const newRelIsGeneCode = ref(true);
      const copyTargetCodeTypeId = ref('');
      const selectedRowKeys = ref<Array<string>>([]);
      const nodeStoreKey = 'FunctionTemplateRelaTree_SelectedNodeId';

      const selectedPath = computed(() => {
        if (selectedCodeType.value == null) return '';
        return `${selectedCodeType.value.templateName} / ${selectedCodeType.value.frontOrBack} / ${selectedCodeType.value.codeTypeName}`;
      });

      const isAllSelected = computed(() => {
        if (functionRows.value.length === 0) return false;
        return selectedRowKeys.value.length === functionRows.value.length;
      });

      const relationMap = new Map<string, clsvFunctionTemplateRela_SimEN[]>();
      const functionMap = new Map<string, clsvFunction4GeneCode_SimEN>();
      const functionMapByNormalizedKey = new Map<string, clsvFunction4GeneCode_SimEN>();
      const codeTypeMap = new Map<string, clsvCodeType_SimEN>();
      const progLangTypeMap = new Map<string, clsProgLangTypeEN>();
      const codeTypeNodeMeta = new Map<string, SelectedCodeType>();

      const normalizeFuncKey = (value: string): string => (value || '').trim().toLowerCase();

      const indexFunction = (func: clsvFunction4GeneCode_SimEN) => {
        const keyId4GC = normalizeFuncKey(func.funcId4GC);
        if (keyId4GC) {
          functionMapByNormalizedKey.set(keyId4GC, func);
        }
        const keyId4Code = normalizeFuncKey(func.funcId4Code || '');
        if (keyId4Code && !functionMapByNormalizedKey.has(keyId4Code)) {
          functionMapByNormalizedKey.set(keyId4Code, func);
        }
      };

      const getFunctionByKey = (funcId4GC: string): clsvFunction4GeneCode_SimEN | undefined => {
        const rawKey = funcId4GC || '';
        const trimmedKey = rawKey.trim();
        return (
          functionMap.get(rawKey) ||
          functionMap.get(trimmedKey) ||
          functionMapByNormalizedKey.get(normalizeFuncKey(trimmedKey))
        );
      };

      const candidateFunctions = computed(() => {
        const meta = selectedCodeType.value;
        if (meta == null) return [] as clsvFunction4GeneCode_SimEN[];
        const relas = relationMap.get(meta.templateId) ?? [];
        const existingSet = new Set(
          relas.filter((x) => x.codeTypeId === meta.codeTypeId).map((x) => x.funcId4GC),
        );
        return Array.from(functionMap.values())
          .filter((x) => !existingSet.has(x.funcId4GC))
          .sort((a, b) => a.funcName.localeCompare(b.funcName));
      });

      const selectedRows = computed(() =>
        functionRows.value.filter((x) => selectedRowKeys.value.includes(x.key)),
      );

      const selectedRowsForCopy = computed(() => {
        return selectedRows.value
          .map((row) => {
            const func = getFunctionByKey(row.funcId4GC);
            if (!func) return null;
            return { row, func };
          })
          .filter((x): x is { row: FunctionRow; func: clsvFunction4GeneCode_SimEN } => x != null);
      });

      const copySourceFunc = computed(() => {
        if (selectedRowsForCopy.value.length === 0) return null;
        return selectedRowsForCopy.value[0].func;
      });

      const copyTargetCodeTypeOptions = computed(() => {
        const sourceFunc = copySourceFunc.value;
        if (!sourceFunc) return [] as clsvCodeType_SimEN[];

        const sourceCodeType = codeTypeMap.get(sourceFunc.funcCodeTypeId || '');
        const sourceProgLangTypeId =
          sourceCodeType?.progLangTypeId || sourceFunc.progLangTypeId || '';
        if (!sourceProgLangTypeId) return [] as clsvCodeType_SimEN[];

        const currentCodeTypeId = selectedCodeType.value?.codeTypeId || '';
        return Array.from(codeTypeMap.values())
          .filter((codeType) => codeType.progLangTypeId === sourceProgLangTypeId)
          .filter((codeType) => codeType.codeTypeId !== currentCodeTypeId)
          .sort((a, b) => {
            const left = a.codeTypeSimName || a.codeTypeName || a.codeTypeId;
            const right = b.codeTypeSimName || b.codeTypeName || b.codeTypeId;
            return left.localeCompare(right);
          });
      });

      const syncCopyTargetCodeType = () => {
        if (copyTargetCodeTypeOptions.value.length === 0) {
          copyTargetCodeTypeId.value = '';
          return;
        }
        if (
          copyTargetCodeTypeId.value === '' ||
          !copyTargetCodeTypeOptions.value.some((x) => x.codeTypeId === copyTargetCodeTypeId.value)
        ) {
          copyTargetCodeTypeId.value = copyTargetCodeTypeOptions.value[0].codeTypeId;
        }
      };

      const copySelectedToTargetCodeType = async () => {
        const meta = selectedCodeType.value;
        if (meta == null) {
          alert('请先在左侧选择一个模板代码类型节点！');
          return;
        }
        if (selectedRowsForCopy.value.length === 0) {
          alert('请先勾选要复制的函数！');
          return;
        }
        const targetCodeTypeId = copyTargetCodeTypeId.value.trim();
        if (!targetCodeTypeId) {
          alert('请选择目标代码类型！');
          return;
        }
        if (targetCodeTypeId === meta.codeTypeId) {
          alert('目标代码类型不能和当前代码类型相同！');
          return;
        }

        const targetCodeType = codeTypeMap.get(targetCodeTypeId);
        const targetRegionTypeId = targetCodeType?.regionTypeId || '0001';
        const targetFuncCodeTypeId = targetCodeTypeId;
        const whereCond = Format(
          "{0}='{1}'",
          clsFunctionTemplateRelaEN.con_FunctionTemplateId,
          meta.templateId,
        );
        const existingRows = (await FunctionTemplateRela_GetObjLstAsync(whereCond)) ?? [];
        const existingSet = new Set(
          existingRows.map((x) => `${(x.codeTypeId || '').trim()}|${(x.funcId4GC || '').trim()}`),
        );

        let copiedCount = 0;
        let skippedCount = 0;
        for (const item of selectedRowsForCopy.value) {
          const rowKey = `${targetCodeTypeId}|${item.row.funcId4GC}`;
          if (existingSet.has(rowKey)) {
            skippedCount += 1;
            continue;
          }

          const obj = new clsFunctionTemplateRelaEN();
          obj.SetFunctionTemplateId(meta.templateId);
          obj.SetCodeTypeId(targetCodeTypeId);
          obj.SetRegionTypeId(targetRegionTypeId);
          obj.SetFuncCodeTypeId(item.func.funcCodeTypeId || targetFuncCodeTypeId);
          obj.SetFuncId4GC(item.row.funcId4GC);
          obj.SetIsGeneCode(item.row.isGeneCode);
          obj.SetOrderNum(item.row.mId > 0 ? item.row.mId : copiedCount + 1);

          const ok = await FunctionTemplateRela_AddNewRecordAsync(obj);
          if (!ok) {
            skippedCount += 1;
            continue;
          }
          copiedCount += 1;
          existingSet.add(rowKey);
        }

        if (copiedCount === 0) {
          alert('没有可复制的新记录，可能目标代码类型已存在这些函数。');
          return;
        }

        vFunctionTemplateRela_Sim_ReFreshThisCache(meta.templateId);
        await refreshCurrentSelectionRows();
        await loadAllData();
        selectedRowKeys.value = [];
        alert(`复制完成: 成功 ${copiedCount} 条，跳过 ${skippedCount} 条`);
      };

      const getFuncCodeTypeName = (func: clsvFunction4GeneCode_SimEN): string => {
        const codeType = codeTypeMap.get(func.funcCodeTypeId || '');
        return (
          codeType?.codeTypeSimName ||
          codeType?.codeTypeName ||
          func.funcCodeTypeId ||
          '未设置代码类型'
        );
      };

      const convertMainFuncToSim = (mainFunc: any): clsvFunction4GeneCode_SimEN => {
        const simFunc = new clsvFunction4GeneCode_SimEN();
        simFunc.funcId4GC = (mainFunc.funcId4GC || '').trim();
        simFunc.funcName = mainFunc.funcName || '';
        simFunc.funcId4Code = mainFunc.funcId4Code || '';
        simFunc.progLangTypeId = mainFunc.progLangTypeId || '';
        simFunc.funcCodeTypeId = mainFunc.funcCodeTypeId || '';
        return simFunc;
      };

      const upsertCodeTypeFromAny = (objCodeType: any) => {
        if (!objCodeType) return;
        const codeTypeId = (objCodeType.codeTypeId || '').trim();
        if (!codeTypeId) return;
        const simCodeType = new clsvCodeType_SimEN();
        simCodeType.codeTypeId = codeTypeId;
        simCodeType.codeTypeName = objCodeType.codeTypeName || '';
        simCodeType.codeTypeSimName = objCodeType.codeTypeSimName || '';
        simCodeType.frontOrBack = objCodeType.frontOrBack || '';
        simCodeType.regionTypeId = objCodeType.regionTypeId || '';
        simCodeType.progLangTypeId = objCodeType.progLangTypeId || '';
        codeTypeMap.set(codeTypeId, simCodeType);
      };

      const ensureCodeTypesLoadedByIds = async (codeTypeIds: string[]) => {
        const missingCodeTypeIds = Array.from(
          new Set(
            codeTypeIds
              .map((x) => (x || '').trim())
              .filter((x) => x !== '')
              .filter((x) => !codeTypeMap.has(x)),
          ),
        );
        if (missingCodeTypeIds.length === 0) return;

        const loadedCodeTypes = await Promise.allSettled(
          missingCodeTypeIds.map((codeTypeId) => CodeType_GetObjByCodeTypeIdAsync(codeTypeId)),
        );
        loadedCodeTypes.forEach((ret) => {
          if (ret.status !== 'fulfilled' || !ret.value) return;
          upsertCodeTypeFromAny(ret.value);
        });
      };

      const tryLoadFunctionByIdWithFallback = async (funcId4GC: string) => {
        const funcId = (funcId4GC || '').trim();
        if (!funcId || getFunctionByKey(funcId)) return;

        try {
          const simFunc = await vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(funcId);
          if (simFunc) {
            functionMap.set(simFunc.funcId4GC, simFunc);
            indexFunction(simFunc);
            return;
          }
        } catch (e) {
          console.error('Sim加载函数失败:', funcId, e);
        }

        try {
          const mainFunc = await Function4GeneCode_GetObjByKeyAsync({ funcId4GC: funcId });
          if (!mainFunc) return;
          const mappedFunc = convertMainFuncToSim(mainFunc);
          functionMap.set(mappedFunc.funcId4GC, mappedFunc);
          indexFunction(mappedFunc);
        } catch (e) {
          console.error('回退加载函数失败:', funcId, e);
        }
      };

      const candidateFunctionsFiltered = computed(() => {
        const kw = addSearchKeyword.value.trim().toLowerCase();
        if (kw === '') return candidateFunctions.value;
        return candidateFunctions.value.filter(
          (x) =>
            x.funcName.toLowerCase().includes(kw) ||
            x.funcId4GC.toLowerCase().includes(kw) ||
            (x.funcId4Code || '').toLowerCase().includes(kw),
        );
      });

      const normalizeFrontOrBack = (frontOrBack: string): string => {
        const value = (frontOrBack || '').trim();
        if (value.includes('前')) return '前端';
        if (value.includes('后')) return '后端';
        if (value.toLowerCase() === 'front') return '前端';
        if (value.toLowerCase() === 'back') return '后端';
        if (value === '') return '未分类';
        return value;
      };

      const inferFrontOrBackByCodeType = (codeTypeId: string, codeTypeName: string): string => {
        const merged = `${codeTypeId}|${codeTypeName}`.toLowerCase();
        if (merged.includes('vue') || merged.includes('前')) return '前端';
        if (merged.includes('webapi') || merged.includes('后')) return '后端';
        return '未分类';
      };

      const convertMainRelaToSim = (
        mainRela: clsFunctionTemplateRelaEN,
      ): clsvFunctionTemplateRela_SimEN => {
        const simRela = new clsvFunctionTemplateRela_SimEN();
        simRela.functionTemplateId = (mainRela.functionTemplateId || '').trim();
        simRela.funcId4GC = (mainRela.funcId4GC || '').trim();
        simRela.codeTypeId = (mainRela.codeTypeId || mainRela.funcCodeTypeId || '').trim();
        simRela.regionTypeId = mainRela.regionTypeId || '';
        simRela.sqlDsTypeId = '';
        simRela.isGeneCode = mainRela.isGeneCode;
        return simRela;
      };

      const getMergedRelaRowsByTemplateId = async (templateId: string) => {
        const strWhereCond = Format(
          "{0}='{1}'",
          clsFunctionTemplateRelaEN.con_FunctionTemplateId,
          templateId,
        );

        let simRows = (await vFunctionTemplateRela_Sim_GetObjLstCache(templateId)) ?? [];
        if (!simRows || simRows.length === 0) {
          simRows = (await vFunctionTemplateRela_Sim_GetObjLstAsync(strWhereCond)) ?? [];
        }
        const mainRows = (await FunctionTemplateRela_GetObjLstAsync(strWhereCond)) ?? [];

        const merged = new Map<string, clsvFunctionTemplateRela_SimEN>();
        simRows.forEach((row) => {
          const codeTypeId = (row.codeTypeId || '').trim();
          const funcId4GC = (row.funcId4GC || '').trim();
          if (!funcId4GC) return;
          merged.set(`${codeTypeId}|${funcId4GC}`, row);
        });
        mainRows.forEach((row) => {
          const mappedRow = convertMainRelaToSim(row);
          const codeTypeId = (mappedRow.codeTypeId || '').trim();
          const funcId4GC = (mappedRow.funcId4GC || '').trim();
          if (!funcId4GC) return;
          merged.set(`${codeTypeId}|${funcId4GC}`, mappedRow);
        });
        return Array.from(merged.values());
      };

      const getNodeIdByMeta = (meta: SelectedCodeType) => {
        return `${meta.templateId}|${meta.frontOrBack}|${meta.codeTypeId}`;
      };

      const getStoredNodeId = () => {
        return localStorage.getItem(nodeStoreKey) || '';
      };

      const setStoredNodeId = (nodeId: string) => {
        localStorage.setItem(nodeStoreKey, nodeId);
      };

      const makeNode = (
        id: string,
        label: string,
        type: string,
        children?: TreeNode[],
      ): TreeNode => {
        return {
          id,
          label,
          type,
          expanded: false,
          children,
          parentNode: null,
        };
      };

      const findNodeById = (nodes: TreeNode[], nodeId: string): TreeNode | null => {
        for (const node of nodes) {
          if (node.id === nodeId) return node;
          if (node.children && node.children.length > 0) {
            const found = findNodeById(node.children, nodeId);
            if (found) return found;
          }
        }
        return null;
      };

      const autoSelectNodeById = async (nodeId: string) => {
        if (!nodeId) return;
        await nextTick();
        const targetNode = findNodeById(treeData.value, nodeId);
        if (!targetNode) return;
        if (treeRef.value && typeof treeRef.value.toggleNode === 'function') {
          treeRef.value.toggleNode(targetNode);
        }
      };

      const buildFunctionRows = (meta: SelectedCodeType): FunctionRow[] => {
        const relas = relationMap.get(meta.templateId) ?? [];
        const keyedByRela = new Map<string, clsvFunctionTemplateRela_SimEN>();
        relas.forEach((x) => {
          if (x.codeTypeId !== meta.codeTypeId) return;
          keyedByRela.set(`${x.codeTypeId}|${x.funcId4GC}`, x);
        });

        const rowsFromView = Array.from(keyedByRela.values()).map((x) => {
          const func = getFunctionByKey(x.funcId4GC);
          const codeType = codeTypeMap.get(x.codeTypeId);
          const funcCodeType = codeTypeMap.get(func?.funcCodeTypeId || '');
          const progLangType = progLangTypeMap.get(func?.progLangTypeId || '');
          return {
            key: `${meta.templateId}|${x.codeTypeId}|${x.funcId4GC}`,
            mId: 0,
            codeTypeId: x.codeTypeId,
            funcId4GC: x.funcId4GC,
            funcName: func?.funcName || x.funcId4GC,
            codeTypeName: codeType?.codeTypeSimName || codeType?.codeTypeName || x.codeTypeId,
            funcCodeTypeName:
              funcCodeType?.codeTypeSimName ||
              funcCodeType?.codeTypeName ||
              func?.funcCodeTypeId ||
              '',
            progLangTypeName: progLangType?.progLangTypeSimName || func?.progLangTypeId || '',
            frontOrBack: meta.frontOrBack,
            isGeneCode: x.isGeneCode,
          } as FunctionRow;
        });
        return rowsFromView.sort((a, b) => a.funcName.localeCompare(b.funcName));
      };

      const ensureFunctionsForCodeTypeLoaded = async (
        relas: clsvFunctionTemplateRela_SimEN[],
        codeTypeId: string,
      ) => {
        const missingFuncIds = Array.from(
          new Set(
            relas
              .filter((x) => x.codeTypeId === codeTypeId)
              .map((x) => x.funcId4GC)
              .filter((funcId4GC) => !getFunctionByKey(funcId4GC)),
          ),
        );

        if (missingFuncIds.length === 0) return;

        const loadedFunctions = await Promise.allSettled(
          missingFuncIds.map((funcId4GC) =>
            vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(funcId4GC),
          ),
        );
        loadedFunctions.forEach((ret) => {
          if (ret.status !== 'fulfilled' || !ret.value) return;
          functionMap.set(ret.value.funcId4GC, ret.value);
          indexFunction(ret.value);
        });

        const stillMissingFuncIds = missingFuncIds.filter(
          (funcId4GC) => !getFunctionByKey(funcId4GC),
        );
        await Promise.allSettled(
          stillMissingFuncIds.map((funcId4GC) => tryLoadFunctionByIdWithFallback(funcId4GC)),
        );
      };

      const ensureFunctionsLoadedForRelations = async (relas: clsvFunctionTemplateRela_SimEN[]) => {
        const missingFuncIds = Array.from(
          new Set(
            relas
              .map((x) => (x.funcId4GC || '').trim())
              .filter((funcId4GC) => funcId4GC !== '')
              .filter((funcId4GC) => !getFunctionByKey(funcId4GC)),
          ),
        );

        if (missingFuncIds.length === 0) return;

        const loadedFunctions = await Promise.allSettled(
          missingFuncIds.map((funcId4GC) =>
            vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(funcId4GC),
          ),
        );
        loadedFunctions.forEach((ret) => {
          if (ret.status !== 'fulfilled' || !ret.value) return;
          functionMap.set(ret.value.funcId4GC, ret.value);
          indexFunction(ret.value);
        });

        const stillMissingFuncIds = missingFuncIds.filter(
          (funcId4GC) => !getFunctionByKey(funcId4GC),
        );
        await Promise.allSettled(
          stillMissingFuncIds.map((funcId4GC) => tryLoadFunctionByIdWithFallback(funcId4GC)),
        );
      };

      const refreshCurrentSelectionRows = async () => {
        const meta = selectedCodeType.value;
        if (meta == null) {
          functionRows.value = [];
          selectedRowKeys.value = [];
          return;
        }

        const relas = await getMergedRelaRowsByTemplateId(meta.templateId);
        relationMap.set(meta.templateId, relas);
        await ensureFunctionsForCodeTypeLoaded(relas, meta.codeTypeId);
        functionRows.value = buildFunctionRows(meta);

        try {
          const whereCond = Format(
            "{0}='{1}'",
            clsFunctionTemplateRelaEN.con_FunctionTemplateId,
            meta.templateId,
          );
          const arrDbRows = await FunctionTemplateRela_GetObjLstAsync(whereCond);
          const mIdMap = new Map<string, number>();
          arrDbRows.forEach((x) => mIdMap.set(`${x.codeTypeId}|${x.funcId4GC}`, x.mId));
          functionRows.value = functionRows.value.map((x) => ({
            ...x,
            mId: mIdMap.get(`${x.codeTypeId}|${x.funcId4GC}`) || 0,
          }));
          selectedRowKeys.value = selectedRowKeys.value.filter((key) =>
            functionRows.value.some((x) => x.key === key),
          );
        } catch (e) {
          console.error(e);
        }
      };

      const loadAllData = async () => {
        tipMsg.value = '加载数据中...';
        try {
          let [templates, codeTypes, progLangTypes] = await Promise.all([
            FunctionTemplate_GetObjLstCache(),
            vCodeType_Sim_GetObjLstCache(),

            ProgLangType_GetObjLstCache(),
          ]);
          let allFunctions = await vFunction4GeneCode_Sim_GetObjLstAsync('1=1');
          if (!templates || templates.length === 0) {
            templates = await FunctionTemplate_GetObjLstAsync('1=1');
          }
          if (!codeTypes || codeTypes.length === 0) {
            codeTypes = await vCodeType_Sim_GetObjLstAsync('1=1');
          }
          if (!allFunctions || allFunctions.length === 0) {
            allFunctions = await vFunction4GeneCode_Sim_GetObjLstAsync('1=1');
          }
          if (!progLangTypes || progLangTypes.length === 0) {
            progLangTypes = await ProgLangType_GetObjLstAsync('1=1');
          }

          let templateNodesSource: Array<{
            functionTemplateId: string;
            functionTemplateName: string;
          }> = (templates ?? []).map((x) => ({
            functionTemplateId: x.functionTemplateId,
            functionTemplateName: x.functionTemplateName,
          }));

          if (templateNodesSource.length === 0) {
            const dbRelas = (await FunctionTemplateRela_GetObjLstAsync('1=1')) ?? [];
            const fallbackTemplateIds = Array.from(
              new Set(
                dbRelas.map((x) => (x.functionTemplateId || '').trim()).filter((x) => x !== ''),
              ),
            );

            if (fallbackTemplateIds.length > 0) {
              const fallbackTemplates = await Promise.allSettled(
                fallbackTemplateIds.map((templateId) =>
                  FunctionTemplate_GetObjByFunctionTemplateIdAsync(templateId),
                ),
              );
              const templateNameMap = new Map<string, string>();
              fallbackTemplates.forEach((ret) => {
                if (ret.status !== 'fulfilled' || !ret.value) return;
                const templateId = (ret.value.functionTemplateId || '').trim();
                if (!templateId) return;
                templateNameMap.set(templateId, ret.value.functionTemplateName || templateId);
              });

              templateNodesSource = fallbackTemplateIds.map((templateId) => ({
                functionTemplateId: templateId,
                functionTemplateName: templateNameMap.get(templateId) || templateId,
              }));
            }
          }

          codeTypeMap.clear();
          (codeTypes ?? []).forEach((x) => codeTypeMap.set(x.codeTypeId, x));

          functionMap.clear();
          functionMapByNormalizedKey.clear();
          (allFunctions ?? []).forEach((x) => {
            functionMap.set(x.funcId4GC, x);
            indexFunction(x);
          });

          progLangTypeMap.clear();
          (progLangTypes ?? []).forEach((x) => progLangTypeMap.set(x.progLangTypeId, x));

          const rootNodes: TreeNode[] = [];
          codeTypeNodeMeta.clear();
          relationMap.clear();

          for (const template of templateNodesSource) {
            try {
              const relationRows = await getMergedRelaRowsByTemplateId(template.functionTemplateId);
              relationMap.set(template.functionTemplateId, relationRows);
              await ensureFunctionsLoadedForRelations(relationRows);
              const groupedByFront = new Map<string, Set<string>>();

              const codeTypeIdCandidates = new Set<string>();
              relationRows.forEach((row) => {
                const relaCodeTypeId = (row.codeTypeId || '').trim();
                if (relaCodeTypeId) codeTypeIdCandidates.add(relaCodeTypeId);
              });
              await ensureCodeTypesLoadedByIds(Array.from(codeTypeIdCandidates));

              for (const row of relationRows) {
                const codeTypeId = (row.codeTypeId || '').trim();
                if (!codeTypeId) continue;
                const codeType = codeTypeMap.get(codeTypeId);
                if (!codeType || codeType.inUse !== true) continue;
                const codeTypeName = codeType?.codeTypeSimName || codeType?.codeTypeName || codeTypeId;
                const frontOrBack =
                  codeType?.frontOrBack && codeType.frontOrBack.trim() !== ''
                    ? normalizeFrontOrBack(codeType.frontOrBack)
                    : inferFrontOrBackByCodeType(codeTypeId, codeTypeName);
                if (!groupedByFront.has(frontOrBack)) groupedByFront.set(frontOrBack, new Set());
                groupedByFront.get(frontOrBack)?.add(codeTypeId);
              }

              const frontNodes: TreeNode[] = [];
              groupedByFront.forEach((codeTypeIdSet, frontOrBack) => {
                const codeTypeNodes: TreeNode[] = [];

                Array.from(codeTypeIdSet).forEach((codeTypeId) => {
                  const codeType = codeTypeMap.get(codeTypeId);
                  const codeTypeName =
                    codeType?.codeTypeSimName || codeType?.codeTypeName || codeTypeId;
                  const nodeId = `${template.functionTemplateId}|${frontOrBack}|${codeTypeId}`;
                  codeTypeNodeMeta.set(nodeId, {
                    templateId: template.functionTemplateId,
                    templateName: template.functionTemplateName,
                    frontOrBack,
                    codeTypeId,
                    codeTypeName,
                  });

                  codeTypeNodes.push(
                    makeNode(nodeId, `${codeTypeName} (${codeTypeId})`, 'codeType', undefined),
                  );
                });

                codeTypeNodes.sort((a, b) => a.label.localeCompare(b.label));
                const frontId = `${template.functionTemplateId}|${frontOrBack}`;
                frontNodes.push(makeNode(frontId, frontOrBack, 'frontOrBack', codeTypeNodes));
              });

              frontNodes.sort((a, b) => a.label.localeCompare(b.label));
              const tplId = `tpl|${template.functionTemplateId}`;
              rootNodes.push(
                makeNode(
                  tplId,
                  `${template.functionTemplateName} (${template.functionTemplateId})`,
                  'template',
                  frontNodes,
                ),
              );
            } catch (e) {
              console.error('构建模板树节点失败:', template.functionTemplateId, e);
            }
          }

          rootNodes.sort((a, b) => a.label.localeCompare(b.label));
          treeData.value = rootNodes;
          tipMsg.value = `已加载 ${templateNodesSource.length} 个模板, 树节点 ${rootNodes.length} 个`;

          const currMeta = selectedCodeType.value;
          const nodeId = currMeta ? getNodeIdByMeta(currMeta) : getStoredNodeId();
          await autoSelectNodeById(nodeId);
        } catch (e: any) {
          tipMsg.value = '加载失败';
          console.error(e);
          alert(`加载模板函数树失败: ${e}`);
        }
      };

      const addRelation = async () => {
        const meta = selectedCodeType.value;
        if (meta == null) {
          alert('请先在左侧选择代码类型节点！');
          return;
        }
        if (!selectedFuncIdToAdd.value) {
          alert('请选择要添加的函数！');
          return;
        }

        const func = functionMap.get(selectedFuncIdToAdd.value);
        const codeType = codeTypeMap.get(meta.codeTypeId);
        if (!func || !codeType) {
          alert('函数或代码类型信息不完整，无法添加！');
          return;
        }

        const obj = new clsFunctionTemplateRelaEN();
        obj.SetFunctionTemplateId(meta.templateId);
        obj.SetCodeTypeId(meta.codeTypeId);
        obj.SetRegionTypeId(codeType.regionTypeId || '0001');
        obj.SetFuncCodeTypeId(func.funcCodeTypeId || meta.codeTypeId);
        obj.SetFuncId4GC(func.funcId4GC);
        obj.SetIsGeneCode(newRelIsGeneCode.value);
        obj.SetOrderNum(functionRows.value.length + 1);

        try {
          const ok = await FunctionTemplateRela_AddNewRecordAsync(obj);
          if (!ok) {
            alert('添加失败，请检查是否已存在该关系。');
            return;
          }
          vFunctionTemplateRela_Sim_ReFreshThisCache(meta.templateId);
          await refreshCurrentSelectionRows();
          await loadAllData();
          selectedFuncIdToAdd.value = '';
          addSearchKeyword.value = '';
        } catch (e: any) {
          console.error(e);
          alert(`添加关系失败: ${e}`);
        }
      };

      const toggleRowSelection = (rowKey: string, checked: boolean) => {
        if (checked) {
          if (!selectedRowKeys.value.includes(rowKey)) selectedRowKeys.value.push(rowKey);
        } else {
          selectedRowKeys.value = selectedRowKeys.value.filter((x) => x !== rowKey);
        }
      };

      const toggleSelectAll = (checked: boolean) => {
        if (!checked) {
          selectedRowKeys.value = [];
          return;
        }
        selectedRowKeys.value = functionRows.value.map((x) => x.key);
      };

      const deleteSelectedRelations = async () => {
        const meta = selectedCodeType.value;
        if (meta == null) return;
        const selectedRows = functionRows.value.filter((x) =>
          selectedRowKeys.value.includes(x.key),
        );
        if (selectedRows.length === 0) {
          alert('请先选择要删除的关系记录！');
          return;
        }
        if (selectedRows.some((x) => x.mId <= 0)) {
          alert('选中记录中存在主键为空的数据，请刷新后重试。');
          return;
        }
        if (!confirm(`确定删除选中的 ${selectedRows.length} 条关系吗？`)) return;

        try {
          for (const row of selectedRows) {
            await FunctionTemplateRela_DelRecordAsync(row.mId);
          }
          selectedRowKeys.value = [];
          vFunctionTemplateRela_Sim_ReFreshThisCache(meta.templateId);
          await refreshCurrentSelectionRows();
          await loadAllData();
        } catch (e: any) {
          console.error(e);
          alert(`批量删除失败: ${e}`);
        }
      };

      const deleteRelation = async (row: FunctionRow) => {
        const meta = selectedCodeType.value;
        if (meta == null) return;
        if (row.mId <= 0) {
          alert('当前关系缺少主键，无法删除。请刷新后重试。');
          return;
        }
        if (!confirm(`确定删除函数【${row.funcName}】和当前模板的关系吗？`)) return;
        try {
          const count = await FunctionTemplateRela_DelRecordAsync(row.mId);
          if (count <= 0) {
            alert('删除失败。');
            return;
          }
          selectedRowKeys.value = selectedRowKeys.value.filter((x) => x !== row.key);
          vFunctionTemplateRela_Sim_ReFreshThisCache(meta.templateId);
          await refreshCurrentSelectionRows();
          await loadAllData();
        } catch (e: any) {
          console.error(e);
          alert(`删除关系失败: ${e}`);
        }
      };

      const toggleIsGeneCode = async (row: FunctionRow, checked: boolean) => {
        const meta = selectedCodeType.value;
        if (meta == null) return;
        if (row.mId <= 0) {
          alert('当前关系缺少主键，无法修改。请刷新后重试。');
          return;
        }
        try {
          const obj = await FunctionTemplateRela_GetObjByKeyAsync({ mId: row.mId });
          if (obj == null) {
            alert('未找到要更新的关系记录。');
            return;
          }
          obj.SetIsGeneCode(checked);
          const ok = await FunctionTemplateRela_UpdateRecordAsync(obj);
          if (!ok) {
            alert('更新失败。');
            return;
          }
          vFunctionTemplateRela_Sim_ReFreshThisCache(meta.templateId);
          await refreshCurrentSelectionRows();
        } catch (e: any) {
          console.error(e);
          alert(`更新是否生成失败: ${e}`);
        }
      };

      const onNodeClick = (payload: { type: string; id: string }) => {
        if (payload.type !== 'codeType') return;
        const meta = codeTypeNodeMeta.get(payload.id);
        if (!meta) return;
        selectedCodeType.value = meta;
        setStoredNodeId(payload.id);
        selectedRowKeys.value = [];
        refreshCurrentSelectionRows();
      };

      watch(
        selectedRowKeys,
        () => {
          syncCopyTargetCodeType();
        },
        { flush: 'post' },
      );

      watch(
        copyTargetCodeTypeOptions,
        () => {
          syncCopyTargetCodeType();
        },
        { flush: 'post' },
      );

      onMounted(async () => {
        await loadAllData();
      });

      return {
        treeRef,
        selectedNode,
        treeData,
        tipMsg,
        functionRows,
        selectedPath,
        selectedFuncIdToAdd,
        addSearchKeyword,
        newRelIsGeneCode,
        copyTargetCodeTypeId,
        copyTargetCodeTypeOptions,
        copySelectedToTargetCodeType,
        getFuncCodeTypeName,
        candidateFunctionsFiltered,
        selectedRowKeys,
        isAllSelected,
        addRelation,
        deleteRelation,
        deleteSelectedRelations,
        toggleIsGeneCode,
        toggleRowSelection,
        toggleSelectAll,
        onNodeClick,
      };
    },
  });
</script>

<style scoped>
  .page-wrap {
    width: 100%;
    min-height: 640px;
    padding: 12px;
  }

  .page-title-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .page-title {
    margin: 0;
  }

  .content-wrap {
    display: flex;
    gap: 12px;
    min-height: 560px;
  }

  .left-pane {
    flex: 0 0 36%;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 8px;
    overflow: auto;
    max-height: 74vh;
  }

  .right-pane {
    flex: 1;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 8px;
    overflow: auto;
    max-height: 74vh;
  }

  .pane-title {
    font-weight: 600;
    color: #2f3a4d;
    margin-bottom: 8px;
  }

  .table-wrap {
    overflow: auto;
  }

  .toolbar-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }

  .toolbar-label {
    font-size: 12px;
    color: #555;
    margin-bottom: 0;
  }

  .toolbar-search {
    width: 200px;
  }

  .toolbar-select {
    width: 360px;
  }

  @media (max-width: 960px) {
    .content-wrap {
      flex-direction: column;
    }

    .left-pane,
    .right-pane {
      flex: 1 1 auto;
      max-height: none;
    }

    .toolbar-search,
    .toolbar-select {
      width: 100%;
    }
  }
</style>
