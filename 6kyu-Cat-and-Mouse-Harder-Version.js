function catMouse(str, j) {

  const catPos = str.indexOf('C');
  const mousePos = str.indexOf('m');
  const dogPos = str.indexOf('D');

  if ((catPos === -1) || (mousePos === -1) || (dogPos === -1)) {
    return 'boring without all three';
  }
  const inJumpDistance = Math.abs(catPos - mousePos) <= j;

  if (inJumpDistance && (catPos < dogPos) && (dogPos < mousePos)) {
    return 'Protected!';
  }
  if (inJumpDistance && (mousePos < dogPos) && (dogPos < catPos)) {
    return 'Protected!';
  }
  if (inJumpDistance) {
    return 'Caught!';
  }
  return 'Escaped!';
}
