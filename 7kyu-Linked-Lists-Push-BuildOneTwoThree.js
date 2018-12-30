function Node(data) {
  this.data = data;
  this.next = null;

  this.toString = () {
    if (this.next) {
      return `${this.data} -> ${this.next.toString()}`;
    }
    return `${this.data} -> null`;
  };
}

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((node, num) => push(node, num), null);
}
