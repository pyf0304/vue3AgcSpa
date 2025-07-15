<template>
  <div id="container">
    <div id="graph"></div>
    <div id="info">
      <ul>
        <li v-for="node in nodes" :key="node.id">
          {{ node.name }}: ({{ node.x.toFixed(2) }}, {{ node.y.toFixed(2) }})
        </li>
      </ul>
      <h3>关系说明</h3>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{ getNodeName(link.sourceDn) }} -> {{ getNodeName(link.targetDn) }}
          <button @click="removeLink(index)">取消关系</button>
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
  }

  interface Link {
    source: number;
    target: number;
    sourceDn: number;
    targetDn: number;
    description?: string;
  }

  export default {
    name: 'Test6',
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
        const width = 600;
        const height = 400;

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

        const simulation = d3
          .forceSimulation(nodes.value)
          .force(
            'link',
            d3
              .forceLink(links.value)
              .id((d: any) => d.id)
              .distance(150),
          ) // 增加链接距离
          .force('charge', d3.forceManyBody().strength(-300)) // 增加结点间的排斥力
          .force('center', d3.forceCenter(width / 2, height / 2))
          .force('x', d3.forceX((d: any) => d.x).strength(1))
          .force('y', d3.forceY((d: any) => d.y).strength(1));

        const link = svg
          .append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(links.value)
          .enter()
          .append('line')
          .attr('stroke-width', 2)
          .attr('stroke', 'red')
          .attr('marker-end', 'url(#arrowhead)') // 添加箭头
          .each(function (d: any) {
            d3.select(this).append('title').text(d.description); // 添加说明
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

        simulation.nodes(nodes.value).on('tick', ticked);

        simulation.force('link').links(links.value);

        function ticked() {
          link
            .attr('x1', (d: any) => d.source.x)
            .attr('y1', (d: any) => d.source.y)
            .attr('x2', (d: any) => d.target.x)
            .attr('y2', (d: any) => d.target.y);

          node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

          labels.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
        }

        function dragstarted(event: any, d: any) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event: any, d: any) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event: any, d: any) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = d.x;
          d.fy = d.y;

          // 调试信息
          console.log('Dragged node:', d);
          console.log('Links:', links.value);
          console.log('Nodes:', nodes.value);

          // 更新前驱结点的位置
          links.value.forEach((link) => {
            if (link.targetDn === d.id) {
              const sourceNode = nodes.value.find((node) => node.id === link.sourceDn);
              if (sourceNode) {
                if (sourceNode.x >= d.x || Math.abs(sourceNode.x - d.x) < 30) {
                  sourceNode.x = d.x - 30;
                }
              }
            }
          });
          // 更新前驱结点的位置
          links.value.forEach((link) => {
            const sourceNode = nodes.value.find((node) => node.id === link.source);
            const targetNode = nodes.value.find((node) => node.id === link.target);
            if (sourceNode && targetNode) {
              if (sourceNode.x >= targetNode.x || Math.abs(sourceNode.x - targetNode.x) < 30) {
                sourceNode.x = targetNode.x - 30;
              }
            }
          });
          // 重新启动力模拟以确保图形重新布局

          simulation.alpha(1).restart();

          // 重新渲染图形
          d3.select('#graph').select('svg').remove();
          drawGraph();
          saveNodePositions(); // 保存结点位置
        }
      };

      const getNodeName = (id: number) => {
        const node = nodes.value.find((n) => n.id === id);
        return node ? node.name : '';
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
        loadNodePositions,
        saveNodePositions,
        drawGraph,
        getNodeName,
        removeLink,
      };
    },
  };
</script>

<style>
  #container {
    display: flex;
  }

  #graph {
    width: 70%;
    height: 100%;
  }

  #info {
    width: 30%;
    padding-left: 20px;
  }
</style>
