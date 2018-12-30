function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  let node = head;
  while (node && node.next) {
    if (node.data === node.next.data) {
      node.next = node.next.next;
      continue;
    }
    node = node.next;
  }
  return head;
}
