function findNextSquare(sq) {
  const side = Math.sqrt(sq);
  return Number.isInteger(side) ? Math.pow(side + 1, 2) : -1;
}
