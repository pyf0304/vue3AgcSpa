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
          {{ getNodeName(link.source) }} -> {{ getNodeName(link.target) }}
          <button @click="removeLink(index)">取消关系</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted } from 'vue';
  import * as d3 from 'd3';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { vDnFuncMap_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
  import { vDataNode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';

  interface Node {
    id: number;
    name: string;
    x: number;
    y: number;
  }

  interface Link {
    source: number;
    target: number;
    description?: string;
  }

  export default {
    name: 'ShowDnPath',
    setup() {
      const strPrjId = clsPrivateSessionStorage.currSelPrjId;
      const nodes = ref<Node[]>([]);
      const links = ref<Link[]>([]);
      async function loadDnFuncMaps() {
        const arrvDnFuncMap_Sim = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
        const intDataNodeNum = vDnFuncMap_SimEx_GetDataNodeNum(arrvDnFuncMap_Sim);
        if (nodes.value.length < intDataNodeNum) {
          const arrDataNode_InFuncMap = vDnFuncMap_SimEx_GetDataNodeLst(arrvDnFuncMap_Sim);

          for (const intDataNodeId of arrDataNode_InFuncMap) {
            if (nodes.value.find((x) => x.id == intDataNodeId) == null) {
              const objvDataNode_Sim = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
                intDataNodeId,
                strPrjId,
              );
              if (objvDataNode_Sim != null) {
                nodes.value.push({
                  id: objvDataNode_Sim.dataNodeId,
                  name: objvDataNode_Sim.dataNodeName,
                  x: objvDataNode_Sim.posX == undefined ? 0 : objvDataNode_Sim.posX,
                  y: objvDataNode_Sim.posY == undefined ? 0 : objvDataNode_Sim.posY,
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
        console.log('arrvDnFuncMap_Sim:', arrvDnFuncMap_Sim);
        const arrvDnFuncMap_SimEx = arrvDnFuncMap_Sim.map(vDnFuncMap_SimEx_CopyToEx);
        for (const objvDnFuncMap_SimEx of arrvDnFuncMap_SimEx) {
          await vDnFuncMap_SimEx_FuncMapMapDescription(objvDnFuncMap_SimEx);
        }
        links.value = arrvDnFuncMap_SimEx.map((link) => ({
          source: link.inDataNodeId,
          target: link.outDataNodeId,
          description: link.mapDescription,
        }));
        console.log('this.links:', links.value);
      }

      async function loadDataNodes() {
        const arrDataNode = await vDataNode_Sim_GetObjLstCache(strPrjId);
        nodes.value = arrDataNode.map((node) => ({
          id: node.dataNodeId,
          name: node.dataNodeName,
          x: node.posX == undefined ? 0 : node.posX,
          y: node.posY == undefined ? 0 : node.posY,
        }));
        console.log('this.nodes:', nodes.value);
      }

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
        const width = 1400;
        const height = 800;

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
          .attr('marker-end', 'url(#arrowhead)'); // 添加箭头

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

          // 更新前驱结点的位置
          links.value.forEach((link) => {
            if (link.target === d.id) {
              const sourceNode = nodes.value.find((node) => node.id === link.source);
              if (sourceNode) {
                sourceNode.x = d.x - 30;
              }
            }
          });

          saveNodePositions(); // 保存结点位置
        }
      };

      const getNodeName = (id: number) => {
        const node = nodes.value.find((node) => node.id === id);
        return node ? node.name : '';
      };

      const removeLink = (index: number) => {
        links.value.splice(index, 1);
        drawGraph();
      };

      onMounted(async () => {
        await loadDataNodes();
        await loadDnFuncMaps();
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
    width: 80%;
    height: 100%;
  }

  #info {
    width: 20%;
    padding-left: 20px;
  }
</style>
