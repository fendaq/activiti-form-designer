/**
 * author: huzhengyi
 * desc: 加工渲染树，传人layoutTree 布局树，和需要修改的数据，支持增、删、改、查；
 */

export default class HandleLayoutTree {
  constructor(layoutTree = []) {
    this.layoutTree = layoutTree; // 直接修改引用，无需克隆
  }

  /**
   * 递归查找id对应的节点
   * @param  {[Array]} tree [节点树]
   * @param  {[Number]} id   [要查找的节点]
   * @return {[Object]}      [查找到的节点引用]
   */
  static findNode(tree, id) {
    if (!tree || !tree.length) {
      return null;
    }

    let targetNode = null;

    function loop(nextTree) {
      for (let i = 0; i < nextTree.length; i += 1) {
        const node = nextTree[i];
        const { children } = node;

        if (node.id === id) {
          targetNode = node;
          break;
        }

        if (children && children.length) {
          loop(children);
        }
      }
    }
    loop(tree);

    return targetNode;
  }

  /**
   * 根据id获取节点
   * @param  {[Number]} id [要查询节点的id]
   * @return {[Object]}    [当前节点]
   */
  getNode(id) {
    if (!this.layoutTree.length) return null;

    return HandleLayoutTree.findNode(this.layoutTree, id);
  }

  /**
   * 更新树中的某个节点
   * @param  {[Number]} id   [要更新的节点id]
   * @param  {[Object]} data [要更新的数据]
   * @return {[Object]}      [更新后的节点]
   */
  update(id, data) {
    const node = this.getNode(id);

    Object.assign(node, data);
    this.setGridProperty(node);

    return this.layoutTree;
  }

  /**
   * 树中插入新的节点
   * @param  {[Number]} id   [要插入的节点id]
   * @param  {[Object]} data [要插入的数据]
   * @return {[Object]}      [插入节点的父节点]
   */
  insert(id, data) {
    const node = this.getNode(id);

    if (node) {
      this.update(id, data);
      return this.layoutTree;
    }

    this.setGridProperty(data);

    const parentNode = this.getNode(data.parentId);

    // 如果父节点不存在，直接插入根节点
    if (!parentNode) {
      this.layoutTree.push(data);
      return this.layoutTree;
    }

    parentNode.children = parentNode.children || [];
    parentNode.children.push(data);

    return this.layoutTree;
  }

  /**
   * 根据组件id删除对应在树中的节点
   * @param  {[Number]} id   [要删除的节点id]
   * @return {[Undefined]}
   */
  delete(id) {
    const node = this.getNode(id);

    if (!node) {
      return null;
    }

    const parentNode = this.getNode(node.parentId);

    // 如果没有父节点，则说明在根节点中，直接从根节点删除
    if (!parentNode) {
      this.layoutTree.splice(this.layoutTree.indexOf(node), 1);
      return this.layoutTree;
    }

    const { children } = parentNode;

    children.splice(children.indexOf(node), 1);
    return this.layoutTree;
  }

  /**
   * 设置业务组件的grid属性
   * @param {[Object]} data [需要计算的组件]
   */
  setGridProperty(node) {
    // 布局组件不设置grid属性
    if (node.isLayout) {
      return null;
    }

    const { grid } = node;
    const parentNode = this.getNode(node.parentId);

    grid.parentType = parentNode.type;
    grid.span = 24 / (parentNode.col || 1);

    return grid;
  }

  /**
   * 根据给定ID获取其所有叶子节点，即非布局节点
   * @param {*} id
   */
  getAllLeafNodes(id) {
    if (!this.layoutTree.length) return null;

    const node = this.getNode(id);
    const result = [];
    if (!node.isLayout) {
      result.push(node);

      return result;
    }

    function loop(tree) {
      for (let i = 0; i < tree.length; i += 1) {
        const nextNode = tree[i];
        const { children } = nextNode;

        if (!nextNode.isLayout) {
          result.push(nextNode);
        }

        if (children && children.length) {
          loop(children);
        }
      }
    }
    loop(node.children || []);

    return result;
  }
}
