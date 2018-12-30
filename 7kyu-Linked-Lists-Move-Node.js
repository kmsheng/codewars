function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (! source) {
    throw new Error('Source is not present !');
  }
  const newSource = source.next;
  source.next = dest;
  return new Context(newSource, source);
}
