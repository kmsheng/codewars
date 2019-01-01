function Node(data, next) {
  this.data = data === undefined ? null : data;
  this.next = next || null;
}

function next(node) {
  while (node && node.next && (node.data === node.next.data)) {
    node = node.next;
  }
  return node.next ? node.next : null;
}

function sortedIntersect(first, second) {
  if ((first === null) || (second === null)) {
    return null;
  }
  if (first.data === second.data) {
    return new Node(first.data, sortedIntersect(next(first), next(second)));
  }
  if (first.data < second.data) {
    return sortedIntersect(next(first), second);
  }
  return sortedIntersect(first, next(second));
}
