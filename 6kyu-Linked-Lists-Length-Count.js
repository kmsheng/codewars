function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let i = 0;
  while (head) {
    head = head.next;
    i++;
  }
  return i;
}

function count(head, data) {
  let count = 0;
  while (head) {
    if (data === head.data) {
      count += 1;
    }
    head = head.next;
  }
  return count;
}
