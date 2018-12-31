function Node(data, next) {
  this.data = data === undefined ? null : data;
  this.next = next || null;
}

function mergeSort(list) {
  if ((list === null) || (list.next === null)) {
    return list;
  }
  const head = new Node(null, list);
  let prev = head;
  let end = null;
  let curr = list;
  let next = list.next;

  while (curr !== end) {

    if (curr.data > next.data) {
      const rest = next.next;
      curr.next = rest;
      next.next = curr;
      [curr, next] = [next, curr];
      prev.next = curr;
    }
    prev = curr;
    curr = curr.next;
    next = next.next;

    if (next === end) {
      end = curr;
      prev = head;
      curr = head.next;
      next = curr.next;
    }
  }
  return head.next;
}
