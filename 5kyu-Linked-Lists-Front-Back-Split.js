function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function getLength(node) {
  let i = 0;
  for (i = 0; node; i++) {
    node = node.next;
  }
  return i;
}

function copy(a, b) {
  a.data = b.data;
  a.next = b.next;
}

function frontBackSplit(source, front, back) {
  const sourceLength = getLength(source);
  if (sourceLength < 2) {
    throw new Error('source length cannot be less than 2');
  }
  if (front === null) {
    throw new Error('front cannot be null');
  }
  const length = Math.ceil(sourceLength / 2) - 1;
  const f = source;
  let node = source;
  for (let i = 0; i < length; i++) {
    node = node.next;
  }
  const b = node.next;
  node.next = null;
  copy(front, f);
  copy(back, b);
}
