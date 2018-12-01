function drawRectangle(canvas, [x1, y1, x2, y2]) {
  for (let i = x1; i <= x2; i++) {
    const pattern = (i === x1 || i === x2) ? '*' : '-';
    canvas[y1][i] = pattern;
    canvas[y2][i] = pattern;
  }
  for (let i = y1 + 1; i < y2; i++) {
    const pattern = '|';
    canvas[i][x1] = pattern;
    canvas[i][x2] = pattern;
  }
  return canvas;
}
