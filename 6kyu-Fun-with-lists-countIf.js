function countIf(head, p) {
  let count = 0;
  while (head) {
    if (p(head.data)) {
      count += 1;
    }
    head = head.next;
  }
  return count;
}
