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
        <div class="form-group col-md-4 layout-actions db-layout-actions">
          <button type="button" class="btn btn-sm btn-outline-success" @click="saveLayoutToDb"
            >保存布局到数据库</button
          >
          <button type="button" class="btn btn-sm btn-outline-info ml-2" @click="loadLayoutFromDb"
            >从数据库加载布局</button
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

      <div v-show="!topPanelCollapsed" class="form-row">
        <div class="form-group col-md-2">
          <label for="txtCanvasWidth">画布宽</label>
          <input
            id="txtCanvasWidth"
            v-model.number="canvasWidthInput"
            type="number"
            min="400"
            step="10"
            class="form-control form-control-sm"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="txtCanvasHeight">画布高</label>
          <input
            id="txtCanvasHeight"
            v-model.number="canvasHeightInput"
            type="number"
            min="320"
            step="10"
            class="form-control form-control-sm"
          />
        </div>
        <div class="form-group col-md-8 layout-actions-right">
          <button type="button" class="btn btn-sm btn-outline-primary" @click="applyCanvasSize"
            >应用画布尺寸</button
          >
          <button
            type="button"
            class="btn btn-sm ml-2"
            :class="canvasAutoSize ? 'btn-success' : 'btn-outline-secondary'"
            @click="toggleCanvasAutoSize"
          >
            {{ canvasAutoSize ? '画布自动缩放: 开' : '画布自动缩放: 关' }}
          </button>
          <span class="ml-2 text-secondary">手工尺寸下，重排不会再自动扩大画布</span>
        </div>
      </div>

      <div v-show="!topPanelCollapsed" class="form-row">
        <div class="form-group col-md-6">
          <label for="rngLayerDensity">层高压缩系数: {{ layerDensityFactorText }}</label>
          <input
            id="rngLayerDensity"
            v-model.number="layerDensityFactor"
            type="range"
            min="1.2"
            max="2.6"
            step="0.05"
            class="form-control-range"
            @input="scheduleAutoArrangeByDensity"
          />
        </div>
        <div class="form-group col-md-6 layout-actions-right">
          <span class="text-secondary">1.2 更紧凑，2.6 更疏松；滑动时会实时重排预览</span>
        </div>
      </div>

      <div v-show="!topPanelCollapsed" class="form-row">
        <div class="form-group col-md-3">
          <label for="selGenerationTarget">生成顺序查询目标</label>
          <select
            id="selGenerationTarget"
            v-model="generationTargetCodeTypeId"
            class="form-control form-control-sm"
          >
            <option value="0">请选择代码类型</option>
            <option v-for="n in generationTargetOptions" :key="n.codeTypeId" :value="n.codeTypeId">
              {{ n.codeTypeName }} ({{ n.codeTypeId }})
            </option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="selGenerationRelationType">排序关系类型</label>
          <select
            id="selGenerationRelationType"
            v-model="generationOrderRelationTypeId"
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
        <div class="form-group col-md-6 layout-actions-right">
          <span class="text-secondary"
            >选择目标结点后，会显示“前置依赖 -> ... -> 目标”的建议生成顺序</span
          >
        </div>
      </div>
    </div>

    <div class="legend-line">
      <span>组内代码类型数: {{ filteredNodes.length }}/{{ groupNodes.length }}</span>
      <span class="ml-3">关系数: {{ filteredEdges.length }}/{{ edgeList.length }}</span>
      <span v-if="selectedNodeText !== ''" class="ml-3 text-info"
        >已选结点: {{ selectedNodeText }}</span
      >
      <span v-if="selectedRelationEdge != null" class="ml-3 text-primary"
        >已选关系: {{ selectedRelationText }}</span
      >
      <button
        v-if="newParentCodeTypeId !== '0'"
        type="button"
        class="btn btn-sm btn-outline-danger ml-2"
        @click="deleteSelectedNodeFromGroup"
      >
        删除已选结点(从组中移除)
      </button>
      <button
        v-if="selectedRelationEdge != null"
        type="button"
        class="btn btn-sm btn-outline-danger ml-2"
        @click="deleteSelectedRelation"
      >
        删除已选关系
      </button>
      <span v-if="!topPanelCollapsed" class="ml-3"
        >提示: 点击节点可选父类型；按住节点四边端点拖到目标节点可连线创建关系</span
      >
      <span v-else class="ml-3">提示: 顶部已折叠，点击“展开高级项”可显示新增/重排等操作</span>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary ml-2"
        @click="toggleLayoutDebugPanel"
      >
        {{ layoutDebugVisible ? '隐藏调试信息' : '显示调试信息' }}
      </button>
    </div>

    <div v-if="layoutDebugVisible" class="layout-debug-panel">
      <div class="layout-debug-summary">
        <span>节点: {{ filteredNodes.length }}</span>
        <span class="ml-2">连线: {{ relationLines.length }}</span>
        <span class="ml-2">无矩形节点: {{ layoutDebugMissingRectCount }}</span>
        <span class="ml-2"
          >边界: x[{{ layoutDebugBounds.minX }}, {{ layoutDebugBounds.maxX }}], y[{{
            layoutDebugBounds.minY
          }}, {{ layoutDebugBounds.maxY }}]</span
        >
      </div>
      <div class="layout-debug-table-wrap">
        <table class="layout-debug-table">
          <thead>
            <tr>
              <th>CodeTypeId / 名称</th>
              <th>层</th>
              <th>偏移(dx,dy)</th>
              <th>矩形(x,y,w,h)</th>
              <th>画布内</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in layoutDebugRows" :key="row.codeTypeId">
              <td>{{ row.codeTypeId }} {{ row.codeTypeName }}</td>
              <td>{{ row.layer }}</td>
              <td>{{ row.dx }}, {{ row.dy }}</td>
              <td>{{ row.rectText }}</td>
              <td :class="row.inView ? 'text-success' : 'text-danger'">{{
                row.inView ? '是' : '否'
              }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="generationOrderRows.length > 0" class="generation-order-panel">
      <div class="generation-order-head">
        <strong>生成顺序建议</strong>
        <span class="ml-2 text-secondary">{{ generationOrderSummary }}</span>
      </div>
      <div v-if="generationOrderCycleWarning !== ''" class="text-warning mt-1">
        {{ generationOrderCycleWarning }}
      </div>
      <div class="generation-order-steps mt-2">
        <span v-for="(row, idx) in generationOrderRows" :key="`${row.codeTypeId}-${idx}`">
          <span class="step-chip">{{ idx + 1 }}. {{ row.codeTypeName }}({{ row.codeTypeId }})</span>
          <span v-if="idx < generationOrderRows.length - 1" class="step-arrow">-></span>
        </span>
      </div>
      <div v-if="generationOrderDerivationRows.length > 0" class="generation-order-detail mt-2">
        <div class="generation-order-detail-title">推导明细</div>
        <div
          v-for="(row, idx) in generationOrderDerivationRows"
          :key="`${row.nodeCodeTypeId}-${row.dependencyCodeTypeId}-${idx}`"
          class="generation-order-detail-row"
        >
          {{ row.nodeCodeTypeName }}({{ row.nodeCodeTypeId }}) 依赖
          {{ row.dependencyCodeTypeName }}({{ row.dependencyCodeTypeId }})
          <span class="text-secondary ml-1">[{{ row.relationTypeName }}]</span>
        </div>
      </div>
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
        @click="clearSelectedRelation"
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

          <g v-for="band in dragLayerBands" :key="band.id" class="layer-drag-band">
            <rect :x="0" :y="band.top" :width="svgWidth" :height="band.height" />
            <text x="8" :y="band.top + 13">{{ band.label }}</text>
          </g>

          <path
            v-for="ln in relationLines"
            :key="ln.id"
            :d="ln.pathD"
            :class="[
              'line-main',
              {
                'is-hovered': hoveredRelationId === ln.id,
                'is-selected': selectedRelationId === ln.id,
                'is-dim': hoveredRelationId !== '' && hoveredRelationId !== ln.id,
              },
            ]"
            :stroke="ln.color"
            :marker-end="`url(#${ln.markerId})`"
            @mouseenter="onRelationMouseEnter(ln)"
            @mouseleave="onRelationMouseLeave"
            @click.stop="onRelationClick(ln)"
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

          <g v-for="ln in layerGuideLines" :key="ln.id" class="layer-guide-line">
            <line :x1="0" :y1="ln.y" :x2="svgWidth" :y2="ln.y" />
            <rect x="6" :y="ln.y - 20" :width="Math.max(120, ln.label.length * 11)" height="14" />
            <text x="10" :y="ln.y - 9">{{ ln.label }}</text>
          </g>
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
              <span class="node-layer-badge">{{ getNodeLayerNumber(node.codeTypeId) }}</span>
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
  import {
    buildBezierPath,
    buildLayerGuideLines,
    buildLongestPathLayerMap,
    buildNodeLayerNumberMap,
    getPortPoint,
    getPortSideTowardTarget,
    nudgeAnchorOutward,
    type PortSide,
    sortNodeIdsByLayer,
  } from '@/views/GeneCode/GC_CodeTypeRelationMindMapAlgo';
  import { CTCodeTypeGroup_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
  import {
    CTCodeTypeGroupRela_DelRecKeyLstsAsync,
    CTCodeTypeGroupRela_DelRecordAsync,
    CTCodeTypeGroupRela_GetObjLstAsync,
    CTCodeTypeGroupRela_UpdateRecordAsync,
  } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';
  import { clsCTCodeTypeGroupRelaEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
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

  type GenerationOrderRow = {
    codeTypeId: string;
    codeTypeName: string;
  };

  type GenerationOrderDerivationRow = {
    nodeCodeTypeId: string;
    nodeCodeTypeName: string;
    dependencyCodeTypeId: string;
    dependencyCodeTypeName: string;
    relationTypeId: string;
    relationTypeName: string;
  };

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
      const canvasWidthInput = ref(1200);
      const canvasHeightInput = ref(620);
      const canvasAutoSize = ref(false);
      const layerDensityFactor = ref(2.2);
      let densityArrangeTimer: number | null = null;

      const selectedGroupId = ref('0');
      const newParentCodeTypeId = ref('0');
      const newChildCodeTypeId = ref('0');
      const newRelationTypeId = ref('0');
      const filterRelationTypeId = ref('0');
      const nodeKeyword = ref('');
      const generationTargetCodeTypeId = ref('0');
      const generationOrderRelationTypeId = ref('0');
      const layoutStrategy = ref<'layer' | 'name' | 'id'>('layer');
      const nodeSizeMode = ref<'small' | 'large'>('small');
      const topPanelCollapsed = ref(true);
      const topPanelScale = ref<'small' | 'normal'>('small');
      const isAddCodeTypeDrawerVisible = ref(false);
      const layoutDebugVisible = ref(true);

      const groupList = ref<Array<GroupDto>>([]);
      const codeTypeList = ref<Array<CodeTypeDto>>([]);
      const relationTypeList = ref<Array<RelationTypeDto>>([]);

      const groupCodeTypeIds = ref<Array<string>>([]);
      const groupRelaObjMap = ref<Map<string, clsCTCodeTypeGroupRelaEN>>(new Map());
      const edgeList = ref<Array<EdgeView>>([]);
      const nodeRectMap = ref<Record<string, { x: number; y: number; w: number; h: number }>>({});
      const nodeElementMap = new Map<string, HTMLElement>();
      const nodePositionMap = ref<Record<string, { dx: number; dy: number }>>({});
      const MAX_LAYOUT_OFFSET = 50000;

      const clampLayoutOffset = (n: number) => {
        if (!Number.isFinite(n)) return 0;
        return Math.max(-MAX_LAYOUT_OFFSET, Math.min(MAX_LAYOUT_OFFSET, n));
      };

      const normalizeNodePositionMap = (map: Record<string, { dx: number; dy: number }>) => {
        const normalized: Record<string, { dx: number; dy: number }> = {};
        Object.entries(map).forEach(([id, pos]) => {
          const dx = clampLayoutOffset(Number(pos?.dx ?? 0));
          const dy = clampLayoutOffset(Number(pos?.dy ?? 0));
          normalized[id] = { dx, dy };
        });
        return normalized;
      };

      const nodeDragState = ref({
        active: false,
        nodeId: '',
        startClientX: 0,
        startClientY: 0,
        startDx: 0,
        startDy: 0,
        startRectX: 0,
        startRectY: 0,
        startRectW: 0,
        startRectH: 0,
        layerMinDy: null as number | null,
        layerMaxDy: null as number | null,
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
      const selectedRelationId = ref('');

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

      const layerDensityFactorText = computed(() => {
        const x = Math.min(2.6, Math.max(1.2, Number(layerDensityFactor.value) || 2.2));
        return x.toFixed(2);
      });

      const scheduleAutoArrangeByDensity = () => {
        if (selectedGroupId.value === '0' || layoutStrategy.value !== 'layer') return;
        if (densityArrangeTimer != null) {
          window.clearTimeout(densityArrangeTimer);
        }
        densityArrangeTimer = window.setTimeout(() => {
          densityArrangeTimer = null;
          autoArrangeNodes();
        }, 80);
      };

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

      const generationTargetOptions = computed<Array<CodeTypeDto>>(() => {
        return groupCodeTypeIds.value
          .map((id) => ({
            codeTypeId: id,
            codeTypeName: codeTypeNameMap.value.get(id) ?? id,
          }))
          .sort((a, b) => {
            const c = a.codeTypeName.localeCompare(b.codeTypeName, 'zh-CN');
            if (c !== 0) return c;
            return a.codeTypeId.localeCompare(b.codeTypeId, 'zh-CN');
          });
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

      const getPortKey = (codeTypeId: string, side: PortSide) => `${codeTypeId}:${side}`;

      const getNodePortClass = (codeTypeId: string, side: PortSide) => {
        return highlightedPortKeys.value.includes(getPortKey(codeTypeId, side))
          ? 'is-highlighted'
          : '';
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
              const bezier = buildBezierPath(pAnchor, cAnchor, 0.2);
              pathD = bezier.pathD;
              labelX = bezier.labelX;
              labelY = bezier.labelY;
            } else {
              const bezier = buildBezierPath(pAnchor, cAnchor, 0.35);
              pathD = bezier.pathD;
              labelX = bezier.labelX;
              labelY = bezier.labelY;
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

      const onRelationClick = (ln: { id: string }) => {
        selectedRelationId.value = ln.id;
      };

      const clearSelectedRelation = () => {
        selectedRelationId.value = '';
      };

      const selectedRelationEdge = computed(() => {
        if (selectedRelationId.value === '') return null;
        return (
          edgeList.value.find((x) => String(x.relationId) === selectedRelationId.value) ?? null
        );
      });

      const selectedRelationText = computed(() => {
        const edge = selectedRelationEdge.value;
        if (edge == null) return '';
        const parentName =
          codeTypeNameMap.value.get(edge.parentCodeTypeId) ?? edge.parentCodeTypeId;
        const childName = codeTypeNameMap.value.get(edge.childCodeTypeId) ?? edge.childCodeTypeId;
        const relationName =
          relationTypeNameMap.value.get(edge.ctRelationTypeId) ?? edge.ctRelationTypeId;
        return `${parentName} -> ${childName} (${relationName})`;
      });

      const selectedNodeText = computed(() => {
        if (newParentCodeTypeId.value === '0') return '';
        const nodeName = codeTypeNameMap.value.get(newParentCodeTypeId.value) ?? '';
        if (nodeName === '') return newParentCodeTypeId.value;
        return `${nodeName} (${newParentCodeTypeId.value})`;
      });

      const generationOrderResult = computed(() => {
        const targetId = generationTargetCodeTypeId.value;
        if (targetId === '0') {
          return {
            rows: [] as Array<GenerationOrderRow>,
            derivationRows: [] as Array<GenerationOrderDerivationRow>,
            cycleWarning: '',
          };
        }

        const groupNodeSet = new Set(groupCodeTypeIds.value);
        if (!groupNodeSet.has(targetId)) {
          return {
            rows: [] as Array<GenerationOrderRow>,
            derivationRows: [] as Array<GenerationOrderDerivationRow>,
            cycleWarning: '目标结点不在当前组中。',
          };
        }

        // 生成顺序按“父依赖子”解释：ParentCodeTypeId 生成前需要先生成 ChildCodeTypeId。
        const dependencyByNode = new Map<
          string,
          Array<{ childId: string; relationTypeId: string }>
        >();
        groupCodeTypeIds.value.forEach((id) => dependencyByNode.set(id, []));

        edgeList.value.forEach((edge) => {
          if (
            generationOrderRelationTypeId.value !== '0' &&
            edge.ctRelationTypeId !== generationOrderRelationTypeId.value
          ) {
            return;
          }
          if (!groupNodeSet.has(edge.parentCodeTypeId) || !groupNodeSet.has(edge.childCodeTypeId)) {
            return;
          }
          dependencyByNode.get(edge.parentCodeTypeId)?.push({
            childId: edge.childCodeTypeId,
            relationTypeId: edge.ctRelationTypeId,
          });
        });

        const requiredSet = new Set<string>();
        const dfsDependencies = (id: string) => {
          if (requiredSet.has(id)) return;
          requiredSet.add(id);
          const deps = dependencyByNode.get(id) ?? [];
          deps.forEach((dep) => dfsDependencies(dep.childId));
        };
        dfsDependencies(targetId);

        const indegree = new Map<string, number>();
        const outgoing = new Map<string, Array<string>>();
        requiredSet.forEach((id) => {
          indegree.set(id, 0);
          outgoing.set(id, []);
        });

        // 拓扑边使用“依赖 -> 当前结点”方向，确保依赖项先出队。
        requiredSet.forEach((nodeId) => {
          const deps = dependencyByNode.get(nodeId) ?? [];
          deps.forEach((dep) => {
            if (!requiredSet.has(dep.childId)) return;
            outgoing.get(dep.childId)?.push(nodeId);
            indegree.set(nodeId, (indegree.get(nodeId) ?? 0) + 1);
          });
        });

        const sortByNameThenId = (a: string, b: string) => {
          const an = codeTypeNameMap.value.get(a) ?? a;
          const bn = codeTypeNameMap.value.get(b) ?? b;
          const c = an.localeCompare(bn, 'zh-CN');
          if (c !== 0) return c;
          return a.localeCompare(b, 'zh-CN');
        };

        const queue = [...requiredSet].filter((id) => (indegree.get(id) ?? 0) === 0);
        queue.sort(sortByNameThenId);

        const orderedIds: Array<string> = [];
        while (queue.length > 0) {
          const curr = queue.shift() as string;
          orderedIds.push(curr);
          const nextIds = outgoing.get(curr) ?? [];
          nextIds.forEach((nid) => {
            const nextIn = (indegree.get(nid) ?? 0) - 1;
            indegree.set(nid, nextIn);
            if (nextIn === 0) {
              queue.push(nid);
              queue.sort(sortByNameThenId);
            }
          });
        }

        let cycleWarning = '';
        if (orderedIds.length < requiredSet.size) {
          const remaining = [...requiredSet].filter((id) => !orderedIds.includes(id));
          remaining.sort(sortByNameThenId);
          orderedIds.push(...remaining);
          cycleWarning = '检测到环状依赖，已在结果末尾附加环内结点，请检查关系配置。';
        }

        const rows = orderedIds.map((id) => ({
          codeTypeId: id,
          codeTypeName: codeTypeNameMap.value.get(id) ?? id,
        }));

        const derivationRows: Array<GenerationOrderDerivationRow> = [];
        orderedIds.forEach((nodeId) => {
          const deps = (dependencyByNode.get(nodeId) ?? [])
            .filter((dep) => requiredSet.has(dep.childId))
            .sort((a, b) => sortByNameThenId(a.childId, b.childId));

          deps.forEach((dep) => {
            derivationRows.push({
              nodeCodeTypeId: nodeId,
              nodeCodeTypeName: codeTypeNameMap.value.get(nodeId) ?? nodeId,
              dependencyCodeTypeId: dep.childId,
              dependencyCodeTypeName: codeTypeNameMap.value.get(dep.childId) ?? dep.childId,
              relationTypeId: dep.relationTypeId,
              relationTypeName:
                relationTypeNameMap.value.get(dep.relationTypeId) ?? dep.relationTypeId,
            });
          });
        });

        return {
          rows,
          derivationRows,
          cycleWarning,
        };
      });

      const generationOrderRows = computed(() => generationOrderResult.value.rows);

      const generationOrderDerivationRows = computed(
        () => generationOrderResult.value.derivationRows,
      );

      const generationOrderCycleWarning = computed(() => generationOrderResult.value.cycleWarning);

      const generationOrderSummary = computed(() => {
        if (generationTargetCodeTypeId.value === '0') return '';
        const targetName =
          codeTypeNameMap.value.get(generationTargetCodeTypeId.value) ??
          generationTargetCodeTypeId.value;
        if (generationOrderRows.value.length <= 1) {
          return `目标 ${targetName} 无前置依赖，可直接生成。`;
        }
        const relationTypeName =
          generationOrderRelationTypeId.value === '0'
            ? '全部关系'
            : relationTypeNameMap.value.get(generationOrderRelationTypeId.value) ??
              generationOrderRelationTypeId.value;
        return `目标 ${targetName} 在${relationTypeName}下共有 ${
          generationOrderRows.value.length - 1
        } 个前置依赖。`;
      });

      const deleteSelectedRelation = async () => {
        const edge = selectedRelationEdge.value;
        if (edge == null) return;
        await deleteRelation(edge.relationId);
        selectedRelationId.value = '';
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
        nodePositionMap.value = normalizeNodePositionMap(map);
      };

      const getDisplayedNodeIds = () => filteredNodes.value.map((x) => x.codeTypeId);

      const waitNextFrame = () =>
        new Promise<void>((resolve) => {
          window.requestAnimationFrame(() => resolve());
        });

      const getNodeOrderByLayer = (nodeIds: Array<string>): Array<string> => {
        const levelMap = buildLongestPathLayerMap(
          nodeIds,
          filteredEdges.value.map((edge) => ({
            parentId: edge.parentCodeTypeId,
            childId: edge.childCodeTypeId,
          })),
        );

        return sortNodeIdsByLayer(
          nodeIds,
          levelMap,
          (nodeId) => codeTypeNameMap.value.get(nodeId) ?? nodeId,
        );
      };

      const layerGuideLines = computed(() => {
        if (selectedGroupId.value === '0') return [];
        const nodeIds = getDisplayedNodeIds();
        if (nodeIds.length === 0) return [];

        const levelMap = buildLongestPathLayerMap(
          nodeIds,
          filteredEdges.value.map((edge) => ({
            parentId: edge.parentCodeTypeId,
            childId: edge.childCodeTypeId,
          })),
        );

        const levelNodeCountMap = new Map<number, number>();
        nodeIds.forEach((id) => {
          const lv = levelMap.get(id) ?? 1;
          levelNodeCountMap.set(lv, (levelNodeCountMap.get(lv) ?? 0) + 1);
        });

        return buildLayerGuideLines(nodeIds, levelMap, nodeRectMap.value, {
          minGap: -1,
          labelFormatter: (currentLevel, nextLevel) => {
            const nodeCount = levelNodeCountMap.get(currentLevel) ?? 0;
            return `第${currentLevel}层(${nodeCount}个) 与第${nextLevel}层之间`;
          },
        });
      });

      const nodeLayerNumberMap = computed(() => {
        const nodeIds = getDisplayedNodeIds();
        if (nodeIds.length === 0) return new Map<string, number>();

        const levelMap = buildLongestPathLayerMap(
          nodeIds,
          filteredEdges.value.map((edge) => ({
            parentId: edge.parentCodeTypeId,
            childId: edge.childCodeTypeId,
          })),
        );
        return buildNodeLayerNumberMap(nodeIds, levelMap);
      });

      const getNodeLayerNumber = (codeTypeId: string) => {
        return nodeLayerNumberMap.value.get(codeTypeId) ?? 1;
      };

      const layoutDebugRows = computed(() => {
        const rows = filteredNodes.value.map((node) => {
          const id = node.codeTypeId;
          const layer = getNodeLayerNumber(id);
          const pos = nodePositionMap.value[id] ?? { dx: 0, dy: 0 };
          const rect = nodeRectMap.value[id];
          const inView =
            rect != null &&
            rect.x + rect.w >= 0 &&
            rect.y + rect.h >= 0 &&
            rect.x <= svgWidth.value &&
            rect.y <= svgHeight.value;

          return {
            codeTypeId: id,
            codeTypeName: node.codeTypeName,
            layer,
            dx: Math.round(pos.dx),
            dy: Math.round(pos.dy),
            rectX: rect == null ? Number.MAX_SAFE_INTEGER : Math.round(rect.x),
            rectY: rect == null ? Number.MAX_SAFE_INTEGER : Math.round(rect.y),
            rectText:
              rect == null
                ? 'N/A'
                : [rect.x, rect.y, rect.w, rect.h].map((x) => Math.round(x)).join(', '),
            inView,
          };
        });

        rows.sort((a, b) => {
          if (a.layer !== b.layer) return a.layer - b.layer;
          if (a.rectX !== b.rectX) return a.rectX - b.rectX;
          if (a.rectY !== b.rectY) return a.rectY - b.rectY;
          if (a.dx !== b.dx) return a.dx - b.dx;
          return a.codeTypeId.localeCompare(b.codeTypeId, 'zh-CN');
        });

        return rows;
      });

      const layoutDebugMissingRectCount = computed(() => {
        return layoutDebugRows.value.filter((x) => x.rectText === 'N/A').length;
      });

      const layoutDebugBounds = computed(() => {
        const rects = Object.values(nodeRectMap.value);
        if (rects.length === 0) {
          return { minX: 'N/A', minY: 'N/A', maxX: 'N/A', maxY: 'N/A' };
        }

        const minX = Math.round(Math.min(...rects.map((r) => r.x)));
        const minY = Math.round(Math.min(...rects.map((r) => r.y)));
        const maxX = Math.round(Math.max(...rects.map((r) => r.x + r.w)));
        const maxY = Math.round(Math.max(...rects.map((r) => r.y + r.h)));
        return { minX, minY, maxX, maxY };
      });

      const toggleLayoutDebugPanel = () => {
        layoutDebugVisible.value = !layoutDebugVisible.value;
      };

      const dragLayerBands = computed(() => {
        if (selectedGroupId.value === '0' || layoutStrategy.value !== 'layer') return [];

        const nodeIds = getDisplayedNodeIds();
        if (nodeIds.length === 0) return [];

        const boundsMap = new Map<number, { top: number; bottom: number; count: number }>();
        nodeIds.forEach((id) => {
          const rect = nodeRectMap.value[id];
          if (rect == null) return;

          const lv = nodeLayerNumberMap.value.get(id) ?? 1;
          const old = boundsMap.get(lv);
          if (old == null) {
            boundsMap.set(lv, { top: rect.y, bottom: rect.y + rect.h, count: 1 });
          } else {
            boundsMap.set(lv, {
              top: Math.min(old.top, rect.y),
              bottom: Math.max(old.bottom, rect.y + rect.h),
              count: old.count + 1,
            });
          }
        });

        const levels = [...boundsMap.keys()].sort((a, b) => a - b);
        const margin = 12;

        return levels
          .map((lv, idx) => {
            const curr = boundsMap.get(lv);
            if (curr == null) return null;

            const prev = idx > 0 ? boundsMap.get(levels[idx - 1]) ?? null : null;
            const next = idx < levels.length - 1 ? boundsMap.get(levels[idx + 1]) ?? null : null;

            const top = prev == null ? margin : Math.round((prev.bottom + curr.top) / 2);
            const bottom =
              next == null ? svgHeight.value - margin : Math.round((curr.bottom + next.top) / 2);
            const safeBottom = Math.max(bottom, top + 2);

            return {
              id: `drag-band-${lv}`,
              top,
              height: safeBottom - top,
              label: `第${lv}层可拖动区（${curr.count}个结点）`,
            };
          })
          .filter(
            (x): x is { id: string; top: number; height: number; label: string } => x != null,
          );
      });

      const autoArrangeNodes = async () => {
        if (selectedGroupId.value === '0') return;
        const nodeIds = getDisplayedNodeIds();
        if (nodeIds.length === 0) return;

        const horizontalNodeGap = 10;
        const smallMode = nodeSizeMode.value === 'small';
        const layerHeightFactor = Math.min(
          2.6,
          Math.max(1.2, Number(layerDensityFactor.value) || (smallMode ? 2.4 : 2.0)),
        );
        const minWidth = smallMode ? 120 : 280;
        const minHeight = smallMode ? 44 : 100;
        const fallbackWidth = smallMode ? 130 : 300;
        const fallbackHeight = smallMode ? 48 : 120;

        const getNodeSize = (id: string) => {
          const rect = getNodeRectById(id);
          return {
            w: Math.max(rect?.w ?? fallbackWidth, minWidth),
            h: Math.max(rect?.h ?? fallbackHeight, minHeight),
          };
        };

        const applyAutoLayoutOnce = async () => {
          await nextTick();
          await waitNextFrame();
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

          const nextPosMap = { ...nodePositionMap.value };

          if (layoutStrategy.value === 'layer') {
            const levelMap = buildLongestPathLayerMap(
              orderedIds,
              filteredEdges.value.map((edge) => ({
                parentId: edge.parentCodeTypeId,
                childId: edge.childCodeTypeId,
              })),
            );

            const levelGroups = new Map<number, Array<string>>();
            orderedIds.forEach((id) => {
              const lv = levelMap.get(id) ?? 1;
              if (!levelGroups.has(lv)) levelGroups.set(lv, []);
              levelGroups.get(lv)?.push(id);
            });

            const levels = [...levelGroups.keys()].sort((a, b) => a - b);
            const layoutWidth = Math.max(320, svgWidth.value);
            const levelHeights = levels.map((lv) => {
              const arr = levelGroups.get(lv) ?? [];
              const sizes = arr.map((id) => ({ id, ...getNodeSize(id) }));
              return sizes.reduce((max, x) => Math.max(max, x.h), minHeight);
            });
            const totalLevelHeight = levelHeights.reduce((sum, h) => sum + h, 0);
            const fitFactor = (svgHeight.value - 80) / Math.max(totalLevelHeight, 1);
            const effectiveLayerHeightFactor = canvasAutoSize.value
              ? layerHeightFactor
              : Math.max(0.72, Math.min(layerHeightFactor, fitFactor));
            let currentTopY = 20;

            levels.forEach((lv, idx) => {
              const arr = levelGroups.get(lv) ?? [];
              const sizes = arr.map((id) => ({ id, ...getNodeSize(id) }));
              const levelHeight =
                levelHeights[idx] ?? sizes.reduce((max, x) => Math.max(max, x.h), minHeight);
              const totalWidth =
                sizes.reduce((sum, x) => sum + x.w, 0) +
                Math.max(0, sizes.length - 1) * horizontalNodeGap;
              const startX = Math.max(20, Math.floor((layoutWidth - totalWidth) / 2));
              let cursorX = startX;

              sizes.forEach((x) => {
                const targetX = cursorX;
                const targetY = currentTopY;
                cursorX += x.w + horizontalNodeGap;
                const rect = getNodeRectById(x.id);
                if (rect == null) return;
                const curr = nodePositionMap.value[x.id] ?? { dx: 0, dy: 0 };
                nextPosMap[x.id] = {
                  dx: curr.dx + (targetX - rect.x),
                  dy: curr.dy + (targetY - rect.y),
                };
              });

              currentTopY += Math.round(levelHeight * effectiveLayerHeightFactor);
            });
          } else {
            const cols = 2;
            const firstId = orderedIds[0];
            const firstRect = nodeRectMap.value[firstId];
            const itemWidth = Math.max(firstRect?.w ?? fallbackWidth, minWidth);
            const itemHeight = Math.max(firstRect?.h ?? fallbackHeight, minHeight);
            const colGap = itemWidth + horizontalNodeGap;
            const rowGap = itemHeight + 10;

            orderedIds.forEach((id, idx) => {
              const col = idx % cols;
              const row = Math.floor(idx / cols);
              const targetX = 20 + col * colGap;
              const targetY = 20 + row * rowGap;
              const rect = getNodeRectById(id);
              if (rect == null) return;
              const curr = nodePositionMap.value[id] ?? { dx: 0, dy: 0 };
              const dx = curr.dx + (targetX - rect.x);
              const dy = curr.dy + (targetY - rect.y);
              nextPosMap[id] = { dx, dy };
            });
          }

          nodePositionMap.value = normalizeNodePositionMap(nextPosMap);
          saveNodePositionLayout();
          await nextTick();
          await waitNextFrame();
          updateNodeLayout();
          if (shiftAllNodesIntoView(true)) {
            await nextTick();
            await waitNextFrame();
            updateNodeLayout();
          }
        };

        await applyAutoLayoutOnce();
        await applyAutoLayoutOnce();
        await nextTick();
        await waitNextFrame();
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

      const applyDbPositionLayout = () => {
        const small = nodeSizeMode.value === 'small';
        const nextMap = { ...nodePositionMap.value };
        groupCodeTypeIds.value.forEach((id) => {
          const rela = groupRelaObjMap.value.get(id);
          const rect = getNodeRectById(id);
          if (rela == null || rect == null) return;
          const modeX = small ? rela.posXSmall : rela.posXLarge;
          const modeY = small ? rela.posYSmall : rela.posYLarge;
          const storedX = modeX !== 0 || modeY !== 0 ? modeX : rela.posX;
          const storedY = modeX !== 0 || modeY !== 0 ? modeY : rela.posY;
          if (storedX === 0 && storedY === 0) return;
          const curr = nextMap[id] ?? { dx: 0, dy: 0 };
          nextMap[id] = {
            dx: curr.dx + (storedX - rect.x),
            dy: curr.dy + (storedY - rect.y),
          };
        });
        nodePositionMap.value = normalizeNodePositionMap(nextMap);
        saveNodePositionLayout();
      };

      const saveLayoutToDb = async () => {
        if (selectedGroupId.value === '0') return;
        const small = nodeSizeMode.value === 'small';
        loading.value = true;
        message.value = '正在保存布局到数据库...';
        try {
          const tasks = groupCodeTypeIds.value.map(async (id) => {
            const rect = nodeRectMap.value[id];
            if (rect == null) return;
            const obj = new clsCTCodeTypeGroupRelaEN();
            obj.ctGroupId = selectedGroupId.value;
            obj.codeTypeId = id;
            obj.SetLayerNo(getNodeLayerNumber(id));
            obj.SetPosX(Math.round(rect.x));
            obj.SetPosY(Math.round(rect.y));
            if (small) {
              obj.SetPosXSmall(Math.round(rect.x));
              obj.SetPosYSmall(Math.round(rect.y));
            } else {
              obj.SetPosXLarge(Math.round(rect.x));
              obj.SetPosYLarge(Math.round(rect.y));
            }
            obj.SetLayoutUpdatedAt(new Date().toISOString().slice(0, 19).replace('T', ' '));
            await CTCodeTypeGroupRela_UpdateRecordAsync(obj);
          });
          await Promise.all(tasks);
          message.value = '布局已保存到数据库';
          setTimeout(() => {
            if (message.value === '布局已保存到数据库') message.value = '';
          }, 3000);
        } catch (err: any) {
          message.value = `保存布局失败: ${String(err)}`;
        } finally {
          loading.value = false;
        }
      };

      const loadLayoutFromDb = async () => {
        if (selectedGroupId.value === '0') return;
        loading.value = true;
        message.value = '正在从数据库加载布局...';
        try {
          const relaList = await CTCodeTypeGroupRela_GetObjLstAsync(
            `CtGroupId='${selectedGroupId.value}'`,
          );
          const newRelaMap = new Map<string, clsCTCodeTypeGroupRelaEN>();
          relaList.forEach((x) => newRelaMap.set(x.codeTypeId, x));
          groupRelaObjMap.value = newRelaMap;

          nodePositionMap.value = {};
          groupCodeTypeIds.value.forEach((id) => {
            nodePositionMap.value[id] = { dx: 0, dy: 0 };
          });
          await nextTick();
          await waitNextFrame();
          updateNodeLayout();
          applyDbPositionLayout();
          await nextTick();
          await waitNextFrame();
          updateNodeLayout();
          message.value = '布局已从数据库加载';
          setTimeout(() => {
            if (message.value === '布局已从数据库加载') message.value = '';
          }, 3000);
        } catch (err: any) {
          message.value = `加载布局失败: ${String(err)}`;
        } finally {
          loading.value = false;
        }
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

        codeTypeList.value = codeTypes
          .filter((x) => x.inUse === true)
          .map((x) => ({
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

        const sortedRelaList = groupRelaList.sort((a, b) => a.orderNum - b.orderNum);
        groupCodeTypeIds.value = sortedRelaList.map((x) => x.codeTypeId);

        const newRelaMap = new Map<string, clsCTCodeTypeGroupRelaEN>();
        sortedRelaList.forEach((x) => newRelaMap.set(x.codeTypeId, x));
        groupRelaObjMap.value = newRelaMap;

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

        const small = nodeSizeMode.value === 'small';
        const hasDbLayout = sortedRelaList.some((x) =>
          small
            ? x.posXSmall !== 0 || x.posYSmall !== 0 || x.posX !== 0 || x.posY !== 0
            : x.posXLarge !== 0 || x.posYLarge !== 0 || x.posX !== 0 || x.posY !== 0,
        );

        if (hasDbLayout) {
          nodePositionMap.value = {};
          groupCodeTypeIds.value.forEach((id) => {
            nodePositionMap.value[id] = { dx: 0, dy: 0 };
          });
          await nextTick();
          await waitNextFrame();
          updateNodeLayout();
          applyDbPositionLayout();
          await nextTick();
          await waitNextFrame();
          updateNodeLayout();
        } else {
          loadNodePositionLayout();
          await nextTick();
          updateNodeLayout();
          if (shiftAllNodesIntoView()) {
            await nextTick();
            updateNodeLayout();
          }
        }
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
        generationTargetCodeTypeId.value = '0';
        generationOrderRelationTypeId.value = '0';
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

      const deleteSelectedNodeFromGroup = async () => {
        if (loading.value) return;
        if (selectedGroupId.value === '0' || newParentCodeTypeId.value === '0') {
          alert('请先选中一个结点!');
          return;
        }

        const ok = confirm(`确认将结点[${selectedNodeText.value}]从当前组移除吗?`);
        if (!ok) return;

        loading.value = true;
        message.value = '正在移除结点...';
        try {
          let delCount = 0;
          try {
            delCount = await CTCodeTypeGroupRela_DelRecordAsync({
              ctGroupId: selectedGroupId.value,
              codeTypeId: newParentCodeTypeId.value,
            });
          } catch {
            const keyLst = `${selectedGroupId.value}|${newParentCodeTypeId.value}`;
            delCount = await CTCodeTypeGroupRela_DelRecKeyLstsAsync([keyLst]);
          }
          if (delCount <= 0) {
            alert('移除失败!');
            return;
          }
          newParentCodeTypeId.value = '0';
          await loadMindMapByGroup();
          message.value = '';
        } catch (error: any) {
          console.error(error);
          alert(`移除失败: ${String(error)}`);
        } finally {
          loading.value = false;
        }
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

      const getNodeRectById = (codeTypeId: string) => {
        const cached = nodeRectMap.value[codeTypeId];
        if (cached != null) return cached;

        const mapBody = mapBodyRef.value;
        const el = nodeElementMap.get(codeTypeId);
        if (mapBody == null || el == null) return null;

        const mapBodyRect = mapBody.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left - mapBodyRect.left + mapBody.scrollLeft,
          y: rect.top - mapBodyRect.top + mapBody.scrollTop,
          w: rect.width,
          h: rect.height,
        };
      };

      const applyCanvasSize = () => {
        const nextWidth = Math.max(400, Math.floor(Number(canvasWidthInput.value) || 1200));
        const nextHeight = Math.max(320, Math.floor(Number(canvasHeightInput.value) || 620));
        svgWidth.value = nextWidth;
        svgHeight.value = nextHeight;
        canvasWidthInput.value = nextWidth;
        canvasHeightInput.value = nextHeight;
        canvasAutoSize.value = false;
      };

      const toggleCanvasAutoSize = () => {
        canvasAutoSize.value = !canvasAutoSize.value;
        if (canvasAutoSize.value) {
          updateNodeLayout();
          canvasWidthInput.value = svgWidth.value;
          canvasHeightInput.value = svgHeight.value;
        }
      };

      const getDragLayerYRange = (codeTypeId: string, rectH: number) => {
        const mapBody = mapBodyRef.value;
        if (mapBody == null) return null;

        const margin = 12;
        const targetLayer = nodeLayerNumberMap.value.get(codeTypeId) ?? 1;

        const layerBoundsMap = new Map<number, { top: number; bottom: number }>();
        Object.entries(nodeRectMap.value).forEach(([id, rect]) => {
          const lv = nodeLayerNumberMap.value.get(id) ?? 1;
          const old = layerBoundsMap.get(lv);
          const top = rect.y;
          const bottom = rect.y + rect.h;
          if (old == null) {
            layerBoundsMap.set(lv, { top, bottom });
          } else {
            layerBoundsMap.set(lv, {
              top: Math.min(old.top, top),
              bottom: Math.max(old.bottom, bottom),
            });
          }
        });

        const levels = [...layerBoundsMap.keys()].sort((a, b) => a - b);
        const idx = levels.findIndex((x) => x === targetLayer);
        if (idx < 0) return null;

        const curr = layerBoundsMap.get(targetLayer);
        if (curr == null) return null;

        const prev = idx > 0 ? layerBoundsMap.get(levels[idx - 1]) ?? null : null;
        const next = idx < levels.length - 1 ? layerBoundsMap.get(levels[idx + 1]) ?? null : null;

        const minY = prev == null ? margin : Math.round((prev.bottom + curr.top) / 2);
        const maxBottom =
          next == null ? svgHeight.value - margin : Math.round((curr.bottom + next.top) / 2);
        const maxY = Math.max(minY, maxBottom - rectH);

        return { minY, maxY };
      };

      const clampNodeToCanvas = (
        nextDx: number,
        nextDy: number,
        dragState: {
          startDx: number;
          startDy: number;
          startRectX: number;
          startRectY: number;
          startRectW: number;
          startRectH: number;
          layerMinDy: number | null;
          layerMaxDy: number | null;
        },
      ) => {
        const mapBody = mapBodyRef.value;
        const margin = 12;
        if (mapBody == null) {
          return { dx: nextDx, dy: nextDy };
        }

        const minX = margin;
        const minY = margin;
        const maxX = Math.max(minX, svgWidth.value - dragState.startRectW - margin);
        const maxY = Math.max(minY, svgHeight.value - dragState.startRectH - margin);

        const minDx = dragState.startDx + (minX - dragState.startRectX);
        const maxDx = dragState.startDx + (maxX - dragState.startRectX);
        const canvasMinDy = dragState.startDy + (minY - dragState.startRectY);
        const canvasMaxDy = dragState.startDy + (maxY - dragState.startRectY);

        const minDy =
          dragState.layerMinDy != null ? Math.max(canvasMinDy, dragState.layerMinDy) : canvasMinDy;
        const maxDy =
          dragState.layerMaxDy != null ? Math.min(canvasMaxDy, dragState.layerMaxDy) : canvasMaxDy;
        const safeMaxDy = Math.max(minDy, maxDy);

        return {
          dx: Math.min(Math.max(nextDx, minDx), maxDx),
          dy: Math.min(Math.max(nextDy, minDy), safeMaxDy),
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
        const clamped = clampNodeToCanvas(nextDx, nextDy, nodeDragState.value);

        nodePositionMap.value = {
          ...nodePositionMap.value,
          [nodeId]: { dx: clamped.dx, dy: clamped.dy },
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
          startRectX: 0,
          startRectY: 0,
          startRectW: 0,
          startRectH: 0,
          layerMinDy: null,
          layerMaxDy: null,
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
        const rect = getNodeRectById(codeTypeId);
        const layerRange = getDragLayerYRange(codeTypeId, rect?.h ?? 0);
        nodeDragState.value = {
          active: true,
          nodeId: codeTypeId,
          startClientX: evt.clientX,
          startClientY: evt.clientY,
          startDx: curr.dx,
          startDy: curr.dy,
          startRectX: rect?.x ?? 0,
          startRectY: rect?.y ?? 0,
          startRectW: rect?.w ?? 0,
          startRectH: rect?.h ?? 0,
          layerMinDy: layerRange == null ? null : curr.dy + (layerRange.minY - (rect?.y ?? 0)),
          layerMaxDy: layerRange == null ? null : curr.dy + (layerRange.maxY - (rect?.y ?? 0)),
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
          const x = rect.left - mapBodyRect.left + mapBody.scrollLeft;
          const y = rect.top - mapBodyRect.top + mapBody.scrollTop;
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
        if (canvasAutoSize.value) {
          const smallMode = nodeSizeMode.value === 'small';
          svgWidth.value = Math.max(Math.ceil(maxRight), smallMode ? 560 : 900);
          svgHeight.value = Math.max(Math.ceil(maxBottom), smallMode ? 360 : 520);
          canvasWidthInput.value = svgWidth.value;
          canvasHeightInput.value = svgHeight.value;
        }
      };

      const shiftAllNodesIntoView = (alignTop = false) => {
        const margin = 12;
        const rects = Object.values(nodeRectMap.value);
        if (rects.length === 0) return false;

        const minX = Math.min(...rects.map((r) => r.x));
        const minY = Math.min(...rects.map((r) => r.y));
        const maxX = Math.max(...rects.map((r) => r.x + r.w));
        const maxY = Math.max(...rects.map((r) => r.y + r.h));
        const contentW = maxX - minX;
        const contentH = maxY - minY;
        const viewW = Math.max(0, svgWidth.value - margin * 2);
        const viewH = Math.max(0, svgHeight.value - margin * 2);

        let shiftX = 0;
        if (contentW > viewW) {
          shiftX = margin - minX;
        } else if (minX < margin) {
          shiftX = margin - minX;
        } else if (maxX > svgWidth.value - margin) {
          shiftX = svgWidth.value - margin - maxX;
        }

        let shiftY = 0;
        if (alignTop || contentH > viewH) {
          shiftY = margin - minY;
        } else if (minY < margin) {
          shiftY = margin - minY;
        } else if (maxY > svgHeight.value - margin) {
          shiftY = svgHeight.value - margin - maxY;
        }

        if (shiftX === 0 && shiftY === 0) return false;

        const nextMap = { ...nodePositionMap.value };
        Object.keys(nodeRectMap.value).forEach((id) => {
          const curr = nextMap[id] ?? { dx: 0, dy: 0 };
          nextMap[id] = {
            dx: curr.dx + shiftX,
            dy: curr.dy + shiftY,
          };
        });

        nodePositionMap.value = nextMap;
        saveNodePositionLayout();
        return true;
      };

      const dragMoveHandler = (evt: MouseEvent) => {
        if (!linkDraft.value.active) return;
        const mapBody = mapBodyRef.value;
        if (mapBody == null) return;

        const mapBodyRect = mapBody.getBoundingClientRect();
        linkDraft.value.x2 = evt.clientX - mapBodyRect.left + mapBody.scrollLeft;
        linkDraft.value.y2 = evt.clientY - mapBodyRect.top + mapBody.scrollTop;

        const fromRect = nodeRectMap.value[linkDraft.value.fromCodeTypeId];
        if (fromRect == null) return;
        const start = getPortPoint(fromRect, linkDraft.value.fromPortSide);
        linkDraft.value.x1 = start.x;
        linkDraft.value.y1 = start.y;
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
        const x2 = evt.clientX - mapBodyRect.left + mapBody.scrollLeft;
        const y2 = evt.clientY - mapBodyRect.top + mapBody.scrollTop;
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
        if (densityArrangeTimer != null) {
          window.clearTimeout(densityArrangeTimer);
          densityArrangeTimer = null;
        }
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

      watch(
        () => filteredEdges.value.map((x) => String(x.relationId)).join(','),
        () => {
          if (
            selectedRelationId.value !== '' &&
            !filteredEdges.value.some((x) => String(x.relationId) === selectedRelationId.value)
          ) {
            selectedRelationId.value = '';
          }
        },
      );

      return {
        canvasRef,
        mapBodyRef,
        svgWidth,
        svgHeight,
        canvasWidthInput,
        canvasHeightInput,
        canvasAutoSize,
        layerDensityFactor,
        layerDensityFactorText,
        message,
        nodeKeyword,
        topPanelCollapsed,
        topPanelScale,
        isAddCodeTypeDrawerVisible,
        layoutDebugVisible,
        layoutDebugRows,
        layoutDebugBounds,
        layoutDebugMissingRectCount,
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
        dragLayerBands,
        layerGuideLines,
        hoveredRelationId,
        selectedRelationId,
        selectedRelationEdge,
        selectedRelationText,
        selectedNodeText,
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
        generationTargetCodeTypeId,
        generationOrderRelationTypeId,
        generationTargetOptions,
        generationOrderRows,
        generationOrderDerivationRows,
        generationOrderSummary,
        generationOrderCycleWarning,
        groupNodes,
        edgeList,
        reloadAll,
        onGroupChanged,
        autoArrangeNodes,
        clearLayoutOffsets,
        saveLayoutToDb,
        loadLayoutFromDb,
        applyCanvasSize,
        toggleCanvasAutoSize,
        scheduleAutoArrangeByDensity,
        toggleNodeSizeMode,
        toggleTopPanelCollapsed,
        toggleTopPanelScale,
        toggleLayoutDebugPanel,
        openAddCodeTypeDrawer,
        closeAddCodeTypeDrawer,
        onCodeTypeAddedToGroup,
        pickParent,
        setNodeRef,
        getNodeStyle,
        getNodePortClass,
        getNodeLayerNumber,
        onRelationMouseEnter,
        onRelationMouseLeave,
        onRelationClick,
        clearSelectedRelation,
        startNodeDrag,
        startLinkDrag,
        addRelation,
        deleteSelectedNodeFromGroup,
        deleteRelation,
        deleteSelectedRelation,
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

  .layout-debug-panel {
    margin-bottom: 8px;
    border: 1px solid #c7d9ea;
    border-radius: 6px;
    background: #f8fbff;
    padding: 8px;
  }

  .generation-order-panel {
    margin-bottom: 8px;
    border: 1px solid #c7d9ea;
    border-radius: 6px;
    background: #fff;
    padding: 8px;
  }

  .generation-order-head {
    display: flex;
    align-items: center;
    color: #2b4f71;
  }

  .generation-order-steps {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 6px;
  }

  .step-chip {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid #d0e0ef;
    background: #f5faff;
    color: #1f4e79;
    font-size: 12px;
    margin-right: 4px;
  }

  .step-arrow {
    margin-right: 6px;
    color: #5a7a96;
  }

  .generation-order-detail {
    border-top: 1px dashed #d7e3ef;
    padding-top: 6px;
  }

  .generation-order-detail-title {
    font-size: 12px;
    color: #365f82;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .generation-order-detail-row {
    font-size: 12px;
    color: #2f4e68;
    line-height: 1.5;
  }

  .layout-debug-summary {
    font-size: 12px;
    color: #2f4e68;
    margin-bottom: 6px;
  }

  .layout-debug-table-wrap {
    max-height: 220px;
    overflow: auto;
    border: 1px solid #dbe8f4;
    border-radius: 4px;
    background: #fff;
  }

  .layout-debug-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }

  .layout-debug-table th,
  .layout-debug-table td {
    border-bottom: 1px solid #edf3f9;
    padding: 4px 6px;
    white-space: nowrap;
  }

  .layout-debug-table th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #eef5fd;
    color: #2a4e71;
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

  .layer-guide-line {
    pointer-events: none;
    opacity: 1;
  }

  .layer-drag-band {
    pointer-events: none;
  }

  .layer-drag-band rect {
    fill: rgba(15, 76, 129, 0.02);
  }

  .layer-drag-band text {
    fill: rgba(15, 76, 129, 0.5);
    font-size: 10px;
    font-weight: 500;
    user-select: none;
  }

  .layer-guide-line line {
    stroke: rgba(15, 76, 129, 0.7);
    stroke-width: 2;
    stroke-dasharray: 12 4;
    stroke-linecap: round;
  }

  .layer-guide-line rect {
    fill: rgba(255, 255, 255, 0.9);
    stroke: rgba(15, 76, 129, 0.2);
    stroke-width: 0.8;
    rx: 3px;
    ry: 3px;
  }

  .layer-guide-line text {
    paint-order: stroke fill;
    stroke: rgba(255, 255, 255, 0.9);
    stroke-width: 2px;
    fill: #0b3f6a;
    font-size: 11px;
    font-weight: 700;
    user-select: none;
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

  .line-main.is-selected {
    stroke-width: 2.6;
    opacity: 1;
    filter: drop-shadow(0 0 2px rgba(15, 76, 129, 0.5));
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
    gap: 10px;
    position: relative;
    z-index: 2;
  }

  .node-size-small .branch-list {
    grid-template-columns: repeat(auto-fit, minmax(124px, 140px));
    gap: 10px;
    justify-content: start;
  }

  .node-size-small .branch-head {
    padding: 4px 6px;
    min-height: 38px;
    border-bottom: none;
  }

  .node-size-small .node-name {
    font-size: 10px;
    font-weight: 600;
    line-height: 13px;
    max-width: 102px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-break: break-all;
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
    border-color: #0b5fa5;
    background: #f2f8ff;
    box-shadow: 0 0 0 2px rgba(11, 95, 165, 0.35), 0 2px 8px rgba(11, 95, 165, 0.18);
  }

  .branch-item {
    border: 1px solid #bed3e6;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(18, 57, 91, 0.08);
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .branch-item:hover {
    box-shadow: 0 8px 18px rgba(18, 57, 91, 0.15);
  }

  .branch-item.active {
    border-color: #0b5fa5;
    background: linear-gradient(180deg, #f5fbff 0%, #eef7ff 100%);
    box-shadow: 0 0 0 3px rgba(11, 95, 165, 0.28), 0 8px 20px rgba(11, 95, 165, 0.22);
  }

  .branch-item.active .branch-head {
    background: linear-gradient(180deg, #deefff 0%, #cfe8ff 100%);
    border-bottom-color: rgba(11, 95, 165, 0.45);
  }

  .branch-item.active .node-name {
    color: #0a3f6f;
    font-weight: 800;
  }

  .branch-head {
    position: relative;
    padding: 10px 10px;
    min-height: 56px;
    border-bottom: 1px dashed #d9e5f0;
    background: #f8fbff;
    cursor: move;
  }

  .node-layer-badge {
    position: absolute;
    top: 4px;
    right: 4px;
    min-width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 999px;
    background: rgba(15, 76, 129, 0.08);
    color: #0f4c81;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    padding: 0 5px;
    pointer-events: none;
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
    line-height: 18px;
    max-height: 36px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-break: break-all;
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
