function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

function insertSort(head) {
  let newHead;
  while (head) {
    newHead = sortedInsert(newHead, head.data);
    head = head.next;
  }
  return newHead;
}
