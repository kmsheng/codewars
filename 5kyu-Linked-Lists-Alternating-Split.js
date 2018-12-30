function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {

  if (head.next === null) {
    throw new Error('Single node list is invalid.');
  }
  const first = head;
  const second = head.next;

  (function recurse(head) {
    const node1 = head;
    const node2 = head.next;
    if (node1 && node2) {
      node1.next = node2.next;
      recurse(node2);
    }
  })(head);
  return new Context(first, second);
}
