function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA = null, listB = null) {
  if (listA === null) {
    return listB;
  }
  listA.next = append(listA.next, listB);
  return listA;
}
