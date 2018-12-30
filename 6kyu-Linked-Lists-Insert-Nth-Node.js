function Node(data, next) {
  this.data = data;
  this.next = next;
}

function insertNth(head, index, data) {
  if (index === 0) {
    return new Node(data, head);
  }
  if (head && (index > 0)) {
    head.next = insertNth(head.next, index - 1, data);
    return head;
  }
  throw new Error('InvalidArgumentException');
}
