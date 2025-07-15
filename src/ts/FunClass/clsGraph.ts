import { ref } from 'vue';

export interface G_Node {
  id: number;
  name: string;
  x: number;
  y: number;
  fx?: number | null;
  fy?: number | null;
  predecessors: number[]; // 添加 predecessors 属性
  order?: number; // 添加 order 属性，用于存储逻辑次序
  depth?: number; // 添加 depth 属性，用于存储层或深度
  tabName?: string;
}

export interface G_Link {
  source: number;
  target: number;
  sourceDn: number;
  targetDn: number;
  description?: string;
  id?: string;
  tabId?: string;
}

export const nodes_All = ref<G_Node[]>([
  { id: 1, name: 'G_Node 1', x: 100, y: 100, predecessors: [] },
  { id: 2, name: 'G_Node 2', x: 200, y: 120, predecessors: [] },
  { id: 3, name: 'G_Node 3', x: 300, y: 150, predecessors: [] },
  { id: 4, name: '结点4', x: 400, y: 160, predecessors: [] },
  { id: 5, name: '结点5', x: 500, y: 180, predecessors: [] },
  { id: 6, name: '结点6', x: 600, y: 200, predecessors: [] },
  { id: 7, name: '结点7', x: 700, y: 200, predecessors: [] },
  { id: 8, name: '结点8', x: 800, y: 200, predecessors: [] },
  { id: 9, name: '结点9', x: 900, y: 200, predecessors: [] },
  { id: 10, name: '结点10', x: 1000, y: 200, predecessors: [] },
]);
export const nodes_Tab = ref<G_Node[]>([
  { id: 1, name: 'Node_1', x: 100, y: 100, predecessors: [] },
]);

export const links_All = ref<G_Link[]>([
  { source: 1, sourceDn: 1, target: 2, targetDn: 2, description: '关系1' },
  { source: 2, sourceDn: 2, target: 3, targetDn: 3, description: '关系2' },
  { source: 3, sourceDn: 3, target: 4, targetDn: 4, description: '关系3' },
  // { source: 4, sourceDn: 4, target: 6, targetDn: 6, description: '关系4' },
  { source: 4, sourceDn: 4, target: 5, targetDn: 5, description: '关系5' },
  { source: 6, sourceDn: 6, target: 7, targetDn: 7, description: '关系6' },

  { source: 8, sourceDn: 8, target: 9, targetDn: 9, description: '关系8' },
  { source: 9, sourceDn: 9, target: 10, targetDn: 10, description: '关系9' },
]);
export const links_Sub = ref<G_Link[]>([
  { source: 1, sourceDn: 1, target: 2, targetDn: 2, description: '关系1' },
]);

/**
 * 1. 求一个表的相关节点
 * 这个函数将遍历所有节点，找到属于指定表的节点。
 * @param tableName
 * @param nodes
 * @returns
 */
export function findNodesByTable(tableName: string, nodes: G_Node[]): G_Node[] {
  return nodes.filter((node) => node.tabName === tableName);
}

/**
 * 2. 求一个表的所有相关节点
 * 这个函数将遍历所有节点，找到属于指定表的节点，以及这些节点的所有相关节点。
 * @param tableName
 * @param nodes
 * @param links
 * @returns
 */
export function findRelatedNodes(
  nodeId: number,
  nodes: G_Node[],
  links: G_Link[],
  visited: Set<number>,
): G_Node[] {
  const directTargets = links.filter((link) => link.source === nodeId).map((link) => link.target);

  const relatedNodes = directTargets
    .filter((targetId) => !visited.has(targetId))
    .map((targetId) => {
      visited.add(targetId);
      return nodes.find((node) => node.id === targetId)!;
    });

  directTargets.forEach((targetId) => {
    if (!visited.has(targetId)) {
      relatedNodes.push(...findRelatedNodes(targetId, nodes, links, visited));
    }
  });

  return relatedNodes;
}

/**
 * 3. 求一个表的所有相关节点（重载）
 * 这个函数将遍历所有节点，找到属于指定表的节点，以及这些节点的所有相关节点。
 * @param tableName
 * @param nodes
 * @param links
 * @returns
 */
export function findAllRelatedNodesByTableBak(
  tableName: string,
  nodes: G_Node[],
  links: G_Link[],
): G_Node[] {
  const tableNodes = findNodesByTable(tableName, nodes);
  const visited = new Set<number>();
  const allRelatedNodes: G_Node[] = [];

  tableNodes.forEach((node) => {
    visited.add(node.id);
    allRelatedNodes.push(...findRelatedNodes(node.id, nodes, links, visited));
  });

  return allRelatedNodes;
}

