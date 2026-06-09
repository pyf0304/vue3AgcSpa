/**
 * 有向边定义: parentId -> childId。
 */
export type MindMapEdge = {
  parentId: string;
  childId: string;
};

/**
 * 节点在画布上的包围盒。
 * x/y: 左上角坐标。
 * w/h: 宽高。
 */
export type MindMapNodeRect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

/** 节点可连接端口方位。 */
export type PortSide = 'top' | 'right' | 'bottom' | 'left';

/** 层线结果定义。 */
export type MindMapLayerGuideLine = {
  id: string;
  y: number;
  label: string;
};

/**
 * 依据目标点相对节点中心的方向，选择最合适的端口方位。
 * rect: 当前节点包围盒。
 * targetX/targetY: 目标点坐标（通常是另一节点中心）。
 */
export function getPortSideTowardTarget(
  rect: MindMapNodeRect,
  targetX: number,
  targetY: number,
): PortSide {
  const centerX = rect.x + rect.w / 2;
  const centerY = rect.y + rect.h / 2;
  const dx = targetX - centerX;
  const dy = targetY - centerY;

  if (Math.abs(dy) >= Math.abs(dx)) {
    return dy >= 0 ? 'bottom' : 'top';
  }
  return dx >= 0 ? 'right' : 'left';
}

/**
 * 根据端口方位，返回节点边缘上的连接点坐标。
 * rect: 节点包围盒。
 * side: 端口方位。
 */
export function getPortPoint(rect: MindMapNodeRect, side: PortSide): { x: number; y: number } {
  if (side === 'top') return { x: rect.x + rect.w / 2, y: rect.y };
  if (side === 'right') return { x: rect.x + rect.w, y: rect.y + rect.h / 2 };
  if (side === 'bottom') return { x: rect.x + rect.w / 2, y: rect.y + rect.h };
  return { x: rect.x, y: rect.y + rect.h / 2 };
}

/**
 * 将锚点沿节点外法线轻微外推，减少连线贴边重叠。
 * rect: 节点包围盒。
 * anchor: 原始锚点（通常在边缘上）。
 * amount: 外推像素值，默认 2。
 */
export function nudgeAnchorOutward(
  rect: MindMapNodeRect,
  anchor: { x: number; y: number },
  amount = 2,
): { x: number; y: number } {
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
}

/**
 * 生成从 start 到 end 的三次贝塞尔路径，并返回建议标签位置。
 * start/end: 连线起终点。
 * curvature: 曲率系数，越大弯曲越明显。
 */
export function buildBezierPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  curvature = 0.35,
): { pathD: string; labelX: number; labelY: number } {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy);
  const safeDistance = Math.max(1, distance);
  const unitX = dx / safeDistance;
  const unitY = dy / safeDistance;

  // 控制点距离按线段长度缩放，并限制上下界，保证短线不过弯、长线不过散。
  const controlDistance = Math.max(14, Math.min(90, safeDistance * curvature));
  const cp1 = {
    x: start.x + unitX * controlDistance,
    y: start.y + unitY * controlDistance,
  };
  const cp2 = {
    x: end.x - unitX * controlDistance,
    y: end.y - unitY * controlDistance,
  };

  return {
    pathD: `M ${start.x} ${start.y} C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${end.x} ${end.y}`,
    labelX: (start.x + end.x) / 2,
    labelY: (start.y + end.y) / 2 - 6,
  };
}

/**
 * 计算最长路径层号（1-based）。
 * nodeIds: 当前参与布局的节点集合。
 * edges: 边集合。
 *
 * 计算步骤:
 * 1) 建立 child -> parents 映射。
 * 2) 递归计算节点层号: 节点层 = max(父层) + 1。
 * 3) 用 memo 缓存已算结果，visiting 防止环导致无限递归。
 */
