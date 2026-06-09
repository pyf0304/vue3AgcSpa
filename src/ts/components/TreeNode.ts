export interface TreeNode {
  id: string;
  label: string;
  title?: string;
  type: string;
  expanded: boolean;
  children?: TreeNode[];
  parentNode: TreeNode | null;
}
