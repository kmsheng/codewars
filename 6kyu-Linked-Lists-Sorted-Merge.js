function Node(data, next) {
  this.data = data === undefined ? null : data;
  this.next = next || null;
}

function sortedMerge(first, second) {
  if ((first === null) || (second === null)) {
    return first || second;
  }
  return first.data <= second.data ? new Node(first.data, sortedMerge(first.next, second)) :
    new Node(second.data, sortedMerge(first, second.next))
}