export function buildLongestPathLayerMap(
  nodeIds: Array<string>,
  edges: Array<MindMapEdge>,
): Map<string, number> {
  const nodeSet = new Set(nodeIds);
  const parentsMap = new Map<string, Array<string>>();

  nodeIds.forEach((id) => {
    parentsMap.set(id, []);
  });

  edges.forEach((edge) => {
    if (!nodeSet.has(edge.parentId) || !nodeSet.has(edge.childId)) return;
    parentsMap.get(edge.childId)?.push(edge.parentId);
  });

  const memo = new Map<string, number>();
  const visiting = new Set<string>();

  const getLevel = (nodeId: string): number => {
    const cached = memo.get(nodeId);
    if (cached != null) return cached;
    if (visiting.has(nodeId)) return 0;

    visiting.add(nodeId);
    const parents = parentsMap.get(nodeId) ?? [];
    let maxParentLevel = 0;

    parents.forEach((parentId) => {
      const parentLevel = getLevel(parentId);
      if (parentLevel > maxParentLevel) {
        maxParentLevel = parentLevel;
      }
    });

    visiting.delete(nodeId);

    const level = maxParentLevel + 1;
    memo.set(nodeId, level);
    return level;
  };

  const levelMap = new Map<string, number>();
  nodeIds.forEach((id) => {
    levelMap.set(id, Math.max(1, getLevel(id)));
  });
  return levelMap;
}

/**
 * 先按层号升序，再按名称排序。
 * nodeIds: 节点列表。
 * layerMap: 节点 -> 层号。
 * nameResolver: 节点名解析器（用于同层排序）。
 */
export function sortNodeIdsByLayer(
  nodeIds: Array<string>,
  layerMap: Map<string, number>,
  nameResolver: (nodeId: string) => string = (nodeId) => nodeId,
): Array<string> {
  return [...nodeIds].sort((a, b) => {
    const layerA = layerMap.get(a) ?? 1;
    const layerB = layerMap.get(b) ?? 1;
    if (layerA !== layerB) return layerA - layerB;
    return nameResolver(a).localeCompare(nameResolver(b), 'zh-CN');
  });
}

/**
 * 生成“节点 -> 层号”映射（缺省层号回退为 1）。
 */
export function buildNodeLayerNumberMap(
  nodeIds: Array<string>,
  layerMap: Map<string, number>,
): Map<string, number> {
  const map = new Map<string, number>();
  nodeIds.forEach((id) => {
    map.set(id, layerMap.get(id) ?? 1);
  });
  return map;
}

/**
 * 生成层间分隔线。
 * nodeIds: 当前可见节点。
 * layerMap: 节点层号。
 * nodeRectMap: 节点布局包围盒。
 * options.minGap: 最小层间距阈值；小于等于该值不画线。
 * options.labelFormatter: 层线标签格式化函数。
 *
 * 计算步骤:
 * 1) 按层聚合节点。
 * 2) 计算每层 top/bottom 边界。
 * 3) 对相邻层计算间隙 gap。
 * 4) 在 gap 中点绘制层线并生成标签。
 */
export function buildLayerGuideLines(
  nodeIds: Array<string>,
  layerMap: Map<string, number>,
  nodeRectMap: Record<string, MindMapNodeRect>,
  options?: {
    minGap?: number;
    labelFormatter?: (currentLevel: number, nextLevel: number) => string;
  },
): Array<MindMapLayerGuideLine> {
  if (nodeIds.length === 0) return [];

  const minGap = options?.minGap ?? 8;
  const labelFormatter =
    options?.labelFormatter ??
    ((currentLevel: number, nextLevel: number) => `第${currentLevel}-${nextLevel}层`);

  const levelGroups = new Map<number, Array<string>>();
  nodeIds.forEach((id) => {
    const level = layerMap.get(id) ?? 1;
    if (!levelGroups.has(level)) levelGroups.set(level, []);
    levelGroups.get(level)?.push(id);
  });

  const levelBounds = [...levelGroups.keys()]
    .sort((a, b) => a - b)
    .map((level) => {
      const rects = (levelGroups.get(level) ?? [])
        .map((id) => nodeRectMap[id])
        .filter((rect): rect is MindMapNodeRect => rect != null);

      if (rects.length === 0) return null;

      return {
        level,
        top: Math.min(...rects.map((rect) => rect.y)),
        bottom: Math.max(...rects.map((rect) => rect.y + rect.h)),
      };
    })
    .filter(
      (
        x,
      ): x is {
        level: number;
        top: number;
        bottom: number;
      } => x != null,
    );

  return levelBounds.slice(0, -1).flatMap((current, index) => {
    const next = levelBounds[index + 1];
    const gap = next.top - current.bottom;
    if (gap <= minGap) return [];

    return [
      {
        id: `layer-guide-${current.level}-${next.level}`,
        y: current.bottom + gap / 2,
        label: labelFormatter(current.level, next.level),
      },
    ];
  });
}
