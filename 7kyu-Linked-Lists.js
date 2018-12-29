function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (typeof node.next === 'undefined') {
    throw new Error(`Invalid Index`);
  }
  return (index === 0) ? node : getNth(node.next, index - 1);
}
