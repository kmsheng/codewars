function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

function sortedInsert(head, data) {
  if ((! head) || (data < head.data)) {
    return new Node(data, head);
  }
  head.next = sortedInsert(head.next, data);
  return head;
}
