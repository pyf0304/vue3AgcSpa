<template>
  <div id="graph"></div>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: 'Test2',
    mounted() {
      this.drawGraph();
    },
    methods: {
      drawGraph() {
        const nodes = [
          { id: 1, name: 'Node 1' },
          { id: 2, name: 'Node 2' },
          { id: 3, name: 'Node 3' },
          { id: 4, name: '结点4' },
          { id: 5, name: '结点5' },
        ];

        const links = [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 1 },
          { source: 4, target: 1 },
          { source: 4, target: 5 },
        ];

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
          .forceSimulation(nodes)
          .force(
            'link',
            d3.forceLink(links).id((d) => d.id),
          )
          .force('charge', d3.forceManyBody())
          .force('center', d3.forceCenter(width / 2, height / 2));

        const link = svg
          .append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(links)
          .enter()
          .append('line')
          .attr('stroke-width', 2)
          .attr('stroke', 'red')
          .attr('marker-end', 'url(#arrowhead)'); // 添加箭头

        const node = svg
          .append('g')
          .attr('class', 'nodes')
          .selectAll('circle')
          .data(nodes)
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
          .data(nodes)
          .enter()
          .append('text')
          .attr('dy', -15) // 调整文本位置
          .attr('text-anchor', 'middle')
          .text((d) => d.name);

        simulation.nodes(nodes).on('tick', ticked);

        simulation.force('link').links(links);

        function ticked() {
          link
            .attr('x1', (d) => d.source.x)
            .attr('y1', (d) => d.source.y)
            .attr('x2', (d) => d.target.x)
            .attr('y2', (d) => d.target.y);

          node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);

          labels.attr('x', (d) => d.x).attr('y', (d) => d.y);
        }

        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = event.x;
          d.fy = event.y;
        }
      },
    },
  };
</script>

<style>
  #graph {
    width: 100%;
    height: 100%;
  }
</style>