/**
 * 4. 求一个表的所有相关链接
 * 这个函数将遍历所有链接，找到属于指定表的链接，以及这些链接的所有相关链接。
 * @param tableName
 * @param links
 * @returns
 */
export function findRelatedLinks(nodeId: number, links: G_Link[], visited: Set<number>): G_Link[] {
  const directLinks = links.filter((link) => link.source === nodeId);

  const relatedLinks = directLinks.filter((link) => !visited.has(link.target));

  directLinks.forEach((link) => {
    if (!visited.has(link.target)) {
      visited.add(link.target);
      relatedLinks.push(...findRelatedLinks(link.target, links, visited));
    }
  });

  return relatedLinks;
}

/**
 * 5. 求一个表的所有相关链接（重载）
 * 这个函数将遍历所有链接，找到属于指定表的链接，以及这些链接的所有相关链接。
 * @param tableName
 * @param nodes
 * @param links
 * @returns
 */
export function findAllRelatedLinksByTable(
  tableName: string,
  nodes: G_Node[],
  links: G_Link[],
): G_Link[] {
  const tableNodes = findNodesByTable(tableName, nodes);
  const visited = new Set<number>();
  const allRelatedLinks: G_Link[] = [];

  tableNodes.forEach((node) => {
    visited.add(node.id);
    allRelatedLinks.push(...findRelatedLinks(node.id, links, visited));
  });

  return allRelatedLinks;
}

export function calculateDepths(nodes: G_Node[]) {
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
        const predecessor = nodes.find((n) => n.id === predecessorId);
        if (predecessor) {
          return calculateDepth(predecessor) + 1;
        }
        return 0;
      });
      node.depth = Math.max(...predecessorDepths);
    }

    // console.log('Calculated depth for node:', node.id, 'is', node.depth);
    return node.depth;
  };

  nodes.forEach((node) => calculateDepth(node));
  // console.log('Calculated depths:', nodes_All.value);
}

export function calculatePredecessors(nodes: G_Node[], links: G_Link[]) {
  nodes.forEach((node) => {
    node.predecessors = getPredecessors(node.id, links);
  });
}

export function calculateLogicalOrder(nodes: G_Node[]) {
  const visited = new Set();
  const order = Array<G_Node>();

  const visit = (node) => {
    if (!visited.has(node.id)) {
      visited.add(node.id);
      node.predecessors.forEach((predecessorId) => {
        const predecessor = nodes.find((n) => n.id === predecessorId);
        if (predecessor) {
          visit(predecessor);
        }
      });
      order.push(node);
    }
  };

  nodes.forEach((node) => visit(node));

  order.forEach((node, index) => {
    node.order = index;
  });
}

export function getPredecessors(nodeId: number, links: G_Link[]): number[] {
  return links.filter((link) => link.targetDn === nodeId).map((link) => link.sourceDn);
}

export function findAllRelatedNodesByTable(
  tableName: string,
  nodes: G_Node[],
  links: G_Link[],
): G_Node[] {
  const tableNodes = nodes.filter((node) => node.tabName === tableName);
  console.log('tableNodes:(in findAllRelatedNodesByTable)', tableNodes);
  console.log('nodes:(in findAllRelatedNodesByTable)', nodes);
  console.log('nodes.length:(in findAllRelatedNodesByTable)', nodes.length);

  // if (tableName == 'QxPrjPotence') {
  //   console.log('tableNodes:(begin)', tableNodes);
  // }
  const visited = new Set<number>();
  const allRelatedNodes: G_Node[] = [...tableNodes]; // 包含表中的所有节点

  const dfs = (nodeId: number) => {
    visited.add(nodeId);
    console.log(visited);
    console.log('links', links);

    links.forEach((link) => {
      if (link.source === nodeId && !visited.has(link.target)) {
        const targetNode = nodes.find((n) => n.id === link.target);
        if (targetNode && !allRelatedNodes.includes(targetNode)) {
          console.log('targetNode:', targetNode);
          allRelatedNodes.push(targetNode);
        }
        dfs(link.target);
      }
      // else if (link.target === nodeId && !visited.has(link.source)) {
      //   const sourceNode = nodes.find((n) => n.id === link.source);
      //   if (sourceNode && !allRelatedNodes.includes(sourceNode)) {
      //     allRelatedNodes.push(sourceNode);
      //   }
      //   dfs(link.source);
      // }
    });
  };

  tableNodes.forEach((node) => {
    if (!visited.has(node.id)) {
      dfs(node.id);
    }
  });

  return allRelatedNodes;
}
