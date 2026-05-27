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
  import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';

  import type { TreeNode } from '@/ts/components/TreeNode';
  import tree from '@/ts/components/myTree.vue';

  import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
  import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';

  import { vCodeType_Sim_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import {
    FunctionTemplateRela_AddNewRecordAsync,
    FunctionTemplateRela_DelRecordAsync,
    FunctionTemplateRela_GetObjByKeyAsync,
    FunctionTemplateRela_GetObjLstAsync,
    FunctionTemplateRela_UpdateRecordAsync,
  } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateRelaWApi';
  import { FunctionTemplate_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import {
    vFunction4GeneCode_Sim_GetObjByFuncId4GCCache,
    vFunction4GeneCode_Sim_GetObjLstCache,
  } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
  import {
    vFunctionTemplateRela_Sim_GetObjLstCache,
    vFunctionTemplateRela_Sim_ReFreshThisCache,
  } from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
  import { ProgLangType_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { Format } from '@/ts/PubFun/clsString';

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

      const getFuncCodeTypeName = (func: clsvFunction4GeneCode_SimEN): string => {
        const codeType = codeTypeMap.get(func.funcCodeTypeId || '');
        return codeType?.codeTypeName || func.funcCodeTypeId || '未设置代码类型';
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
          const func = getFunctionByKey(x.funcId4GC);
          const isMatchByRelaCodeType = x.codeTypeId === meta.codeTypeId;
          const isMatchByFuncCodeType = func?.funcCodeTypeId === meta.codeTypeId;
          if (!isMatchByRelaCodeType && !isMatchByFuncCodeType) return;
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
            codeTypeName: codeType?.codeTypeName || x.codeTypeId,
            funcCodeTypeName: funcCodeType?.codeTypeName || func?.funcCodeTypeId || '',
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
            vFunction4GeneCode_Sim_GetObjByFuncId4GCCache(funcId4GC),
          ),
        );
        loadedFunctions.forEach((ret) => {
          if (ret.status !== 'fulfilled' || !ret.value) return;
          functionMap.set(ret.value.funcId4GC, ret.value);
          indexFunction(ret.value);
        });
      };

      const refreshCurrentSelectionRows = async () => {
        const meta = selectedCodeType.value;
        if (meta == null) {
          functionRows.value = [];
          selectedRowKeys.value = [];
          return;
        }

        const relas = await vFunctionTemplateRela_Sim_GetObjLstCache(meta.templateId);
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
          const [templates, codeTypes, allFunctions, progLangTypes] = await Promise.all([
            FunctionTemplate_GetObjLstCache(),
            vCodeType_Sim_GetObjLstCache(),
            vFunction4GeneCode_Sim_GetObjLstCache(),
            ProgLangType_GetObjLstCache(),
          ]);

          codeTypeMap.clear();
          codeTypes.forEach((x) => codeTypeMap.set(x.codeTypeId, x));

          functionMap.clear();
          functionMapByNormalizedKey.clear();
          allFunctions.forEach((x) => {
            functionMap.set(x.funcId4GC, x);
            indexFunction(x);
          });

          progLangTypeMap.clear();
          progLangTypes.forEach((x) => progLangTypeMap.set(x.progLangTypeId, x));

          const rootNodes: TreeNode[] = [];
          codeTypeNodeMeta.clear();
          relationMap.clear();

          for (const template of templates) {
            const relationRows = await vFunctionTemplateRela_Sim_GetObjLstCache(
              template.functionTemplateId,
            );
            relationMap.set(template.functionTemplateId, relationRows);
            const groupedByFront = new Map<string, Set<string>>();

            for (const row of relationRows) {
              const func = getFunctionByKey(row.funcId4GC);
              const codeTypeIds = new Set<string>([row.codeTypeId]);
              if (func?.funcCodeTypeId) codeTypeIds.add(func.funcCodeTypeId);

              codeTypeIds.forEach((codeTypeId) => {
                const codeType = codeTypeMap.get(codeTypeId);
                const frontOrBack = normalizeFrontOrBack(codeType?.frontOrBack ?? '');
                if (!groupedByFront.has(frontOrBack)) groupedByFront.set(frontOrBack, new Set());
                groupedByFront.get(frontOrBack)?.add(codeTypeId);
              });
            }

            const frontNodes: TreeNode[] = [];
            groupedByFront.forEach((codeTypeIdSet, frontOrBack) => {
              const codeTypeNodes: TreeNode[] = [];

              Array.from(codeTypeIdSet).forEach((codeTypeId) => {
                const codeType = codeTypeMap.get(codeTypeId);
                const codeTypeName = codeType?.codeTypeName || codeTypeId;
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
          }

          rootNodes.sort((a, b) => a.label.localeCompare(b.label));
          treeData.value = rootNodes;
          tipMsg.value = `已加载 ${templates.length} 个模板`;

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
