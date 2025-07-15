<template>
  <div id="container">
    <div id="graph-container">
      <div id="graph"></div>
    </div>
    <div id="info">
      <ul>
        <li v-for="node in nodes" :key="node.id">
          {{ node.name }}: ({{ node.x.toFixed(2) }}, {{ node.y.toFixed(2) }})
        </li>
      </ul>
      <h3>关系说明</h3>
      <ul>
        <li
          v-for="(link, index) in links"
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
</template>

<script lang="ts">
  import { ref, onMounted } from 'vue';
  import * as d3 from 'd3';

  interface Node {
    id: number;
    name: string;
    x: number;
    y: number;
    fx?: number | null;
    fy?: number | null;
  }

  interface Link {
    source: number;
    target: number;
    sourceDn: number;
    targetDn: number;
    description?: string;
  }

  export default {
    name: 'Test7',
    setup() {
      const nodes = ref<Node[]>([
        { id: 1, name: 'Node 1', x: 100, y: 100 },
        { id: 2, name: 'Node 2', x: 200, y: 120 },
        { id: 3, name: 'Node 3', x: 300, y: 150 },
        { id: 4, name: '结点4', x: 400, y: 160 },
        { id: 5, name: '结点5', x: 500, y: 180 },
        { id: 6, name: '结点6', x: 600, y: 200 },
      ]);

      const links = ref<Link[]>([
        { source: 1, sourceDn: 1, target: 2, targetDn: 2, description: '关系1' },
        { source: 2, sourceDn: 2, target: 3, targetDn: 3, description: '关系2' },
        { source: 3, sourceDn: 3, target: 4, targetDn: 4, description: '关系3' },
        { source: 4, sourceDn: 4, target: 6, targetDn: 6, description: '关系4' },
        { source: 4, sourceDn: 4, target: 5, targetDn: 5, description: '关系5' },
      ]);

      const selectedLink = ref<Link | null>(null);

      const loadNodePositions = () => {
        const savedPositions = JSON.parse(localStorage.getItem('nodePositions') || '[]');
        if (savedPositions) {
          nodes.value.forEach((node) => {
            const savedNode = savedPositions.find((n: any) => n.id === node.id);
            if (savedNode) {
              node.x = savedNode.x;
              node.y = savedNode.y;
            }
          });
        }
      };

      const saveNodePositions = () => {
        const positions = nodes.value.map((node) => ({ id: node.id, x: node.x, y: node.y }));
        localStorage.setItem('nodePositions', JSON.stringify(positions));
      };

      const drawGraph = () => {
        let width = 1200; // 初始宽度
        let height = 800; // 初始高度

        const svg = d3.select('#graph').append('svg').attr('width', width).attr('height', height);

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
          .data(links.value)
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
          .data(links.value)
          .enter()
          .append('line')
          .attr('stroke-width', 10)
          .attr('stroke', 'transparent')
          .on('click', function (event: any, d: any) {
            selectLink(d);
            updateLinkStyles();
          });

        const node = svg
          .append('g')
          .attr('class', 'nodes')
          .selectAll('circle')
          .data(nodes.value)
          .enter()
          .append('circle')
          .attr('r', 10)
          .attr('fill', 'blue')
          .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

        // 添加结点名称
        const labels = svg
          .append('g')
          .attr('class', 'labels')
          .selectAll('text')
          .data(nodes.value)
          .enter()
          .append('text')
          .attr('dy', -15) // 调整文本位置
          .attr('text-anchor', 'middle')
          .text((d: any) => d.name);

        function ticked() {
          link
            .attr('x1', (d: any) => nodes.value.find((node) => node.id === d.sourceDn)?.x)
            .attr('y1', (d: any) => nodes.value.find((node) => node.id === d.sourceDn)?.y)
            .attr('x2', (d: any) => nodes.value.find((node) => node.id === d.targetDn)?.x)
            .attr('y2', (d: any) => nodes.value.find((node) => node.id === d.targetDn)?.y);

          linkOverlay
            .attr('x1', (d: any) => nodes.value.find((node) => node.id === d.sourceDn)?.x)
            .attr('y1', (d: any) => nodes.value.find((node) => node.id === d.sourceDn)?.y)
            .attr('x2', (d: any) => nodes.value.find((node) => node.id === d.targetDn)?.x)
            .attr('y2', (d: any) => nodes.value.find((node) => node.id === d.targetDn)?.y);

          node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

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

        function updatePredecessors(node: Node) {
          links.value.forEach((link) => {
            if (link.targetDn === node.id) {
              const sourceNode = nodes.value.find((n) => n.id === link.sourceDn);
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
          console.log('Dragged node:', d);
          console.log('Links:', links.value);
          console.log('Nodes:', nodes.value);

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
        const node = nodes.value.find((n) => n.id === id);
        return node ? node.name : '';
      };

      const selectLink = (link: Link) => {
        selectedLink.value = link;
      };

      const removeLink = (index: number) => {
        links.value.splice(index, 1);
        d3.select('#graph').select('svg').remove();
        drawGraph();
      };

      onMounted(() => {
        loadNodePositions();
        drawGraph();
      });

      return {
        nodes,
        links,
        selectedLink,
        loadNodePositions,
        saveNodePositions,
        drawGraph,
        getNodeName,
        selectLink,
        removeLink,
      };
    },
  };
</script>

<style>
  #container {
    display: flex;
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
