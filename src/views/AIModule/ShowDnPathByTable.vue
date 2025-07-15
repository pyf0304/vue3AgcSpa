<template>
  <div id="container">
    <!-- <h1>图分组展示-Test8</h1> -->
    <!-- 添加标题 -->
    <div v-if="isNeedShowTabs == true" id="tabs-container">
      <div id="tabs">
        <div v-for="(group, index) in groups" :key="index" class="tab">
          <div class="dropdown" @click="selectTab(index)">
            <button :class="{ active: selectedTab === index }">
              {{ group.tabName }} ({{ group.nodes.length }})
              <!-- 显示第一个表名 -->
            </button>
            <div class="dropdown-content">
              <p v-for="table in groupTables[index]" :key="table">{{ table }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <div id="graph-container">
        <div id="graph" ref="graph"></div>
      </div>
      <div id="info">
        <button @click="applyGridLayout">网格布局</button><span>列宽: </span>
        <input v-model="columnWidth" type="number" style="width: 60px" />
        <span>结点高: </span>
        <input v-model="nodeHeight" type="number" style="width: 60px" />
        <!-- 添加网格布局按钮 -->

        <ul>
          <li
            v-for="(node, index) in nodes_Tab"
            :key="node.id"
            :class="{ selected: selectedNode && selectedNode.id === node.id }"
          >
            {{ node.name }}: ({{ node.x.toFixed(2) }}, {{ node.y.toFixed(2) }})
            <button @click="removeNode(index)">删除</button>
          </li>
        </ul>
        <h3>关系说明</h3>
        <ul>
          <li
            v-for="(link, index) in links_Sub"
            :key="index"
            :class="{ selected: selectedLink === link }"
            @click="selectLink(link)"
          >
            {{ getNodeName(link.sourceDn) }} -> {{ getNodeName(link.targetDn) }}
            <button @click.stop="removeLink(index)">取消关系</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, computed, defineComponent, watch } from 'vue';
  import * as d3 from 'd3';
  import {
    vDnFuncMap_Sim_GetObjLstCache,
    vDnFuncMap_Sim_ReFreshThisCache,
  } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
  import {
    vDnFuncMap_SimEx_CopyToEx,
    vDnFuncMap_SimEx_FuncMapMapDescription,
    vDnFuncMap_SimEx_GetDataNodeLst,
    vDnFuncMap_SimEx_GetDataNodeNum,
  } from '@/ts/L3ForWApiEx/AIModule/clsvDnFuncMap_SimExWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    vDataNode_SimEx_CopyToEx,
    vDataNode_SimEx_FuncMapTabName,
    vDataNode_SimEx_GetObjByDataNodeIdCacheEx,
    vDataNode_SimEx_SortByDataNodeName,
  } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';

  import { vDataNode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
  import { DataNode_DelRecordAsync } from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';
  import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { vDnPath_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
  import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
  import { DnFuncMap_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
  import { DnFuncMapEx_DelRecordEx } from '@/ts/L3ForWApiEx/AIModule/clsDnFuncMapExWApi';
  import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
  import {
    calculateDepths,
    calculateLogicalOrder,
    calculatePredecessors,
    findAllRelatedLinksByTable,
    findAllRelatedNodesByTable,
    G_Link,
    G_Node,
    links_All,
    links_Sub,
    nodes_All,
    nodes_Tab,
  } from '@/ts/FunClass/clsGraph';
  import { usevPrjTab_SimStore } from '@/store/modules/vPrjTab_Sim';
  import {
    PrjTabAddi_AddNewRecordAsync,
    PrjTabAddi_GetObjByTabIdAsync,
    PrjTabAddi_UpdateRecordAsync,
  } from '@/ts/L3ForWApi/Table_Field/clsPrjTabAddiWApi';
  import { clsPrjTabAddiEN } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiEN';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  export default defineComponent({
    name: 'ShowDnPathByTable',
    props: {
      tabId: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
      const vDataNode_SimStore = usevDataNode_SimStore();
      const vPrjTab_SimStore = usevPrjTab_SimStore();
      const columnWidth = ref(150);
      const nodeHeight = ref(50);

      // Watch for changes in columnWidth
      watch(columnWidth, (newVal, oldVal) => {
        saveColumnWidth(newVal);
      });
      // Watch for changes in nodeHeight
      watch(nodeHeight, (newVal, oldVal) => {
        saveNodeHeight(newVal);
      });
      const saveColumnWidth = async (newWidth) => {
        // Perform save operation, e.g., API call or local storage
        console.log('Column width changed to:', newWidth);
        // Example: Save to local storage
        let objPrjTabAddi = await PrjTabAddi_GetObjByTabIdAsync(props.tabId ?? '');
        const bolIsExist = objPrjTabAddi != null;
        if (objPrjTabAddi == null) {
          objPrjTabAddi = new clsPrjTabAddiEN();
        }
        objPrjTabAddi.SetColumnWidth(newWidth);
        objPrjTabAddi.SetTabId(props.tabId ?? '');
        objPrjTabAddi.SetUpdDate(clsDateTime.getTodayDateTimeStr(0));
        objPrjTabAddi.SetUpdUser(clsPrivateSessionStorage.userId);
        if (bolIsExist == false) {
          await PrjTabAddi_AddNewRecordAsync(objPrjTabAddi);
        } else {
          await PrjTabAddi_UpdateRecordAsync(objPrjTabAddi);
        }
      };
      const saveNodeHeight = async (newHeight) => {
        // Perform save operation, e.g., API call or local storage
        console.log('Node height changed to:', newHeight);
        // Example: Save to local storage
        let objPrjTabAddi = await PrjTabAddi_GetObjByTabIdAsync(props.tabId ?? '');
        const bolIsExist = objPrjTabAddi != null;
        if (objPrjTabAddi == null) {
          objPrjTabAddi = new clsPrjTabAddiEN();
        }
        objPrjTabAddi.SetNodeHeight(newHeight);
        objPrjTabAddi.SetTabId(props.tabId ?? '');
        objPrjTabAddi.SetUpdDate(clsDateTime.getTodayDateTimeStr(0));
        objPrjTabAddi.SetUpdUser(clsPrivateSessionStorage.userId);
        if (bolIsExist == false) {
          await PrjTabAddi_AddNewRecordAsync(objPrjTabAddi);
        } else {
          // console.log('objPrjTabAddi:', objPrjTabAddi);
          await PrjTabAddi_UpdateRecordAsync(objPrjTabAddi);
        }
      };
      const IsRefreshGraph = ref(false);
      const graph = ref(null);
      const width0 = 3000; // 定义宽度范围
      const height0 = 2500; // 定义高度范围
      const strPrjId = clsPrivateSessionStorage.currSelPrjId;

      const groups = ref<{ tabName: string; nodes: G_Node[]; links: G_Link[] }[]>([]);
      const selectedTab = ref<number>(0);
      const selectedLink = ref<G_Link | null>(null);
      const selectedNode = ref<G_Node | null>(null);

      const selectedTables = ref<string[]>([]);

      // const selectedNodeId = ref<number | null>(null);
      const selectedNodes = ref<G_Node[]>([]);
      const selectedLinks = ref<G_Link[]>([]);

      const isNeedShowTabs = computed(() => {
        if (props.tabId != null && props.tabId.length > 0) {
          return false;
        } else {
          return true;
        }
      });

      const groupTables = computed(() => {
        return groups.value.map((group) => {
          const tableSet = new Set<string>();
          group.nodes.forEach((node) => {
            if (node.tabName) {
              tableSet.add(node.tabName);
            }
          });
          return Array.from(tableSet);
        });
      });

      async function loadDnFuncMaps() {
        const arrvDnFuncMap_Sim = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
        const intDataNodeNum = vDnFuncMap_SimEx_GetDataNodeNum(arrvDnFuncMap_Sim);
        if (nodes_All.value.length < intDataNodeNum) {
          const arrDataNode_InFuncMap = vDnFuncMap_SimEx_GetDataNodeLst(arrvDnFuncMap_Sim);

          for (const intDataNodeId of arrDataNode_InFuncMap) {
            if (nodes_All.value.find((x) => x.id == intDataNodeId) == null) {
              const objvDataNode_Sim = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
                intDataNodeId,
                strPrjId,
              );
              if (objvDataNode_Sim != null) {
                nodes_All.value.push({
                  id: objvDataNode_Sim.dataNodeId,
                  name: objvDataNode_Sim.dataNodeName,
                  x: objvDataNode_Sim.posX == undefined ? 0 : objvDataNode_Sim.posX,
                  y: objvDataNode_Sim.posY == undefined ? 0 : objvDataNode_Sim.posY,
                  predecessors: [],
                });
              }
            }
          }
        }
        // const arrId = nodes.value.map((node) => node.id);
        // let arrvDnFuncMap_Sim_Sel = arrvDnFuncMap_Sim.filter(
        //   (link) => arrId.indexOf(link.inDataNodeId) > -1,
        // );
        // arrvDnFuncMap_Sim_Sel = arrvDnFuncMap_Sim_Sel.filter(
        //   (link) => arrId.indexOf(link.outDataNodeId) > -1,
        // );
        // console.log('arrvDnFuncMap_Sim:', arrvDnFuncMap_Sim);
        const arrvDnFuncMap_SimEx = arrvDnFuncMap_Sim.map(vDnFuncMap_SimEx_CopyToEx);
        for (const objvDnFuncMap_SimEx of arrvDnFuncMap_SimEx) {
          await vDnFuncMap_SimEx_FuncMapMapDescription(objvDnFuncMap_SimEx);
        }
        links_All.value = arrvDnFuncMap_SimEx.map((link) => ({
          source: link.inDataNodeId,
          target: link.outDataNodeId,
          sourceDn: link.inDataNodeId,
          targetDn: link.outDataNodeId,
          description: link.mapDescription,
          id: link.dnFuncMapId,
          tabId: link.tabId,
        }));
        // console.log('this.links:', links_All.value);
      }

      async function loadDataNodes() {
        const arrDataNode = await vDataNode_Sim_GetObjLstCache(strPrjId);

        let arrDataNodeEx = arrDataNode.map(vDataNode_SimEx_CopyToEx);
        arrDataNodeEx = arrDataNodeEx.sort(vDataNode_SimEx_SortByDataNodeName);
        for (const objDataNode of arrDataNodeEx) {
          await vDataNode_SimEx_FuncMapTabName(objDataNode);
          if (objDataNode.posX == null) objDataNode.posX = Math.random() * width0;
          if (objDataNode.posY == null) objDataNode.posY = Math.random() * height0;
          if (objDataNode.posX == undefined) objDataNode.posX = Math.random() * width0;
          if (objDataNode.posY == undefined) objDataNode.posY = Math.random() * height0;

          if (objDataNode.posX == 0) objDataNode.posX = Math.random() * width0;
          if (objDataNode.posY == 0) objDataNode.posY = Math.random() * height0;
        }
        nodes_All.value = arrDataNodeEx.map((node) => ({
          id: node.dataNodeId,
          name: node.dataNodeName,
          x: node.posX === undefined ? Math.random() * width0 : node.posX,
          y: node.posY === undefined ? Math.random() * height0 : node.posY,
          predecessors: [],
          tabName: node.tabName,
        }));
        // console.log('this.nodes:', nodes_All.value);
      }
      const loadNodePositions = () => {
        const savedPositions = JSON.parse(localStorage.getItem('nodePositions') || '[]');
        if (savedPositions) {
          nodes_All.value.forEach((node) => {
            const savedNode = savedPositions.find((n: any) => n.id === node.id);
            if (savedNode) {
              if (savedNode.y < 12) savedNode.y = Math.random() * height0;
              if (savedNode.y > height0) savedNode.y = Math.random() * height0;
              if (savedNode.x < 12) savedNode.x = Math.random() * width0;
              if (savedNode.x > width0) savedNode.x = Math.random() * width0;
              node.x = savedNode.x;
              node.y = savedNode.y;
            }
          });
        }
      };

      const saveNodePositions = () => {
        const positions = nodes_All.value.map((node) => ({ id: node.id, x: node.x, y: node.y }));
        localStorage.setItem('nodePositions', JSON.stringify(positions));
      };

      const drawGraph = () => {
        let width = 3000; // 增加宽度以允许滚动
        let height = 2500; // 增加高度以允许滚动

        // const svg = d3.select('#graph').append('svg').attr('width', width).attr('height', height);
        let svg;

        if (IsRefreshGraph.value == true) {
          svg = d3.select(graph.value).select('svg');

          svg.selectAll('*').remove(); // 清空之前的绘图内容
        } else {
          svg = d3.select(graph.value).append('svg').attr('width', width).attr('height', height);
        }
        // 定义箭头
        svg
          .append('defs')
          .append('marker')
          .attr('id', 'arrowhead')
          .attr('viewBox', '-0 -5 10 10')
          .attr('refX', 13)
          .attr('refY', 0)
          .attr('orient', 'auto')
          .attr('markerWidth', 6)
          .attr('markerHeight', 6)
          .attr('xoverflow', 'visible')
          .append('svg:path')
          .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
          .attr('fill', 'red')
          .style('stroke', 'none');

        const link = svg
          .append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(links_Sub.value)
          .enter()
          .append('line')
          .attr('stroke-width', 2) // 调整线条的粗细
          .attr('stroke', 'red')
          .attr('marker-end', 'url(#arrowhead)') // 添加箭头
          .on('click', function (event: any, d: any) {
            selectLink(d);
            updateLinkStyles();
          })
          .each(function (d: any) {
            d3.select(this).append('title').text(d.description); // 添加说明
          });

        // 增加透明的宽线条以增加点击区域
        const linkOverlay = svg
          .append('g')
          .attr('class', 'link-overlays')
          .selectAll('line')
          .data(links_Sub.value)
          .enter()
          .append('line')
          .attr('stroke-width', 10)
          .attr('stroke', 'transparent')
          .on('click', function (event: any, d: any) {
            selectLink(d);
            updateLinkStyles();
          });

        // const node = svg
        //   .append('g')
        //   .attr('class', 'nodes')
        //   .selectAll('circle')
        //   .data(nodes_Tab.value)
        //   .enter()
        //   .append('circle')
        //   .attr('r', 10)
        //   .attr('fill', (d: G_Node) => {
        //     console.log('selectedNode(in fill):', selectedNode.value);
        //     console.log('d:', d);
        //     const myColor = selectedNode.value && selectedNode.value.id === d.id ? 'green' : 'blue';
        //     console.log('myColor(in fill):', myColor);
        //     return myColor;
        //   })
        //   .on('click', (event, d: G_Node) => {
        //     selectedNode.value = selectedNode.value && selectedNode.value.id === d.id ? null : d;
        //     console.log('selectedNode(in click):', selectedNode.value);
        //     drawGraph(); // 重新绘制以更新选中状态
        //   })
        //   .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
        const nodeGroup = svg
          .append('g')
          .attr('class', 'nodes')
          .selectAll('g')
          .data(nodes_Tab.value)
          .enter()
          .append('g')
          .on('click', (event, d: G_Node) => {
            selectedNode.value = selectedNode.value && selectedNode.value.id === d.id ? null : d;
            console.log('selectedNode(in click):', selectedNode.value);
            IsRefreshGraph.value = true;
            drawGraph(); // 重新绘制以更新选中状态
          })
          .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

        nodeGroup
          .append('circle')
          .attr('r', 20) // 增加透明圆圈的半径
          .attr('fill', 'transparent');

        nodeGroup
          .append('circle')
          .attr('r', 10)
          .attr('fill', (d: G_Node) =>
            selectedNode.value && selectedNode.value.id === d.id ? 'green' : 'blue',
          );

        // 添加结点名称
        const labels = svg
          .append('g')
          .attr('class', 'labels')
          .selectAll('text')
          .data(nodes_Tab.value)
          .enter()
          .append('text')
          .attr('dy', -65) // 调整文本位置
          .attr('dx', -35) // 调整文本位置
          .attr('text-anchor', 'middle')
          .each(function (d: any) {
            const lines = d.name.split('-');
            lines.forEach((line: string, i: number) => {
              d3.select(this)
                .append('tspan')
                .attr('x', d.x)
                .attr('dy', i === 0 ? -25 : '1.2em')
                .attr('dx', i === 0 ? 0 : -10)
                .text(i === 0 ? `${line}(${d.depth})` : line);
            });
          });

        function ticked() {
          link
            .attr('x1', (d: any) => nodes_Tab.value.find((node) => node.id === d.sourceDn)?.x)
            .attr('y1', (d: any) => nodes_Tab.value.find((node) => node.id === d.sourceDn)?.y)
            .attr('x2', (d: any) => nodes_Tab.value.find((node) => node.id === d.targetDn)?.x)
            .attr('y2', (d: any) => nodes_Tab.value.find((node) => node.id === d.targetDn)?.y);

          linkOverlay
            .attr('x1', (d: any) => nodes_Tab.value.find((node) => node.id === d.sourceDn)?.x)
            .attr('y1', (d: any) => nodes_Tab.value.find((node) => node.id === d.sourceDn)?.y)
            .attr('x2', (d: any) => nodes_Tab.value.find((node) => node.id === d.targetDn)?.x)
            .attr('y2', (d: any) => nodes_Tab.value.find((node) => node.id === d.targetDn)?.y);

          nodeGroup.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
          nodeGroup.attr('transform', (d: any) => `translate(${d.x},${d.y})`);

          labels.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
        }

        function dragstarted(event: any, d: any) {
          d3.select(this).raise().classed('active', true);
        }

        function dragged(event: any, d: any) {
          // 边界检查，确保结点不会超出范围
          d.x = Math.max(0, Math.min(width, event.x));
          d.y = Math.max(0, Math.min(height, event.y));
          ticked();
        }

        function updatePredecessors(node: G_Node) {
          links_All.value.forEach((link) => {
            if (link.targetDn === node.id) {
              const sourceNode = nodes_All.value.find((n) => n.id === link.sourceDn);
              if (sourceNode) {
                if (sourceNode.x >= node.x || Math.abs(sourceNode.x - node.x) < 30) {
                  sourceNode.x = node.x - 30;
                  if (sourceNode.x < 0) sourceNode.x = 10;
                  if (sourceNode.x > width) sourceNode.x = width - 10;
                  updatePredecessors(sourceNode); // 递归更新前驱结点
                }
              }
            }
            if (link.sourceDn === node.id) {
              const targetNode = nodes_All.value.find((n) => n.id === link.targetDn);
              if (targetNode) {
                if (targetNode.x <= node.x || Math.abs(targetNode.x - node.x) < 30) {
                  targetNode.x = node.x + 30;
                  if (targetNode.x < 0) targetNode.x = 10;
                  if (targetNode.x > width) targetNode.x = width - 10;
                  updatePredecessors(targetNode); // 递归更新前驱结点
                }
              }
            }
          });
        }

        function dragended(event: any, d: any) {
          d3.select(this).classed('active', false);

          // 调试信息
          console.log('Dragged node:', d);
          console.log('Links:', links_Sub.value);
          console.log('Nodes:', nodes_Tab.value);

          // 更新前驱结点的位置
          updatePredecessors(d);

          // 确保结点间有一定的间隔
          nodes_Tab.value.forEach((node) => {
            const predecessors = links_Sub.value.filter((link) => link.targetDn === node.id);
            predecessors.forEach((link) => {
              const sourceNode = nodes_Tab.value.find((n) => n.id === link.sourceDn);
              if (sourceNode && sourceNode.x >= node.x) {
                sourceNode.x = node.x - 50; // 确保前驱结点在左边，并增加间隔
                updatePredecessors(sourceNode);
              }
            });
          });

          // 动态调整 SVG 容器的宽度和高度
          width = Math.max(width, d.x + 50);
          height = Math.max(height, d.y + 50);
          svg.attr('width', width).attr('height', height);

          ticked();

          saveNodePositions(); // 保存结点位置
        }

        function updateLinkStyles() {
          d3.selectAll('.links line')
            .attr('stroke', (d: any) => (selectedLink.value === d ? 'blue' : 'red'))
            .attr('stroke-width', (d: any) => (selectedLink.value === d ? 3 : 2));
        }

        ticked(); // 初始渲染
      };

      const getNodeName = (id: number) => {
        const node = nodes_All.value.find((n) => n.id === id);
        return node ? node.name : '';
      };

      const selectLink = (link: G_Link) => {
        selectedLink.value = link;
      };

      const removeLink = async (index: number) => {
        const link = links_Sub.value[index];
        if (link.id != undefined) {
          await btnDelMap_Click(link.id);
        }

        const index_All = links_All.value.findIndex(
          (x) => x.sourceDn == link.sourceDn && x.targetDn == link.targetDn,
        );
        links_Sub.value.splice(index, 1);
        links_All.value.splice(index_All, 1);

        IsRefreshGraph.value = false;
        console.log('删除关系:', links_Sub.value);
        calculatePredecessors(nodes_Tab.value, links_Sub.value);

        calculateConnectedComponents();
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const removeNode = async (index: number) => {
        const node = nodes_Tab.value[index];
        await btnDelNode_Click(node.id);
        //删除相应的关系Links
        const links_Del = links_Sub.value.filter(
          (link) => link.sourceDn === node.id || link.targetDn === node.id,
        );
        links_Del.forEach(async (link) => {
          const index_Link = links_Sub.value.findIndex(
            (x) => x.sourceDn == link.sourceDn && x.targetDn == link.targetDn,
          );
          if (link.id != undefined) {
            await btnDelMap_Click(link.id);
          }
          links_Sub.value.splice(index_Link, 1);

          const index_Link_All = links_All.value.findIndex(
            (x) => x.sourceDn == link.sourceDn && x.targetDn == link.targetDn,
          );
          links_All.value.splice(index_Link_All, 1);
        });

        const index_All = nodes_All.value.findIndex((x) => x.id == node.id);

        nodes_All.value.splice(index_All, 1);

        nodes_Tab.value.splice(index, 1);

        // 删除与该节点相关的所有链接
        links_Sub.value = links_Sub.value.filter(
          (link) => link.source !== node.id && link.target !== node.id,
        );

        IsRefreshGraph.value = false;
        console.log('删除结点:', links_Sub.value);
        // 重新计算深度和布局
        calculatePredecessors(nodes_Tab.value, links_Sub.value);
        calculateDepths(nodes_Tab.value);

        calculateConnectedComponents();
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const selectTab = (index: number) => {
        selectedTab.value = index;
        nodes_Tab.value = groups.value[index].nodes;
        links_Sub.value = groups.value[index].links;
        calculatePredecessors(nodes_Tab.value, links_Sub.value);
        calculateLogicalOrder(nodes_Tab.value);
        calculateDepths(nodes_Tab.value);
        applyGridLayout();
        IsRefreshGraph.value = false;
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const calculateConnectedComponents = async () => {
        const components: { tabName: string; nodes: G_Node[]; links: G_Link[] }[] = [];

        const tableNames = Array.from(new Set(nodes_All.value.map((node) => node.tabName)));
        if (isNeedShowTabs.value == false) {
          const tabName = await vPrjTab_SimStore.getName(props.tabId ?? '');
          tableNames.length = 0;
          tableNames.push(tabName);
        }
        console.log('tableNames:', tableNames);
        tableNames.forEach((tabName: string) => {
          if (tabName != null && tabName.length > 0) {
            const relatedNodes = findAllRelatedNodesByTable(
              tabName,
              nodes_All.value,
              links_All.value,
            );
            const relatedLinks = findAllRelatedLinksByTable(
              tabName,
              nodes_All.value,
              links_All.value,
            );
            components.push({ tabName, nodes: relatedNodes, links: relatedLinks });
          }
        });

        components.sort((a, b) => b.nodes.length - a.nodes.length);

        groups.value = components;
        selectedTab.value = 0;
        selectedNodes.value = components[0].nodes;
        selectedLinks.value = components[0].links;
      };

      onMounted(async () => {
        // 假设 links.value 是从某个 API 获取的
        // links.value = await fetchLinks();
        await GetNodePositionSetting();
        await loadDataNodes();
        await loadDnFuncMaps();
        // calculatePredecessors();
        // calculateLogicalOrder();
        // 计算深度
        // calculateDepths();
        loadNodePositions();
        await calculateConnectedComponents();
        if (groups.value.length > 0) {
          selectTab(0); // 默认选择第一个 Tab
        }
      });
      const sortNodes = () => {
        // 按深度分组节点
        const depthGroups = Array.from(
          { length: Math.max(...nodes_Tab.value.map((node) => node.depth ?? 0)) + 1 },
          () => [],
        );

        nodes_Tab.value.forEach((node: G_Node) => {
          depthGroups[node.depth ?? 0].push(node);
        });

        // 对每个深度层的节点按名称排序
        depthGroups.forEach((group: Array<G_Node>) => {
          group.sort((a, b) => a.name.localeCompare(b.name));
        });

        // 根据关联节点的次序排序
        for (let depth = depthGroups.length - 2; depth >= 0; depth--) {
          depthGroups[depth].sort((a: G_Node, b: G_Node) => {
            const aSuccessors = links_All.value
              .filter((link) => link.sourceDn === a.id)
              .map((link) => link.targetDn);
            const bSuccessors = links_All.value
              .filter((link) => link.sourceDn === b.id)
              .map((link) => link.targetDn);

            const aOrder = aSuccessors.reduce(
              (acc, id) => acc + (nodes_All.value.find((n) => n.id === id)?.order ?? 0),
              0,
            );
            const bOrder = bSuccessors.reduce(
              (acc, id) => acc + (nodes_All.value.find((n) => n.id === id)?.order ?? 0),
              0,
            );

            return aOrder - bOrder;
          });
        }

        // 更新节点的次序
        depthGroups.flat().forEach((node: G_Node, index) => {
          node.order = index;
        });
      };
      const applyGridLayout = () => {
        const container = graph.value;

        if (!container) {
          console.error('Container is null');
          return;
        }

        // const itemWidth = 200; // 每个节点的宽度
        // const itemHeight = 200; // 每个节点的高度
        const gap = 30; // 节点之间的间隔
        const leftMargin = 50; // 左边距
        const containerHeight = height0; // container.clientHeight;
        const containerWidth = width0; // container.clientHeight;

        // 计算最大深度
        const maxDepth = Math.max(...nodes_Tab.value.map((node) => node.depth ?? 0));
        // 按深度分组节点并排序
        sortNodes();

        // 按深度分组节点
        const depthGroups = Array.from({ length: maxDepth + 1 }, () => []);

        nodes_Tab.value.forEach((node: G_Node) => {
          depthGroups[node.depth ?? 0].push(node);
        });

        // 按深度分列，并按同一深度的节点从上到下均匀分布
        depthGroups.forEach((group, depth) => {
          const totalWidth = containerWidth - gap * maxDepth;
          let itemWidth = totalWidth / (maxDepth + 1);
          if (itemWidth > columnWidth.value) itemWidth = columnWidth.value;
          else columnWidth.value = itemWidth;
          const columnX = leftMargin + depth * (itemWidth + gap) + 0.5 * itemWidth;
          const rowCount = group.length;
          const totalHeight = containerHeight - gap * (rowCount - 1);
          let itemHeight = totalHeight / (rowCount + 1);
          if (itemHeight > nodeHeight.value) itemHeight = nodeHeight.value;
          else nodeHeight.value = itemHeight;
          const startY = gap / 2;

          group.forEach((node: G_Node, index) => {
            node.x = columnX;
            node.y = startY + index * (itemHeight + gap) + itemHeight * 0.5;
          });
        });

        // 保存到缓存中
        nodes_Tab.value.forEach((node) => {
          localStorage.setItem(`node_${node.id}`, JSON.stringify({ x: node.x, y: node.y }));
        });

        saveNodePositions(); // 保存结点位置

        // 重新调用绘图函数
        IsRefreshGraph.value = true;
        if (nodes_Tab.value.length == 0) {
          alert('结点数为0，不需要画 in (applyGridLayout)');
          return;
        }
        drawGraph();
        console.log('重新调用绘图函数:', nodes_Tab.value);
      };

      /**
       * 根据关键字删除记录
       * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
       **/
      async function DelDataNode(lngDataNodeId: number) {
        const strThisFuncName = DelDataNode.name;
        try {
          const returnInt = await DataNode_DelRecordAsync(lngDataNodeId);
          if (returnInt > 0) {
            //DataNode_ReFreshCache();
            // const strInfo = `删除结点成功,共删除${returnInt}条记录!`;
            //显示信息框
            // alert(strInfo);
          } else {
            const strInfo = `删除结点不成功!`;
            //显示信息框
            alert(strInfo);
          }
          console.log('完成DelRecord!');
        } catch (e) {
          const strMsg = `删除结点不成功. ${e}.(in ShowDnPath.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      /**
       * 删除结点，使之变成字段
       */
      async function btnDelNode_Click(strKeyId: number) {
        try {
          if (strKeyId == 0) {
            alert('请选择需要删除的记录！');
            return '';
          }
          if (confirm_del(0) == false) {
            return;
          }
          const objvDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
            strKeyId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvDataNode == null) {
            const strMsg = `DataNodeId:[${strKeyId}]在缓存中不存在.`;
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return false;
          }

          await DelDataNode(strKeyId);
          vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        } catch (e: any) {
          const strMsg = `删除记录不成功. ${e}.`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      /**
       * 根据关键字删除记录
       * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
       **/
      async function DelDnFuncMap(strDnFuncMapId: string) {
        const strThisFuncName = DelDnFuncMap.name;
        try {
          const returnBool = await DnFuncMapEx_DelRecordEx(
            strDnFuncMapId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (returnBool == true) {
            //DnFuncMap_ReFreshCache();
            const strInfo = Format('删除映射关系成功!');
            vDnFuncMap_SimStore.delObj(strDnFuncMapId);
            vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
            vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
            const objDnFuncMap = links_Sub.value.find((x) => x.id == strDnFuncMapId);
            if (objDnFuncMap != null && objDnFuncMap.tabId != null && objDnFuncMap.tabId != '') {
              PrjTabFld_ReFreshCache(objDnFuncMap.tabId);
            }

            //显示信息框
            alert(strInfo);
          } else {
            const strInfo = Format('删除记录不成功!');
            //显示信息框
            alert(strInfo);
          }
          console.log('完成DelRecord!');
        } catch (e) {
          const strMsg = Format('删除记录不成功. {0}.(in ShowDnPath.{1})', e, strThisFuncName);
          console.error(strMsg);
          alert(strMsg);
        }
      }
      async function btnDelMap_Click(strDnFuncMapId: string) {
        //alert(strKeyId);
        try {
          if (IsNullOrEmpty(strDnFuncMapId) == true) {
            alert('请选择需要删除的记录！');
            return '';
          }
          if (confirm_del(0) == false) {
            return;
          }

          const objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);

          if (objDnFuncMap == null) {
            alert(`关系映射:${strDnFuncMapId}在表中的对象为空！`);
            vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
            vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

            return;
          }
          await DelDnFuncMap(strDnFuncMapId);
        } catch (e: any) {
          const strMsg = `删除映射不成功. ${e}.`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      async function GetNodePositionSetting() {
        //alert(strKeyId);
        try {
          const objPrjTabAddi = await PrjTabAddi_GetObjByTabIdAsync(props.tabId ?? '');
          if (objPrjTabAddi == null) {
            return;
          }
          if (objPrjTabAddi.columnWidth > 10) columnWidth.value = objPrjTabAddi.columnWidth;
          if (objPrjTabAddi.nodeHeight > 10) nodeHeight.value = objPrjTabAddi.nodeHeight;
        } catch (e: any) {
          const strMsg = `获取工程表附加不成功. ${e}.`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      return {
        nodes_All,
        nodes_Tab,
        links_All,
        links_Sub,
        groups,
        selectedTab,
        selectedLink,
        selectedNode,
        loadNodePositions,
        saveNodePositions,
        drawGraph,
        getNodeName,
        selectLink,
        removeLink,
        removeNode,
        selectTab,
        applyGridLayout,
        graph,

        calculateLogicalOrder,

        selectedTables,
        groupTables,
        isNeedShowTabs,
        columnWidth,
        nodeHeight,
      };
    },
  });
</script>
<style>
  /* #container {
    display: flex;
    flex-direction: column;
  } */

  #tabs button {
    margin-right: 5px;
    padding: 5px 10px; /* 调整按钮的内边距以减小高度 */
    cursor: pointer;
  }

  #tabs button.active {
    background-color: #007bff;
    color: white;
  }

  #content {
    display: flex;
    flex-direction: row;
  }

  #graph-container {
    flex: 1;
    height: 74vh; /* 调整高度为 60vh */
    overflow: auto; /* 添加滚动条 */
    position: relative;
  }

  #graph {
    width: 100%;
    height: 100%;
  }

  #info {
    width: 300px;
    padding-left: 20px;
    flex-shrink: 0;
  }

  .selected {
    background-color: yellow; /* 高亮显示选中的关系 */
  }

  #graph-container::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 3px;
  }

  #graph-container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 3px;
  }
  /* 自定义 tabs 滚动条样式 */
  #tabs-container::-webkit-scrollbar {
    height: 5px;
  }

  #tabs-container::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 3px;
  }

  #tabs-container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 3px;
  }

  /* 固定水平滚动条在屏幕底部 */
  #graph-container::after {
    content: '';
    display: block;
    height: 6px; /* 滚动条的高度 */
  }

  #graph-container::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  #tabs-container {
    display: flex; /* 水平布局 */
    flex-direction: column; /* 垂直布局 */
    overflow-x: auto;
  }

  #tabs {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
  }

  .tab {
    margin-right: 10px;
    position: relative;
  }

  button.active {
    font-weight: bold;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: fixed;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content p:hover {
    background-color: #f1f1f1;
  }
</style>
