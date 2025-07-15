<template>
  <div id="container">
    <h1>图分组展示-Test8</h1>
    <!-- 添加标题 -->
    <div id="tabs">
      <button
        v-for="(group, index) in groups"
        :key="index"
        :class="{ active: selectedTab === index }"
        @click="selectTab(index)"
      >
        Group {{ index + 1 }}
      </button>
    </div>
    <div id="content">
      <div id="graph-container">
        <div id="graph" ref="graph" width="100%" height="100%"> </div>
      </div>
      <div id="info">
        <button @click="applyGridLayout">网格布局</button>
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
  import { ref, onMounted } from 'vue';
  import * as d3 from 'd3';

  interface G_Node {
    id: number;
    name: string;
    x: number;
    y: number;
    fx?: number | null;
    fy?: number | null;
    predecessors: number[]; // 添加 predecessors 属性
    order?: number; // 添加 order 属性，用于存储逻辑次序
    depth?: number; // 添加 depth 属性，用于存储层或深度
  }

  interface G_Link {
    source: number;
    target: number;
    sourceDn: number;
    targetDn: number;
    description?: string;
  }

  export default {
    name: 'Test8',
    setup() {
      const graph = ref(null);
      const IsRefreshGraph = ref(false);
      const nodes_All = ref<G_Node[]>([
        { id: 1, name: 'Node_1', x: 100, y: 100, predecessors: [] },
        { id: 2, name: 'Node_2', x: 200, y: 120, predecessors: [] },
        { id: 3, name: 'Node_3', x: 300, y: 150, predecessors: [] },
        { id: 4, name: '结点_4', x: 400, y: 160, predecessors: [] },
        { id: 5, name: '结点_5', x: 500, y: 180, predecessors: [] },
        { id: 6, name: '结点_6', x: 600, y: 200, predecessors: [] },
        { id: 7, name: '结点_7', x: 700, y: 200, predecessors: [] },
        { id: 8, name: '结点_8', x: 800, y: 200, predecessors: [] },
        { id: 9, name: '结点_9', x: 900, y: 200, predecessors: [] },
        { id: 10, name: '结点_10', x: 1000, y: 200, predecessors: [] },
        { id: 11, name: '结点_11', x: 1000, y: 200, predecessors: [] },
      ]);

      const nodes_Tab = ref<G_Node[]>([
        { id: 1, name: 'Node_1', x: 100, y: 100, predecessors: [] },
      ]);
      const links_All = ref<G_Link[]>([
        { source: 1, sourceDn: 1, target: 2, targetDn: 2, description: '关系1' },
        { source: 2, sourceDn: 2, target: 3, targetDn: 3, description: '关系2' },
        { source: 3, sourceDn: 3, target: 4, targetDn: 4, description: '关系3' },
        { source: 3, sourceDn: 3, target: 11, targetDn: 11, description: '关系4' },
        { source: 4, sourceDn: 4, target: 5, targetDn: 5, description: '关系5' },
        { source: 6, sourceDn: 6, target: 7, targetDn: 7, description: '关系6' },

        { source: 8, sourceDn: 8, target: 9, targetDn: 9, description: '关系8' },
        { source: 9, sourceDn: 9, target: 10, targetDn: 10, description: '关系9' },
      ]);
      const links_Sub = ref<G_Link[]>([
        { source: 1, sourceDn: 1, target: 2, targetDn: 2, description: '关系1' },
      ]);

      const groups = ref<{ nodes: G_Node[]; links: G_Link[] }[]>([]);
      const selectedTab = ref<number>(0);
      const selectedLink = ref<G_Link | null>(null);
      const selectedNode = ref<G_Node | null>(null);

      const getPredecessors = (nodeId: number): number[] => {
        return links_All.value
          .filter((link) => link.targetDn === nodeId)
          .map((link) => link.sourceDn);
      };

      const calculatePredecessors = () => {
        nodes_All.value.forEach((node) => {
          node.predecessors = getPredecessors(node.id);
          console.log('node:(in calculatePredecessors)', node);
        });
      };

      const calculateLogicalOrder = () => {
        const visited = new Set();
        const order = Array<G_Node>();

        const visit = (node: G_Node) => {
          if (!visited.has(node.id)) {
            visited.add(node.id);
            node.predecessors.forEach((predecessorId) => {
              const predecessor = nodes_All.value.find((n) => n.id === predecessorId);
              if (predecessor) {
                visit(predecessor);
              }
            });
            order.push(node);
          }
        };

        nodes_All.value.forEach((node) => visit(node));

        order.forEach((node, index) => {
          node.order = index;
        });
      };
      const calculateDepths = () => {
        const visited = new Set();

        const calculateDepth = (node) => {
          if (visited.has(node.id)) {
            return node.depth;
          }

          visited.add(node.id);

          if (node.predecessors.length === 0) {
            node.depth = 0;
          } else {
            const predecessorDepths = node.predecessors.map((predecessorId) => {
              const predecessor = nodes_All.value.find((n) => n.id === predecessorId);
              if (predecessor) {
                return calculateDepth(predecessor) + 1;
              }
              return 0;
            });
            node.depth = Math.max(...predecessorDepths);
          }

          console.log('Calculated depth for node:', node.id, 'is', node.depth);
          return node.depth;
        };

        nodes_All.value.forEach((node) => calculateDepth(node));
      };

      const loadNodePositions = () => {
        const savedPositions = JSON.parse(localStorage.getItem('nodePositions') || '[]');
        if (savedPositions) {
          nodes_All.value.forEach((node) => {
            const savedNode = savedPositions.find((n: any) => n.id === node.id);
            if (savedNode) {
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
        console.log('drawGraph');
        let width = 1200; // 增加宽度以允许滚动
        let height = 800; // 增加高度以允许滚动
        // const svg = d3.select('#graph').append('svg').attr('width', width).attr('height', height);
        let svg;

        if (IsRefreshGraph.value == true) {
          svg = d3.select(graph.value).select('svg');

          svg.selectAll('*').remove(); // 清空之前的绘图内容
        } else {
          svg = d3.select(graph.value).append('svg').attr('width', width).attr('height', height);
        }

        // 其他绘图逻辑
        svg.selectAll('circle').attr('fill', (d: G_Node) => {
          const myColor = selectedNode.value && selectedNode.value.id === d.id ? 'green' : 'blue';
          return myColor;
        });

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
          .attr('x1', (d) => getNode(d.sourceDn).x)
          .attr('y1', (d) => getNode(d.sourceDn).y)
          .attr('x2', (d) => getNode(d.targetDn).x)
          .attr('y2', (d) => getNode(d.targetDn).y)
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
          .attr('dy', -85) // 调整文本位置
          .attr('dx', -55) // 调整文本位置
          .attr('text-anchor', 'middle')
          .each(function (d: any) {
            const lines = d.name.split('_');
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

          // nodeGroup.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
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
                  updatePredecessors(sourceNode); // 递归更新前驱结点
                }
              }
            }
          });
        }

        function dragended(event: any, d: any) {
          d3.select(this).classed('active', false);

          // 调试信息
          // console.log('Dragged node:', d);
          // console.log('Links:', links_Sub.value);
          // console.log('Nodes:', nodes_Tab.value);

          // 更新前驱结点的位置
          updatePredecessors(d);

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
        const node = nodes_Tab.value.find((n) => n.id === id);
        return node ? node.name : '';
      };

      const selectLink = (link: G_Link) => {
        selectedLink.value = link;
      };

      const removeLink = (index: number) => {
        const link = links_Sub.value[index];
        const index_All = links_All.value.findIndex(
          (x) => x.sourceDn == link.sourceDn && x.targetDn == link.targetDn,
        );
        links_Sub.value.splice(index, 1);
        links_All.value.splice(index_All, 1);

        IsRefreshGraph.value = false;
        console.log('删除关系:', links_Sub.value);
        calculatePredecessors();
        calculateDepths();
        calculateConnectedComponents();
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const getNode = (id) => {
        // console.log('getNode:', id);
        return nodes_Tab.value.find((node) => node.id === id);
      };

      const removeNode = (index: number) => {
        const node = nodes_Tab.value[index];
        //删除相应的关系Links
        const links_Del = links_Sub.value.filter(
          (link) => link.sourceDn === node.id || link.targetDn === node.id,
        );
        links_Del.forEach((link) => {
          const index_Link = links_Sub.value.findIndex(
            (x) => x.sourceDn == link.sourceDn && x.targetDn == link.targetDn,
          );
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
        calculatePredecessors();
        calculateDepths();

        calculateConnectedComponents();
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const selectTab = (index: number) => {
        selectedTab.value = index;
        nodes_Tab.value = groups.value[index].nodes;
        links_Sub.value = groups.value[index].links;
        IsRefreshGraph.value = false;
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      const calculateConnectedComponents = () => {
        const visited = new Set<number>();
        const components: { nodes: G_Node[]; links: G_Link[] }[] = [];

        const dfs = (nodeId: number, component: { nodes: G_Node[]; links: G_Link[] }) => {
          visited.add(nodeId);
          const node = nodes_All.value.find((n) => n.id === nodeId);
          if (node) {
            component.nodes.push(node);
            links_All.value.forEach((link) => {
              if (link.sourceDn === nodeId && !visited.has(link.targetDn)) {
                component.links.push(link);
                dfs(link.targetDn, component);
              } else if (link.targetDn === nodeId && !visited.has(link.sourceDn)) {
                component.links.push(link);
                dfs(link.sourceDn, component);
              }
            });
          }
        };

        nodes_All.value.forEach((node) => {
          if (!visited.has(node.id)) {
            const component = { nodes: [], links: [] };
            dfs(node.id, component);
            components.push(component);
          }
        });

        groups.value = components;
      };
      const applyGridLayout = () => {
        const container = graph.value;

        if (!container) {
          console.error('Container is null');
          return;
        }

        const itemWidth = 200; // 每个节点的宽度
        const itemHeight = 200; // 每个节点的高度
        const gap = 30; // 节点之间的间隔
        const leftMargin = 50; // 左边距
        const containerHeight = container.clientHeight;

        // 计算最大深度
        const maxDepth = Math.max(...nodes_Tab.value.map((node) => node.depth ?? 0));

        // 按深度分组节点
        const depthGroups = Array.from({ length: maxDepth + 1 }, () => []);

        nodes_Tab.value.forEach((node: G_Node) => {
          depthGroups[node.depth ?? 0].push(node);
        });

        // 按深度分列，并按同一深度的节点从上到下均匀分布
        depthGroups.forEach((group, depth) => {
          const columnX = leftMargin + depth * (itemWidth + gap);
          const rowCount = group.length;
          const totalHeight = rowCount * itemHeight + (rowCount - 1) * gap;
          const startY = (containerHeight - totalHeight) / 2;

          group.forEach((node: G_Node, index) => {
            node.x = columnX;
            node.y = startY + index * (itemHeight + gap);
          });
        });

        // 保存到缓存中
        nodes_Tab.value.forEach((node) => {
          localStorage.setItem(`node_${node.id}`, JSON.stringify({ x: node.x, y: node.y }));
        });

        saveNodePositions(); // 保存结点位置
        // 保存到缓存中
        nodes_Tab.value.forEach((node) => {
          localStorage.setItem(`node_${node.id}`, JSON.stringify({ x: node.x, y: node.y }));
        });

        // 重新调用绘图函数
        IsRefreshGraph.value = true;
        drawGraph();
        console.log('重新调用绘图函数:', nodes_Tab.value);
      };

      const nodeStyle = (node: G_Node): Record<string, string> => {
        return {
          position: 'absolute',
          width: '200px',
          height: '200px',
          left: `${node.x}px`,
          top: `${node.y}px`,
          border: '1px solid black',
          boxSizing: 'border-box',
        };
      };

      onMounted(async () => {
        // 假设 links.value 是从某个 API 获取的
        // links.value = await fetchLinks();
        calculatePredecessors();
        calculateLogicalOrder();
        // 计算深度
        calculateDepths();
        loadNodePositions();
        calculateConnectedComponents();
        selectTab(0); // 默认选择第一个 Tab
      });

      return {
        nodes_All,
        nodes_Tab,
        links_All,
        links_Sub,

        groups,
        selectedTab,
        selectedNode,
        selectedLink,
        loadNodePositions,
        saveNodePositions,
        drawGraph,
        getNodeName,
        selectLink,
        removeLink,
        getNode,
        removeNode,
        selectTab,
        graph,
        applyGridLayout,
        nodeStyle,
      };
    },
  };
</script>

<style>
  #container {
    display: flex;
    flex-direction: column;
  }

  #tabs {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  #tabs button {
    margin-right: 5px;
    padding: 10px;
    cursor: pointer;
  }

  #tabs button.active {
    background-color: #007bff;
    color: white;
  }

  #content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #graph-container {
    width: 70%;
    height: 80%;
    overflow: auto; /* 添加滚动条 */
  }

  #graph {
    width: 100%;
    height: 100%;
  }

  #info {
    width: 30%;
    padding-left: 20px;
  }

  .selected {
    background-color: yellow; /* 高亮显示选中的关系 */
  }
</style>
