function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  if (first === null) {
    return second;
  }
  if (second === null) {
    return first;
  }
  let source = first;
  let target = second;
  while (source && target) {
    const nextTarget = source.next;
    source.next = target;
    source = target;
    target = nextTarget;
  }
  return first;
}
