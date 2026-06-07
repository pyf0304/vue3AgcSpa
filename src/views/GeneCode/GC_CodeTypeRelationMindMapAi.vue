<template>
  <div class="mindmap-page" :class="nodeSizeModeClass">
    <div class="top-bar">
      <h5 class="title">代码类型关系思维导图维护</h5>
      <span class="text-warning msg">{{ message }}</span>
      <div class="top-panel-tools">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          @click="toggleTopPanelCollapsed"
        >
          {{ topPanelCollapsed ? '展开高级项' : '收起高级项' }}
        </button>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary ml-2"
          @click="toggleTopPanelScale"
        >
          {{ topPanelScaleText }}
        </button>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary ml-2"
          @click="openAddCodeTypeDrawer"
        >
          添加代码类型
        </button>
      </div>
    </div>

    <div
      class="query-panel card card-body"
      :class="[{ 'is-collapsed': topPanelCollapsed, 'is-small': topPanelScale === 'small' }]"
    >
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="selCtGroupId">代码组</label>
          <select
            id="selCtGroupId"
            v-model="selectedGroupId"
            class="form-control form-control-sm"
            @change="onGroupChanged"
          >
            <option value="0">请选择代码组</option>
            <option v-for="g in groupList" :key="g.ctGroupId" :value="g.ctGroupId">
              {{ g.groupName }} ({{ g.ctGroupId }})
            </option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="txtNodeKeyword">节点搜索</label>
          <input
            id="txtNodeKeyword"
            v-model.trim="nodeKeyword"
            class="form-control form-control-sm"
            placeholder="按代码类型名称/ID过滤"
          />
        </div>

        <div class="form-group col-md-3">
          <label for="selFilterRelationTypeId">关系过滤</label>
          <select
            id="selFilterRelationTypeId"
            v-model="filterRelationTypeId"
            class="form-control form-control-sm"
          >
            <option value="0">全部关系类型</option>
            <option
              v-for="r in relationTypeList"
              :key="r.ctRelationTypeId"
              :value="r.ctRelationTypeId"
            >
              {{ r.relationTypeName }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-3 actions-row">
          <button type="button" class="btn btn-sm btn-outline-success" @click="exportGraphSvg"
            >导出关系图SVG</button
          >
          <button type="button" class="btn btn-sm btn-outline-info ml-2" @click="exportGraphJson"
            >导出关系JSON</button
          >
        </div>
      </div>

      <div v-show="!topPanelCollapsed" class="form-row">
        <div class="form-group col-md-3">
          <label for="selParentCodeTypeId">父代码类型</label>
          <select
            id="selParentCodeTypeId"
            v-model="newParentCodeTypeId"
            class="form-control form-control-sm"
          >
            <option value="0">请选择父类型</option>
            <option v-for="n in groupNodes" :key="n.codeTypeId" :value="n.codeTypeId">
              {{ n.codeTypeName }} ({{ n.codeTypeId }})
            </option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="selChildCodeTypeId">子代码类型</label>
          <select
            id="selChildCodeTypeId"
            v-model="newChildCodeTypeId"
            class="form-control form-control-sm"
          >
            <option value="0">请选择子类型</option>
            <option v-for="n in codeTypeList" :key="n.codeTypeId" :value="n.codeTypeId">
              {{ n.codeTypeName }} ({{ n.codeTypeId }})
            </option>
          </select>
        </div>

        <div class="form-group col-md-2">
          <label for="selRelationTypeId">关系类型</label>
          <select
            id="selRelationTypeId"
            v-model="newRelationTypeId"
            class="form-control form-control-sm"
          >
            <option value="0">请选择关系</option>
            <option
              v-for="r in relationTypeList"
              :key="r.ctRelationTypeId"
              :value="r.ctRelationTypeId"
            >
              {{ r.relationTypeName }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-1 actions">
          <button type="button" class="btn btn-sm btn-primary" @click="addRelation">新增</button>
          <button type="button" class="btn btn-sm btn-outline-secondary mt-1" @click="reloadAll"
            >刷新</button
          >
        </div>
      </div>

      <div v-show="!topPanelCollapsed" class="form-row">
        <div class="form-group col-md-3">
          <label for="selLayoutStrategy">重排逻辑</label>
          <select
            id="selLayoutStrategy"
            v-model="layoutStrategy"
            class="form-control form-control-sm"
          >
            <option value="layer">按层级拓扑</option>
            <option value="name">按名称排序</option>
            <option value="id">按编码排序</option>
          </select>
        </div>
        <div class="form-group col-md-5 layout-actions">
          <button type="button" class="btn btn-sm btn-outline-primary" @click="autoArrangeNodes"
            >自动重排当前显示节点</button
          >
          <button type="button" class="btn btn-sm btn-outline-dark ml-2" @click="clearLayoutOffsets"
            >清空布局偏移</button
          >
        </div>
        <div class="form-group col-md-4 layout-actions-right">
          <button
            type="button"
            class="btn btn-sm btn-outline-warning"
            @click="toggleNodeSizeMode"
            >{{ nodeSizeToggleText }}</button
          >
          <span class="ml-2 text-secondary"
            >当前: {{ nodeSizeMode === 'small' ? '小图' : '大图' }}</span
          >
        </div>
      </div>
    </div>

    <div class="legend-line">
      <span>组内代码类型数: {{ filteredNodes.length }}/{{ groupNodes.length }}</span>
      <span class="ml-3">关系数: {{ filteredEdges.length }}/{{ edgeList.length }}</span>
      <span v-if="!topPanelCollapsed" class="ml-3"
        >提示: 点击节点可选父类型；按住节点四边端点拖到目标节点可连线创建关系</span
      >
      <span v-else class="ml-3">提示: 顶部已折叠，点击“展开高级项”可显示新增/重排等操作</span>
    </div>

    <div ref="canvasRef" class="mindmap-wrap">
      <div v-if="selectedGroup != null" class="root-card">
        <div class="root-title">{{ selectedGroup.groupName }}</div>
        <div class="root-sub">代码组ID: {{ selectedGroup.ctGroupId }}</div>
      </div>

      <div v-if="selectedGroup == null" class="empty-tip">请选择代码组后加载思维导图。</div>

      <div
        v-else
        ref="mapBodyRef"
        class="map-body"
        :style="{ width: `${svgWidth}px`, height: `${svgHeight}px` }"
      >
        <svg
          class="relation-svg"
          :width="svgWidth"
          :height="svgHeight"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              v-for="mk in relationMarkers"
              :id="mk.markerId"
              :key="mk.markerId"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 z" :fill="mk.color" />
            </marker>
            <marker
              id="draft-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 z" :fill="draftLineColor" />
            </marker>
          </defs>

          <path
            v-for="ln in relationLines"
            :key="ln.id"
            :d="ln.pathD"
            :class="[
              'line-main',
              {
                'is-hovered': hoveredRelationId === ln.id,
                'is-dim': hoveredRelationId !== '' && hoveredRelationId !== ln.id,
              },
            ]"
            :stroke="ln.color"
            :marker-end="`url(#${ln.markerId})`"
            @mouseenter="onRelationMouseEnter(ln)"
            @mouseleave="onRelationMouseLeave"
          />
          <text
            v-for="ln in relationLines"
            :key="ln.id + '_label'"
            :x="ln.labelX"
            :y="ln.labelY"
            class="line-label"
            :fill="ln.color"
          >
            {{ ln.label }}
          </text>

          <line
            v-if="linkDraft.active"
            :x1="linkDraft.x1"
            :y1="linkDraft.y1"
            :x2="linkDraft.x2"
            :y2="linkDraft.y2"
            class="line-draft"
            :stroke="draftLineColor"
            marker-end="url(#draft-arrow)"
          />
        </svg>

        <div class="branch-list">
          <div
            v-for="node in filteredNodes"
            :key="node.codeTypeId"
            :ref="(el) => setNodeRef(node.codeTypeId, el)"
            class="branch-item"
            :class="{ active: newParentCodeTypeId === node.codeTypeId }"
            :data-code-type-id="node.codeTypeId"
            :style="getNodeStyle(node.codeTypeId)"
            @click="pickParent(node.codeTypeId)"
          >
            <div class="branch-head" @mousedown.stop="startNodeDrag($event, node.codeTypeId)">
              <div class="node-name">{{ node.codeTypeName }}</div>
              <div v-if="!isSmallMode" class="node-id">{{ node.codeTypeId }}</div>
              <span class="drag-handle" title="拖动节点布局"></span>
              <span
                :class="['node-port', 'node-port-top', getNodePortClass(node.codeTypeId, 'top')]"
                title="从顶部端点拖拽创建关系"
                @mousedown.stop.prevent="startLinkDrag($event, node.codeTypeId, 'top')"
              ></span>
              <span
                :class="[
                  'node-port',
                  'node-port-right',
                  getNodePortClass(node.codeTypeId, 'right'),
                ]"
                title="从右侧端点拖拽创建关系"
                @mousedown.stop.prevent="startLinkDrag($event, node.codeTypeId, 'right')"
              ></span>
              <span
                :class="[
                  'node-port',
                  'node-port-bottom',
                  getNodePortClass(node.codeTypeId, 'bottom'),
                ]"
                title="从底部端点拖拽创建关系"
                @mousedown.stop.prevent="startLinkDrag($event, node.codeTypeId, 'bottom')"
              ></span>
              <span
                :class="['node-port', 'node-port-left', getNodePortClass(node.codeTypeId, 'left')]"
                title="从左侧端点拖拽创建关系"
                @mousedown.stop.prevent="startLinkDrag($event, node.codeTypeId, 'left')"
              ></span>
            </div>

            <template v-if="!isSmallMode">
              <div v-if="node.edges.length > 0" class="edge-list">
                <div v-for="edge in node.edges" :key="edge.relationId" class="edge-item">
                  <span class="edge-arrow">{{ edge.relationTypeName }} -></span>
                  <span class="edge-target"
                    >{{ edge.childCodeTypeName }} ({{ edge.childCodeTypeId }})</span
                  >
                  <button
                    type="button"
                    class="btn btn-sm btn-link text-danger"
                    @click.stop="deleteRelation(edge.relationId)"
                  >
                    删除
                  </button>
                </div>
              </div>
              <div v-else class="edge-empty">暂无子关系</div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isAddCodeTypeDrawerVisible"
      class="add-code-type-drawer-mask"
      @click.self="closeAddCodeTypeDrawer"
    >
      <div class="add-code-type-drawer">
        <div class="drawer-head">
          <strong class="text-primary">添加代码类型到当前组</strong>
          <button type="button" class="close" @click="closeAddCodeTypeDrawer">
            <span>&times;</span>
          </button>
        </div>
        <CTCodeTypeGroupAddCodeTypePanelAi
          :current-group-id="selectedGroupId"
          @added="onCodeTypeAddedToGroup"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
  import CTCodeTypeGroupAddCodeTypePanelAi from '@/views/GeneCode/CTCodeTypeGroupAddCodeTypePanelAi.vue';
  import { CTCodeTypeGroup_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
  import { CTCodeTypeGroupRela_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';
  import { vCodeType_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import {
    GC_CodeTypeRelation_GetObjLstAsync,
    GC_CodeTypeRelation_AddNewRecordAsync,
    GC_CodeTypeRelation_DelRecordAsync,
  } from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';
  import { CTRelationType_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
  import { clsGC_CodeTypeRelationEN } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';

  type GroupDto = {
    ctGroupId: string;
    groupName: string;
    orderNum: number;
  };

  type CodeTypeDto = {
    codeTypeId: string;
    codeTypeName: string;
  };

  type RelationTypeDto = {
    ctRelationTypeId: string;
    relationTypeName: string;
  };

  type EdgeView = {
    relationId: number;
    parentCodeTypeId: string;
    childCodeTypeId: string;
    ctRelationTypeId: string;
    childCodeTypeName: string;
    relationTypeName: string;
  };

  type NodeView = {
    codeTypeId: string;
    codeTypeName: string;
    edges: Array<EdgeView>;
  };

  type PortSide = 'top' | 'right' | 'bottom' | 'left';

  const relationColorPalette = [
    '#2f6ea5',
    '#2a9d8f',
    '#e76f51',
    '#8f5ea2',
    '#3a86ff',
    '#ef476f',
    '#06d6a0',
    '#f4a261',
  ];

  export default defineComponent({
    name: 'GCCodeTypeRelationMindMapAi',
    components: {
      CTCodeTypeGroupAddCodeTypePanelAi,
    },
    setup() {
      const loading = ref(false);
      const message = ref('');

      const canvasRef = ref<HTMLElement | null>(null);
      const mapBodyRef = ref<HTMLElement | null>(null);
      const svgWidth = ref(1200);
      const svgHeight = ref(620);

      const selectedGroupId = ref('0');
      const newParentCodeTypeId = ref('0');
      const newChildCodeTypeId = ref('0');
      const newRelationTypeId = ref('0');
      const filterRelationTypeId = ref('0');
      const nodeKeyword = ref('');
      const layoutStrategy = ref<'layer' | 'name' | 'id'>('layer');
      const nodeSizeMode = ref<'small' | 'large'>('small');
      const topPanelCollapsed = ref(true);
      const topPanelScale = ref<'small' | 'normal'>('small');
      const isAddCodeTypeDrawerVisible = ref(false);

      const groupList = ref<Array<GroupDto>>([]);
      const codeTypeList = ref<Array<CodeTypeDto>>([]);
      const relationTypeList = ref<Array<RelationTypeDto>>([]);

      const groupCodeTypeIds = ref<Array<string>>([]);
      const edgeList = ref<Array<EdgeView>>([]);
      const nodeRectMap = ref<Record<string, { x: number; y: number; w: number; h: number }>>({});
      const nodeElementMap = new Map<string, HTMLElement>();
      const nodePositionMap = ref<Record<string, { dx: number; dy: number }>>({});

      const nodeDragState = ref({
        active: false,
        nodeId: '',
        startClientX: 0,
        startClientY: 0,
        startDx: 0,
        startDy: 0,
        hasMoved: false,
      });
      const justDraggedNodeId = ref('');

      const linkDraft = ref({
        active: false,
        fromCodeTypeId: '',
        fromPortSide: 'right' as PortSide,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      });
      const hoveredRelationId = ref('');
      const highlightedPortKeys = ref<Array<string>>([]);

      const codeTypeNameMap = computed(() => {
        const map = new Map<string, string>();
        codeTypeList.value.forEach((x) => map.set(x.codeTypeId, x.codeTypeName));
        return map;
      });

      const relationTypeNameMap = computed(() => {
        const map = new Map<string, string>();
        relationTypeList.value.forEach((x) => map.set(x.ctRelationTypeId, x.relationTypeName));
        return map;
      });

      const relationTypeColorMap = computed(() => {
        const map = new Map<string, string>();
        relationTypeList.value.forEach((x, index) => {
          map.set(x.ctRelationTypeId, relationColorPalette[index % relationColorPalette.length]);
        });
        return map;
      });

      const draftLineColor = computed(() => {
        if (newRelationTypeId.value === '0') return '#ff7a00';
        return relationTypeColorMap.value.get(newRelationTypeId.value) ?? '#ff7a00';
      });

      const relationMarkers = computed(() => {
        return relationTypeList.value.map((x) => ({
          markerId: `arrow-${x.ctRelationTypeId}`,
          color: relationTypeColorMap.value.get(x.ctRelationTypeId) ?? '#447aaa',
        }));
      });

      const nodeSizeModeClass = computed(() => {
        return nodeSizeMode.value === 'small' ? 'node-size-small' : 'node-size-large';
      });

      const isSmallMode = computed(() => nodeSizeMode.value === 'small');

      const nodeSizeToggleText = computed(() => {
        return nodeSizeMode.value === 'small' ? '切换到大图' : '切换到小图';
      });

      const topPanelScaleText = computed(() => {
        return topPanelScale.value === 'small' ? '切换为标准控件' : '切换为紧凑控件';
      });

      const toggleTopPanelCollapsed = () => {
        topPanelCollapsed.value = !topPanelCollapsed.value;
      };

      const toggleTopPanelScale = () => {
        topPanelScale.value = topPanelScale.value === 'small' ? 'normal' : 'small';
      };

      const openAddCodeTypeDrawer = () => {
        if (selectedGroupId.value === '0') {
          alert('请先选择代码组');
          return;
        }
        isAddCodeTypeDrawerVisible.value = true;
      };

      const closeAddCodeTypeDrawer = () => {
        isAddCodeTypeDrawerVisible.value = false;
      };

      const onCodeTypeAddedToGroup = async () => {
        closeAddCodeTypeDrawer();
        await loadMindMapByGroup();
      };

      const selectedGroup = computed(() => {
        return groupList.value.find((x) => x.ctGroupId === selectedGroupId.value) ?? null;
      });

      const groupNodes = computed<Array<NodeView>>(() => {
        return groupCodeTypeIds.value.map((codeTypeId) => {
          const codeTypeName = codeTypeNameMap.value.get(codeTypeId) ?? codeTypeId;
          const edges = edgeList.value.filter((e) => e.parentCodeTypeId === codeTypeId);
          return {
            codeTypeId,
            codeTypeName,
            edges,
          };
        });
      });

      const filteredEdges = computed(() => {
        let arr = edgeList.value;
        if (filterRelationTypeId.value !== '0') {
          arr = arr.filter((x) => x.ctRelationTypeId === filterRelationTypeId.value);
        }
        if (nodeKeyword.value !== '') {
          const k = nodeKeyword.value.toLowerCase();
          arr = arr.filter((x) => {
            const pName = codeTypeNameMap.value.get(x.parentCodeTypeId) ?? '';
            const cName = codeTypeNameMap.value.get(x.childCodeTypeId) ?? '';
            return (
              x.parentCodeTypeId.toLowerCase().includes(k) ||
              x.childCodeTypeId.toLowerCase().includes(k) ||
              pName.toLowerCase().includes(k) ||
              cName.toLowerCase().includes(k)
            );
          });
        }
        return arr;
      });

      const filteredNodes = computed<Array<NodeView>>(() => {
        let nodes = groupNodes.value;
        const edgeSet = new Set<string>();
        filteredEdges.value.forEach((x) => {
          edgeSet.add(x.parentCodeTypeId);
          edgeSet.add(x.childCodeTypeId);
        });

        if (nodeKeyword.value !== '') {
          const k = nodeKeyword.value.toLowerCase();
          nodes = nodes.filter((n) => {
            return (
              n.codeTypeId.toLowerCase().includes(k) ||
              n.codeTypeName.toLowerCase().includes(k) ||
              edgeSet.has(n.codeTypeId)
            );
          });
        } else if (filterRelationTypeId.value !== '0') {
          nodes = nodes.filter((n) => edgeSet.has(n.codeTypeId));
        }

        return nodes.map((n) => ({
          ...n,
          edges: filteredEdges.value.filter((e) => e.parentCodeTypeId === n.codeTypeId),
        }));
      });

      const getPortSideTowardTarget = (
        rect: { x: number; y: number; w: number; h: number },
        targetX: number,
        targetY: number,
      ): PortSide => {
        const centerX = rect.x + rect.w / 2;
        const centerY = rect.y + rect.h / 2;
        const dx = targetX - centerX;
        const dy = targetY - centerY;

        if (Math.abs(dy) >= Math.abs(dx)) {
          return dy >= 0 ? 'bottom' : 'top';
        }

        return dx >= 0 ? 'right' : 'left';
      };

      const getPortPoint = (
        rect: { x: number; y: number; w: number; h: number },
        side: PortSide,
      ) => {
        if (side === 'top') return { x: rect.x + rect.w / 2, y: rect.y };
        if (side === 'right') return { x: rect.x + rect.w, y: rect.y + rect.h / 2 };
        if (side === 'bottom') return { x: rect.x + rect.w / 2, y: rect.y + rect.h };
        return { x: rect.x, y: rect.y + rect.h / 2 };
      };

      const getPortKey = (codeTypeId: string, side: PortSide) => `${codeTypeId}:${side}`;

      const getNodePortClass = (codeTypeId: string, side: PortSide) => {
        return highlightedPortKeys.value.includes(getPortKey(codeTypeId, side))
          ? 'is-highlighted'
          : '';
      };

      const nudgeAnchorOutward = (
        rect: { x: number; y: number; w: number; h: number },
        anchor: { x: number; y: number },
        amount = 2,
      ) => {
        const dLeft = Math.abs(anchor.x - rect.x);
        const dRight = Math.abs(anchor.x - (rect.x + rect.w));
        const dTop = Math.abs(anchor.y - rect.y);
        const dBottom = Math.abs(anchor.y - (rect.y + rect.h));
        const minD = Math.min(dLeft, dRight, dTop, dBottom);

        if (minD === dLeft) {
          return { x: rect.x - amount, y: anchor.y };
        }
        if (minD === dRight) {
          return { x: rect.x + rect.w + amount, y: anchor.y };
        }
        if (minD === dTop) {
          return { x: anchor.x, y: rect.y - amount };
        }
        return { x: anchor.x, y: rect.y + rect.h + amount };
      };

      const buildOrthogonalPath = (
        sourceId: string,
        targetId: string,
        start: { x: number; y: number },
        end: { x: number; y: number },
      ) => {
        const expand = 10;

        const segmentIntersectsRect = (
          p1: { x: number; y: number },
          p2: { x: number; y: number },
          rect: { x: number; y: number; w: number; h: number },
        ) => {
          const left = rect.x - expand;
          const right = rect.x + rect.w + expand;
          const top = rect.y - expand;
          const bottom = rect.y + rect.h + expand;

          if (p1.x === p2.x) {
            const x = p1.x;
            if (x < left || x > right) return false;
            const y1 = Math.min(p1.y, p2.y);
            const y2 = Math.max(p1.y, p2.y);
            return !(y2 < top || y1 > bottom);
          }

          if (p1.y === p2.y) {
            const y = p1.y;
            if (y < top || y > bottom) return false;
            const x1 = Math.min(p1.x, p2.x);
            const x2 = Math.max(p1.x, p2.x);
            return !(x2 < left || x1 > right);
          }

          return false;
        };

        const isPathClear = (points: Array<{ x: number; y: number }>) => {
          for (let i = 0; i < points.length - 1; i += 1) {
            const p1 = points[i];
            const p2 = points[i + 1];

            for (const [nodeId, rect] of Object.entries(nodeRectMap.value)) {
              if (nodeId === sourceId || nodeId === targetId) continue;
              if (segmentIntersectsRect(p1, p2, rect)) {
                return false;
              }
            }
          }
          return true;
        };

        const midY = (start.y + end.y) / 2;
        const baseRoute = [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
        if (isPathClear(baseRoute)) {
          return baseRoute;
        }

        const minX = Math.min(start.x, end.x);
        const maxX = Math.max(start.x, end.x);
        const minY = Math.min(start.y, end.y);
        const maxY = Math.max(start.y, end.y);
        const offsets = [70, 130, 210, 300, 420];

        for (const offset of offsets) {
          const tryRoutes = [
            [start, { x: maxX + offset, y: start.y }, { x: maxX + offset, y: end.y }, end],
            [start, { x: minX - offset, y: start.y }, { x: minX - offset, y: end.y }, end],
            [start, { x: start.x, y: minY - offset }, { x: end.x, y: minY - offset }, end],
            [start, { x: start.x, y: maxY + offset }, { x: end.x, y: maxY + offset }, end],
          ];

          const ok = tryRoutes.find((route) => isPathClear(route));
          if (ok != null) {
            return ok;
          }
        }

        return baseRoute;
      };

      const relationLines = computed(() => {
        return filteredEdges.value
          .map((edge) => {
            const p = nodeRectMap.value[edge.parentCodeTypeId];
            const c = nodeRectMap.value[edge.childCodeTypeId];
            if (p == null || c == null) return null;

            const parentCenterX = p.x + p.w / 2;
            const parentCenterY = p.y + p.h / 2;
            const childCenterX = c.x + c.w / 2;
            const childCenterY = c.y + c.h / 2;

            const pSide = getPortSideTowardTarget(p, childCenterX, childCenterY);
            const cSide = getPortSideTowardTarget(c, parentCenterX, parentCenterY);

            let pAnchor = getPortPoint(p, pSide);
            let cAnchor = getPortPoint(c, cSide);

            pAnchor = nudgeAnchorOutward(p, pAnchor, 2);
            cAnchor = nudgeAnchorOutward(c, cAnchor, 2);

            const smallMode = nodeSizeMode.value === 'small';
            let pathD = '';
            let labelX = 0;
            let labelY = 0;
            if (smallMode) {
              const midX = (pAnchor.x + cAnchor.x) / 2;
              const midY = (pAnchor.y + cAnchor.y) / 2;
              pathD = `M ${pAnchor.x} ${pAnchor.y} Q ${midX} ${midY} ${cAnchor.x} ${cAnchor.y}`;
              labelX = midX;
              labelY = midY - 6;
            } else {
              const points = buildOrthogonalPath(
                edge.parentCodeTypeId,
                edge.childCodeTypeId,
                { x: pAnchor.x, y: pAnchor.y },
                { x: cAnchor.x, y: cAnchor.y },
              );
              pathD = points
                .map((pt, index) => `${index === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`)
                .join(' ');

              const labelSegStart = points[1] ?? points[0];
              const labelSegEnd = points[2] ?? points[points.length - 1];
              labelX = (labelSegStart.x + labelSegEnd.x) / 2;
              labelY = (labelSegStart.y + labelSegEnd.y) / 2 - 6;
            }

            return {
              id: String(edge.relationId),
              pathD,
              labelX,
              labelY,
              label: edge.relationTypeName,
              color: relationTypeColorMap.value.get(edge.ctRelationTypeId) ?? '#447aaa',
              markerId: `arrow-${edge.ctRelationTypeId}`,
              sourceCodeTypeId: edge.parentCodeTypeId,
              sourcePortSide: pSide,
              targetCodeTypeId: edge.childCodeTypeId,
              targetPortSide: cSide,
            };
          })
          .filter(
            (
              x,
            ): x is {
              id: string;
              pathD: string;
              labelX: number;
              labelY: number;
              label: string;
              color: string;
              markerId: string;
              sourceCodeTypeId: string;
              sourcePortSide: PortSide;
              targetCodeTypeId: string;
              targetPortSide: PortSide;
            } => x != null,
          );
      });

      const onRelationMouseEnter = (ln: {
        id: string;
        sourceCodeTypeId: string;
        sourcePortSide: PortSide;
        targetCodeTypeId: string;
        targetPortSide: PortSide;
      }) => {
        hoveredRelationId.value = ln.id;
        highlightedPortKeys.value = [
          getPortKey(ln.sourceCodeTypeId, ln.sourcePortSide),
          getPortKey(ln.targetCodeTypeId, ln.targetPortSide),
        ];
      };

      const onRelationMouseLeave = () => {
        hoveredRelationId.value = '';
        highlightedPortKeys.value = [];
      };

      const makeInSql = (ids: Array<string>): string => {
        if (ids.length === 0) return "''";
        return ids.map((x) => `'${x}'`).join(',');
      };

      const getLayoutStorageKey = () => `GC_CodeTypeRelationMindMapLayout:${selectedGroupId.value}`;
      const getNodeSizeStorageKey = () => 'GC_CodeTypeRelationMindMapNodeSizeMode';

      const loadNodePositionLayout = () => {
        const key = getLayoutStorageKey();
        const raw = localStorage.getItem(key);
        if (raw == null || raw === '') {
          nodePositionMap.value = {};
        } else {
          try {
            nodePositionMap.value = JSON.parse(raw) as Record<string, { dx: number; dy: number }>;
          } catch (error) {
            console.warn('解析布局缓存失败:', error);
            nodePositionMap.value = {};
          }
        }

        const map = { ...nodePositionMap.value };
        groupCodeTypeIds.value.forEach((id) => {
          if (map[id] == null) {
            map[id] = { dx: 0, dy: 0 };
          }
        });
        nodePositionMap.value = map;
      };

      const getDisplayedNodeIds = () => filteredNodes.value.map((x) => x.codeTypeId);

      const getNodeOrderByLayer = (nodeIds: Array<string>): Array<string> => {
        const nodeSet = new Set(nodeIds);
        const indegree = new Map<string, number>();
        const childrenMap = new Map<string, Array<string>>();

        nodeIds.forEach((id) => {
          indegree.set(id, 0);
          childrenMap.set(id, []);
        });

        filteredEdges.value.forEach((edge) => {
          if (!nodeSet.has(edge.parentCodeTypeId) || !nodeSet.has(edge.childCodeTypeId)) return;
          childrenMap.get(edge.parentCodeTypeId)?.push(edge.childCodeTypeId);
          indegree.set(edge.childCodeTypeId, (indegree.get(edge.childCodeTypeId) ?? 0) + 1);
        });

        const queue: Array<string> = nodeIds
          .filter((id) => (indegree.get(id) ?? 0) === 0)
          .sort((a, b) => {
            const an = codeTypeNameMap.value.get(a) ?? a;
            const bn = codeTypeNameMap.value.get(b) ?? b;
            return an.localeCompare(bn, 'zh-CN');
          });

        const levelMap = new Map<string, number>();
        queue.forEach((id) => levelMap.set(id, 0));

        const visitOrder: Array<string> = [];
        while (queue.length > 0) {
          const curr = queue.shift() as string;
          visitOrder.push(curr);
          const currLevel = levelMap.get(curr) ?? 0;
          const children = childrenMap.get(curr) ?? [];
          children.forEach((child) => {
            indegree.set(child, (indegree.get(child) ?? 0) - 1);
            const nextLevel = Math.max(levelMap.get(child) ?? 0, currLevel + 1);
            levelMap.set(child, nextLevel);
            if ((indegree.get(child) ?? 0) === 0) {
              queue.push(child);
            }
          });
          queue.sort((a, b) => {
            const an = codeTypeNameMap.value.get(a) ?? a;
            const bn = codeTypeNameMap.value.get(b) ?? b;
            return an.localeCompare(bn, 'zh-CN');
          });
        }

        const unvisited = nodeIds.filter((id) => !visitOrder.includes(id));
        unvisited.forEach((id) => levelMap.set(id, levelMap.get(id) ?? 0));

        const allIds = [...visitOrder, ...unvisited];
        return allIds.sort((a, b) => {
          const la = levelMap.get(a) ?? 0;
          const lb = levelMap.get(b) ?? 0;
          if (la !== lb) return la - lb;
          const an = codeTypeNameMap.value.get(a) ?? a;
          const bn = codeTypeNameMap.value.get(b) ?? b;
          return an.localeCompare(bn, 'zh-CN');
        });
      };

      const autoArrangeNodes = async () => {
        if (selectedGroupId.value === '0') return;
        const nodeIds = getDisplayedNodeIds();
        if (nodeIds.length === 0) return;

        await nextTick();
        updateNodeLayout();

        let orderedIds: Array<string> = [];
        if (layoutStrategy.value === 'layer') {
          orderedIds = getNodeOrderByLayer(nodeIds);
        } else if (layoutStrategy.value === 'name') {
          orderedIds = [...nodeIds].sort((a, b) => {
            const an = codeTypeNameMap.value.get(a) ?? a;
            const bn = codeTypeNameMap.value.get(b) ?? b;
            return an.localeCompare(bn, 'zh-CN');
          });
        } else {
          orderedIds = [...nodeIds].sort((a, b) => a.localeCompare(b, 'zh-CN'));
        }

        const firstId = orderedIds[0];
        const firstRect = nodeRectMap.value[firstId];
        const smallMode = nodeSizeMode.value === 'small';
        const minWidth = smallMode ? 120 : 280;
        const minHeight = smallMode ? 44 : 100;
        const itemWidth = Math.max(firstRect?.w ?? (smallMode ? 130 : 300), minWidth);
        const itemHeight = Math.max(firstRect?.h ?? (smallMode ? 48 : 120), minHeight);
        const colGap = itemWidth + (smallMode ? 80 : 220);
        const rowGap = itemHeight + (smallMode ? 90 : 150);

        const nextPosMap = { ...nodePositionMap.value };

        if (layoutStrategy.value === 'layer') {
          const levelMap = new Map<string, number>();
          orderedIds.forEach((id) => levelMap.set(id, 0));
          filteredEdges.value.forEach((edge) => {
            if (
              !orderedIds.includes(edge.parentCodeTypeId) ||
              !orderedIds.includes(edge.childCodeTypeId)
            ) {
              return;
            }
            const parentLevel = levelMap.get(edge.parentCodeTypeId) ?? 0;
            levelMap.set(
              edge.childCodeTypeId,
              Math.max(levelMap.get(edge.childCodeTypeId) ?? 0, parentLevel + 1),
            );
          });

          const levelGroups = new Map<number, Array<string>>();
          orderedIds.forEach((id) => {
            const lv = levelMap.get(id) ?? 0;
            if (!levelGroups.has(lv)) levelGroups.set(lv, []);
            levelGroups.get(lv)?.push(id);
          });

          const levels = [...levelGroups.keys()].sort((a, b) => a - b);
          const minLayoutWidth = smallMode ? 560 : 1200;
          const layoutWidth = Math.max(
            canvasRef.value?.clientWidth ?? minLayoutWidth,
            minLayoutWidth,
          );
          levels.forEach((lv) => {
            const arr = levelGroups.get(lv) ?? [];
            const totalWidth = Math.max((arr.length - 1) * colGap + itemWidth, itemWidth);
            const startX = Math.max(20, Math.floor((layoutWidth - totalWidth) / 2));
            arr.forEach((id, idx) => {
              const targetX = startX + idx * colGap;
              const targetY = 20 + lv * rowGap;
              const rect = nodeRectMap.value[id];
              if (rect == null) return;
              const curr = nodePositionMap.value[id] ?? { dx: 0, dy: 0 };
              const dx = curr.dx + (targetX - rect.x);
              const dy = curr.dy + (targetY - rect.y);
              nextPosMap[id] = { dx, dy };
            });
          });
        } else {
          const cols = 2;
          orderedIds.forEach((id, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const targetX = 20 + col * colGap;
            const targetY = 20 + row * rowGap;
            const rect = nodeRectMap.value[id];
            if (rect == null) return;
            const curr = nodePositionMap.value[id] ?? { dx: 0, dy: 0 };
            const dx = curr.dx + (targetX - rect.x);
            const dy = curr.dy + (targetY - rect.y);
            nextPosMap[id] = { dx, dy };
          });
        }

        nodePositionMap.value = nextPosMap;
        saveNodePositionLayout();

        await nextTick();
        updateNodeLayout();
      };

      const clearLayoutOffsets = async () => {
        if (selectedGroupId.value === '0') return;
        const map = { ...nodePositionMap.value };
        groupCodeTypeIds.value.forEach((id) => {
          map[id] = { dx: 0, dy: 0 };
        });
        nodePositionMap.value = map;
        saveNodePositionLayout();
        await nextTick();
        updateNodeLayout();
      };

      const saveNodePositionLayout = () => {
        if (selectedGroupId.value === '0') return;
        localStorage.setItem(getLayoutStorageKey(), JSON.stringify(nodePositionMap.value));
      };

      const loadNodeSizeMode = () => {
        const raw = localStorage.getItem(getNodeSizeStorageKey());
        if (raw === 'small' || raw === 'large') {
          nodeSizeMode.value = raw;
        } else {
          nodeSizeMode.value = 'small';
        }
      };

      const saveNodeSizeMode = () => {
        localStorage.setItem(getNodeSizeStorageKey(), nodeSizeMode.value);
      };

      const toggleNodeSizeMode = async () => {
        nodeSizeMode.value = nodeSizeMode.value === 'small' ? 'large' : 'small';
        saveNodeSizeMode();
        await nextTick();
        updateNodeLayout();
      };

      const loadBaseData = async () => {
        const [groups, codeTypes, relationTypes] = await Promise.all([
          CTCodeTypeGroup_GetObjLstAsync('1=1'),
          vCodeType_Sim_GetObjLstAsync('1=1'),
          CTRelationType_GetObjLstAsync('1=1'),
        ]);

        groupList.value = groups
          .map((x) => ({
            ctGroupId: x.ctGroupId,
            groupName: x.groupName,
            orderNum: x.orderNum,
          }))
          .sort((a, b) => a.orderNum - b.orderNum);

        codeTypeList.value = codeTypes.map((x) => ({
          codeTypeId: x.codeTypeId,
          codeTypeName: x.codeTypeName,
        }));

        relationTypeList.value = relationTypes.map((x) => ({
          ctRelationTypeId: x.ctRelationTypeId,
          relationTypeName: x.relationTypeName,
        }));

        if (groupList.value.length > 0 && selectedGroupId.value === '0') {
          selectedGroupId.value = groupList.value[0].ctGroupId;
        }
      };

      const loadMindMapByGroup = async () => {
        if (selectedGroupId.value === '0') {
          groupCodeTypeIds.value = [];
          edgeList.value = [];
          return;
        }

        const groupRelaList = await CTCodeTypeGroupRela_GetObjLstAsync(
          `CtGroupId='${selectedGroupId.value}'`,
        );

        groupCodeTypeIds.value = groupRelaList
          .sort((a, b) => a.orderNum - b.orderNum)
          .map((x) => x.codeTypeId);

        if (groupCodeTypeIds.value.length === 0) {
          edgeList.value = [];
          return;
        }

        const inSql = makeInSql(groupCodeTypeIds.value);
        const relationList = await GC_CodeTypeRelation_GetObjLstAsync(
          `ParentCodeTypeId in (${inSql})`,
        );

        edgeList.value = relationList.map((x) => {
          const childName = codeTypeNameMap.value.get(x.childCodeTypeId) ?? x.childCodeTypeId;
          const relationTypeName =
            relationTypeNameMap.value.get(x.ctRelationTypeId) ?? x.ctRelationTypeId;
          return {
            relationId: x.relationId,
            parentCodeTypeId: x.parentCodeTypeId,
            childCodeTypeId: x.childCodeTypeId,
            ctRelationTypeId: x.ctRelationTypeId,
            childCodeTypeName: childName,
            relationTypeName,
          };
        });

        loadNodePositionLayout();

        await nextTick();
        updateNodeLayout();
      };

      const reloadAll = async () => {
        loading.value = true;
        message.value = '正在加载数据...';
        try {
          await loadBaseData();
          await loadMindMapByGroup();
          message.value = '';
        } catch (error: any) {
          console.error(error);
          message.value = `加载失败: ${String(error)}`;
        } finally {
          loading.value = false;
        }
      };

      const onGroupChanged = async () => {
        newParentCodeTypeId.value = '0';
        newChildCodeTypeId.value = '0';
        nodeKeyword.value = '';
        filterRelationTypeId.value = '0';
        layoutStrategy.value = 'layer';
        await loadMindMapByGroup();
      };

      const pickParent = (codeTypeId: string) => {
        if (justDraggedNodeId.value === codeTypeId) {
          justDraggedNodeId.value = '';
          return;
        }
        newParentCodeTypeId.value = codeTypeId;
      };

      const doAddRelation = async (silentSuccess: boolean) => {
        if (loading.value) return;
        if (selectedGroupId.value === '0') {
          alert('请先选择代码组!');
          return;
        }
        if (newParentCodeTypeId.value === '0') {
          alert('请选择父代码类型!');
          return;
        }
        if (newChildCodeTypeId.value === '0') {
          alert('请选择子代码类型!');
          return;
        }
        if (newRelationTypeId.value === '0') {
          alert('请选择关系类型!');
          return;
        }

        const exists = edgeList.value.some(
          (x) =>
            x.parentCodeTypeId === newParentCodeTypeId.value &&
            x.childCodeTypeId === newChildCodeTypeId.value &&
            x.ctRelationTypeId === newRelationTypeId.value,
        );
        if (exists) {
          alert('该关系已存在，无需重复新增!');
          return;
        }

        const obj = new clsGC_CodeTypeRelationEN();
        obj.parentCodeTypeId = newParentCodeTypeId.value;
        obj.childCodeTypeId = newChildCodeTypeId.value;
        obj.ctRelationTypeId = newRelationTypeId.value;
        obj.description = '思维导图维护新增';

        loading.value = true;
        message.value = '正在新增关系...';
        try {
          const ok = await GC_CodeTypeRelation_AddNewRecordAsync(obj);
          if (!ok) {
            alert('新增失败!');
            return;
          }
          await loadMindMapByGroup();
          message.value = '';
          if (!silentSuccess) {
            alert('新增成功!');
          }
        } catch (error: any) {
          console.error(error);
          alert(`新增失败: ${String(error)}`);
        } finally {
          loading.value = false;
        }
      };

      const addRelation = async () => {
        await doAddRelation(false);
      };

      const deleteRelation = async (relationId: number) => {
        if (loading.value) return;
        const ok = confirm('确认删除该关系吗?');
        if (!ok) return;

        loading.value = true;
        message.value = '正在删除关系...';
        try {
          const delCount = await GC_CodeTypeRelation_DelRecordAsync({ relationId });
          if (delCount <= 0) {
            alert('删除失败!');
            return;
          }
          await loadMindMapByGroup();
          message.value = '';
        } catch (error: any) {
          console.error(error);
          alert(`删除失败: ${String(error)}`);
        } finally {
          loading.value = false;
        }
      };

      const setNodeRef = (codeTypeId: string, el: unknown) => {
        if (el == null) {
          nodeElementMap.delete(codeTypeId);
          return;
        }
        if (el instanceof HTMLElement) {
          nodeElementMap.set(codeTypeId, el);
        }
      };

      const getNodeStyle = (codeTypeId: string) => {
        const pos = nodePositionMap.value[codeTypeId] ?? { dx: 0, dy: 0 };
        return {
          transform: `translate(${pos.dx}px, ${pos.dy}px)`,
        };
      };

      const nodeDragMoveHandler = (evt: MouseEvent) => {
        if (!nodeDragState.value.active) return;
        const nodeId = nodeDragState.value.nodeId;
        if (nodeId === '') return;

        const deltaX = evt.clientX - nodeDragState.value.startClientX;
        const deltaY = evt.clientY - nodeDragState.value.startClientY;
        const nextDx = nodeDragState.value.startDx + deltaX;
        const nextDy = nodeDragState.value.startDy + deltaY;

        nodePositionMap.value = {
          ...nodePositionMap.value,
          [nodeId]: { dx: nextDx, dy: nextDy },
        };

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          nodeDragState.value.hasMoved = true;
        }

        updateNodeLayout();
      };

      const nodeDragUpHandler = () => {
        if (!nodeDragState.value.active) return;

        const draggedNodeId = nodeDragState.value.nodeId;
        const moved = nodeDragState.value.hasMoved;

        nodeDragState.value = {
          active: false,
          nodeId: '',
          startClientX: 0,
          startClientY: 0,
          startDx: 0,
          startDy: 0,
          hasMoved: false,
        };

        window.removeEventListener('mousemove', nodeDragMoveHandler);
        window.removeEventListener('mouseup', nodeDragUpHandler);

        if (moved && draggedNodeId !== '') {
          justDraggedNodeId.value = draggedNodeId;
          saveNodePositionLayout();
          setTimeout(() => {
            if (justDraggedNodeId.value === draggedNodeId) {
              justDraggedNodeId.value = '';
            }
          }, 200);
        }
      };

      const startNodeDrag = (evt: MouseEvent, codeTypeId: string) => {
        const target = evt.target as HTMLElement | null;
        if (target?.closest('.node-port') != null) return;
        if (target?.closest('button') != null) return;

        const curr = nodePositionMap.value[codeTypeId] ?? { dx: 0, dy: 0 };
        nodeDragState.value = {
          active: true,
          nodeId: codeTypeId,
          startClientX: evt.clientX,
          startClientY: evt.clientY,
          startDx: curr.dx,
          startDy: curr.dy,
          hasMoved: false,
        };

        window.addEventListener('mousemove', nodeDragMoveHandler);
        window.addEventListener('mouseup', nodeDragUpHandler);
      };

      const updateNodeLayout = () => {
        const mapBody = mapBodyRef.value;
        if (mapBody == null) return;

        const mapBodyRect = mapBody.getBoundingClientRect();
        const map: Record<string, { x: number; y: number; w: number; h: number }> = {};
        let maxRight = mapBody.clientWidth;
        let maxBottom = mapBody.clientHeight;
        nodeElementMap.forEach((el, id) => {
          const rect = el.getBoundingClientRect();
          const x = rect.left - mapBodyRect.left;
          const y = rect.top - mapBodyRect.top;
          map[id] = {
            x,
            y,
            w: rect.width,
            h: rect.height,
          };
          maxRight = Math.max(maxRight, x + rect.width + 40);
          maxBottom = Math.max(maxBottom, y + rect.height + 40);
        });
        nodeRectMap.value = map;
        const smallMode = nodeSizeMode.value === 'small';
        svgWidth.value = Math.max(Math.ceil(maxRight), smallMode ? 560 : 900);
        svgHeight.value = Math.max(Math.ceil(maxBottom), smallMode ? 360 : 520);
      };

      const dragMoveHandler = (evt: MouseEvent) => {
        if (!linkDraft.value.active) return;
        const mapBody = mapBodyRef.value;
        if (mapBody == null) return;
        const rect = mapBody.getBoundingClientRect();
        const x2 = evt.clientX - rect.left;
        const y2 = evt.clientY - rect.top;
        linkDraft.value.x2 = x2;
        linkDraft.value.y2 = y2;

        const fromRect = nodeRectMap.value[linkDraft.value.fromCodeTypeId];
        if (fromRect != null) {
          const start = getPortPoint(fromRect, linkDraft.value.fromPortSide);
          linkDraft.value.x1 = start.x;
          linkDraft.value.y1 = start.y;
        }
      };

      const stopLinkDrag = () => {
        linkDraft.value.active = false;
        window.removeEventListener('mousemove', dragMoveHandler);
        window.removeEventListener('mouseup', dragUpHandler);
      };

      const dragUpHandler = async (evt: MouseEvent) => {
        const fromCodeTypeId = linkDraft.value.fromCodeTypeId;
        const target = evt.target as HTMLElement | null;
        const targetEl = target?.closest('[data-code-type-id]') as HTMLElement | null;
        stopLinkDrag();

        if (targetEl == null || fromCodeTypeId === '') return;
        const toCodeTypeId = targetEl.dataset.codeTypeId ?? '';
        if (toCodeTypeId === '' || toCodeTypeId === fromCodeTypeId) return;

        newParentCodeTypeId.value = fromCodeTypeId;
        newChildCodeTypeId.value = toCodeTypeId;
        await doAddRelation(true);
      };

      const startLinkDrag = (
        evt: MouseEvent,
        fromCodeTypeId: string,
        fromPortSide: PortSide = 'right',
      ) => {
        if (newRelationTypeId.value === '0') {
          alert('请先选择关系类型，再进行拖拽连线!');
          return;
        }
        const fromRect = nodeRectMap.value[fromCodeTypeId];
        const mapBody = mapBodyRef.value;
        if (fromRect == null || mapBody == null) {
          return;
        }

        const mapBodyRect = mapBody.getBoundingClientRect();
        const x2 = evt.clientX - mapBodyRect.left;
        const y2 = evt.clientY - mapBodyRect.top;
        const start = getPortPoint(fromRect, fromPortSide);

        linkDraft.value = {
          active: true,
          fromCodeTypeId,
          fromPortSide,
          x1: start.x,
          y1: start.y,
          x2,
          y2,
        };

        window.addEventListener('mousemove', dragMoveHandler);
        window.addEventListener('mouseup', dragUpHandler);
      };

      const downloadBlob = (blob: Blob, fileName: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };

      const exportGraphJson = () => {
        const data = {
          groupId: selectedGroupId.value,
          groupName: selectedGroup.value?.groupName ?? '',
          nodes: filteredNodes.value.map((x) => ({ id: x.codeTypeId, name: x.codeTypeName })),
          edges: filteredEdges.value.map((x) => ({
            relationId: x.relationId,
            parentCodeTypeId: x.parentCodeTypeId,
            childCodeTypeId: x.childCodeTypeId,
            ctRelationTypeId: x.ctRelationTypeId,
            relationTypeName: x.relationTypeName,
          })),
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], {
          type: 'application/json;charset=utf-8',
        });
        downloadBlob(blob, `CodeTypeRelation_${selectedGroupId.value}.json`);
      };

      const exportGraphSvg = () => {
        updateNodeLayout();
        const padX = 10;
        const padY = 10;
        const width = svgWidth.value;
        const height = svgHeight.value;

        const nodeSvg = filteredNodes.value
          .map((n) => {
            const r = nodeRectMap.value[n.codeTypeId];
            if (r == null) return '';
            const x = r.x + padX;
            const y = r.y + padY;
            return [
              `<rect x="${x}" y="${y}" width="${r.w}" height="${r.h}" rx="8" ry="8" fill="#ffffff" stroke="#7aa5cc"/>`,
              `<text x="${x + 10}" y="${
                y + 22
              }" fill="#114776" font-size="13" font-family="Microsoft YaHei, sans-serif">${
                n.codeTypeName
              }</text>`,
              `<text x="${x + 10}" y="${
                y + 40
              }" fill="#6d8091" font-size="11" font-family="Microsoft YaHei, sans-serif">${
                n.codeTypeId
              }</text>`,
            ].join('');
          })
          .join('');

        const markerDefs = relationMarkers.value
          .map(
            (
              mk,
            ) => `<marker id="${mk.markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
  <path d="M0,0 L8,4 L0,8 z" fill="${mk.color}"/>
</marker>`,
          )
          .join('');

        const lineSvg = relationLines.value
          .map((ln) => {
            const pathD = ln.pathD.replace(/([0-9.-]+) ([0-9.-]+)/g, (_m, x, y) => {
              return `${Number(x) + padX} ${Number(y) + padY}`;
            });
            return [
              `<path d="${pathD}" fill="none" stroke="${ln.color}" stroke-width="1.5" marker-end="url(#${ln.markerId})"/>`,
              `<text x="${ln.labelX + padX}" y="${ln.labelY + padY}" fill="${
                ln.color
              }" font-size="11" text-anchor="middle" font-family="Microsoft YaHei, sans-serif">${
                ln.label
              }</text>`,
            ].join('');
          })
          .join('');

        const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width + 20}" height="${
          height + 20
        }" viewBox="0 0 ${width + 20} ${height + 20}">
<defs>${markerDefs}</defs>
<rect x="0" y="0" width="100%" height="100%" fill="#f6fbff"/>
${lineSvg}
${nodeSvg}
</svg>`;

        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        downloadBlob(blob, `CodeTypeRelation_${selectedGroupId.value}.svg`);
      };

      onMounted(async () => {
        loadNodeSizeMode();
        await reloadAll();
        window.addEventListener('resize', updateNodeLayout);
      });

      onBeforeUnmount(() => {
        stopLinkDrag();
        window.removeEventListener('mousemove', nodeDragMoveHandler);
        window.removeEventListener('mouseup', nodeDragUpHandler);
        window.removeEventListener('resize', updateNodeLayout);
      });

      watch(
        () => [
          filteredNodes.value.length,
          filteredEdges.value.length,
          nodeKeyword.value,
          filterRelationTypeId.value,
          nodeSizeMode.value,
        ],
        async () => {
          await nextTick();
          updateNodeLayout();
        },
      );

      return {
        canvasRef,
        mapBodyRef,
        svgWidth,
        svgHeight,
        message,
        nodeKeyword,
        topPanelCollapsed,
        topPanelScale,
        isAddCodeTypeDrawerVisible,
        topPanelScaleText,
        nodeSizeMode,
        isSmallMode,
        nodeSizeModeClass,
        nodeSizeToggleText,
        filterRelationTypeId,
        layoutStrategy,
        filteredNodes,
        filteredEdges,
        relationLines,
        hoveredRelationId,
        relationMarkers,
        draftLineColor,
        linkDraft,
        selectedGroup,
        selectedGroupId,
        newParentCodeTypeId,
        newChildCodeTypeId,
        newRelationTypeId,
        groupList,
        codeTypeList,
        relationTypeList,
        groupNodes,
        edgeList,
        reloadAll,
        onGroupChanged,
        autoArrangeNodes,
        clearLayoutOffsets,
        toggleNodeSizeMode,
        toggleTopPanelCollapsed,
        toggleTopPanelScale,
        openAddCodeTypeDrawer,
        closeAddCodeTypeDrawer,
        onCodeTypeAddedToGroup,
        pickParent,
        setNodeRef,
        getNodeStyle,
        getNodePortClass,
        onRelationMouseEnter,
        onRelationMouseLeave,
        startNodeDrag,
        startLinkDrag,
        addRelation,
        deleteRelation,
        exportGraphSvg,
        exportGraphJson,
      };
    },
  });
</script>

<style scoped>
  .mindmap-page {
    padding: 12px;
  }

  .top-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
    gap: 16px;
  }

  .top-panel-tools {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .title {
    margin: 0;
    color: #0f4c81;
  }

  .msg {
    min-height: 20px;
  }

  .add-code-type-drawer-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.28);
    z-index: 3500;
    display: flex;
    justify-content: flex-end;
  }

  .add-code-type-drawer {
    width: 560px;
    max-width: calc(100vw - 24px);
    height: 100%;
    background: #fff;
    border-left: 1px solid #d7e3ef;
    box-shadow: -6px 0 24px rgba(24, 48, 88, 0.2);
    padding: 12px;
    overflow-y: auto;
  }

  .drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .query-panel {
    border: 1px solid #d7e3ef;
    background: linear-gradient(135deg, #f8fbff 0%, #edf5ff 100%);
    margin-bottom: 8px;
    width: fit-content;
    max-width: 100%;
    padding: 10px 12px;
  }

  .query-panel .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -6px;
    margin-right: -6px;
  }

  .query-panel .form-group {
    margin-bottom: 6px;
    padding-left: 6px;
    padding-right: 6px;
  }

  .query-panel .col-md-3 {
    flex: 0 0 230px;
    max-width: 230px;
  }

  .query-panel .col-md-2 {
    flex: 0 0 180px;
    max-width: 180px;
  }

  .query-panel .col-md-1 {
    flex: 0 0 84px;
    max-width: 84px;
  }

  .query-panel .col-md-5,
  .query-panel .col-md-4 {
    flex: 0 0 auto;
    max-width: none;
  }

  .query-panel.is-small {
    padding: 8px 10px;
  }

  .query-panel.is-small label {
    font-size: 12px;
    margin-bottom: 2px;
  }

  .query-panel.is-small .form-control-sm {
    font-size: 12px;
    height: 28px;
    padding: 2px 6px;
  }

  .query-panel.is-small .btn.btn-sm {
    font-size: 12px;
    padding: 0.16rem 0.42rem;
  }

  .query-panel.is-collapsed {
    padding-bottom: 4px;
  }

  .actions-row {
    display: flex;
    align-items: end;
    justify-content: flex-start;
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .layout-actions {
    display: flex;
    align-items: end;
  }

  .layout-actions-right {
    display: flex;
    align-items: end;
    justify-content: flex-start;
  }

  .legend-line {
    font-size: 13px;
    color: #4a6072;
    margin-bottom: 8px;
  }

  .mindmap-wrap {
    min-height: 520px;
    border: 1px solid #d8e4ef;
    border-radius: 8px;
    background: radial-gradient(circle at 2px 2px, rgba(15, 76, 129, 0.15) 1px, transparent 0),
      linear-gradient(180deg, #ffffff 0%, #f6fbff 100%);
    background-size: 26px 26px, 100% 100%;
    padding: 14px;
    overflow: auto;
  }

  .map-body {
    position: relative;
    min-height: 420px;
  }

  .relation-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    z-index: 1;
  }

  .line-main {
    stroke: #447aaa;
    stroke-width: 1.5;
    opacity: 0.85;
    pointer-events: stroke;
    transition: opacity 0.15s ease, stroke-width 0.15s ease;
  }

  .line-main.is-hovered {
    stroke-width: 2.2;
    opacity: 1;
  }

  .line-main.is-dim {
    opacity: 0.22;
  }

  .line-label {
    fill: #2a5d89;
    font-size: 11px;
    text-anchor: middle;
  }

  .node-size-small .line-main {
    stroke-width: 1.1;
    opacity: 0.72;
  }

  .node-size-small .line-label {
    display: none;
  }

  .line-draft {
    stroke: #ff7a00;
    stroke-width: 2;
    stroke-dasharray: 4 4;
  }

  .root-card {
    width: 320px;
    margin: 0 auto 12px auto;
    border: 1px solid #0f4c81;
    border-radius: 8px;
    background: #0f4c81;
    color: #fff;
    padding: 8px 12px;
    box-shadow: 0 6px 18px rgba(15, 76, 129, 0.25);
  }

  .root-title {
    font-size: 16px;
    font-weight: 700;
  }

  .root-sub {
    font-size: 12px;
    opacity: 0.9;
  }

  .empty-tip {
    padding: 20px;
    color: #6b7f92;
  }

  .branch-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
    position: relative;
    z-index: 2;
  }

  .node-size-small .branch-list {
    grid-template-columns: repeat(auto-fit, minmax(124px, 140px));
    gap: 12px;
    justify-content: start;
  }

  .node-size-small .branch-head {
    padding: 2px 4px;
    min-height: 20px;
    border-bottom: none;
  }

  .node-size-small .node-name {
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    max-width: 86px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .node-size-small .node-id {
    display: none;
  }

  .node-size-small .edge-list {
    display: none;
  }

  .node-size-small .edge-item {
    display: none;
  }

  .node-size-small .drag-handle {
    right: 14px;
    top: 3px;
    width: 6px;
    height: 12px;
    background-size: 3px 3px;
  }

  .node-size-small .node-port {
    width: 7px;
    height: 7px;
    border-width: 1px;
    box-shadow: 0 0 0 1px rgba(15, 76, 129, 0.1);
  }

  .node-size-small .branch-item {
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(18, 57, 91, 0.12);
  }

  .node-size-small .branch-item:hover {
    transform: none;
    box-shadow: 0 1px 4px rgba(18, 57, 91, 0.18);
  }

  .node-size-small .branch-item.active {
    box-shadow: 0 0 0 1px rgba(15, 76, 129, 0.24);
  }

  .branch-item {
    border: 1px solid #bed3e6;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(18, 57, 91, 0.08);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .branch-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(18, 57, 91, 0.15);
  }

  .branch-item.active {
    border-color: #0f4c81;
    box-shadow: 0 0 0 2px rgba(15, 76, 129, 0.15);
  }

  .branch-head {
    position: relative;
    padding: 8px 10px;
    border-bottom: 1px dashed #d9e5f0;
    background: #f8fbff;
    cursor: move;
  }

  .drag-handle {
    position: absolute;
    right: 30px;
    top: 8px;
    width: 10px;
    height: 20px;
    background-image: radial-gradient(#6b8cab 1px, transparent 1px);
    background-size: 4px 4px;
    opacity: 0.75;
    pointer-events: none;
  }

  .node-port {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #0f4c81;
    background: #ffffff;
    box-shadow: 0 0 0 1px rgba(15, 76, 129, 0.18);
    cursor: crosshair;
    z-index: 3;
  }

  .node-port:hover {
    background: #0f4c81;
  }

  .node-port.is-highlighted {
    background: #0f4c81;
    box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.2);
  }

  .node-port-top {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .node-port-right {
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .node-port-bottom {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .node-port-left {
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .node-name {
    font-weight: 700;
    color: #114776;
  }

  .node-id {
    font-size: 12px;
    color: #6d8091;
  }

  .edge-list {
    padding: 8px 10px;
  }

  .edge-item {
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    background: #f2f8ff;
    border: 1px solid #d3e5f8;
    padding: 4px 8px;
    margin-bottom: 6px;
  }

  .edge-arrow {
    color: #0f4c81;
    font-weight: 600;
    white-space: nowrap;
  }

  .edge-target {
    color: #2b3f52;
    flex: 1;
  }

  .edge-empty {
    padding: 10px;
    color: #8898a9;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    .branch-list {
      grid-template-columns: 1fr;
    }
  }
</style>
