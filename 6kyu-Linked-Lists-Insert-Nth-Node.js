function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {

  const node = new Node(data);

  if (index === 0) {
    if (head) {
      node.next = head;
    }
    return node;
  }

  let prev;
  let curr = head;
  for (let i = 0; i < index; i++) {
    if (! curr) {
      throw new Error('ArgumentOutOfRangeException');
    }
    prev = curr;
    curr = curr.next;
  }
  prev.next = node;
  node.next = curr;
  return head;
}

// 1, 2, 3, 23
console.log(insertNth(buildOneTwoThree(), 3, 23).next.data);


function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((node, num) => push(node, num), null);
}
