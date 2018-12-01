function rgb(r, g, b){
  const pad = s => s.length === 1 ? '0' + s : s;
  const safe = (num) => {
    if (num > 255) {
      return 255;
    }
    if (num < 0) {
      return 0;
    }
    return num;
  };
  const red = safe(r);
  const green = safe(g);
  const blue = safe(b);
  return pad(red.toString(16)).toUpperCase()
    + pad(green.toString(16)).toUpperCase()
    + pad(blue.toString(16)).toUpperCase();
}
