function pointsNumber(radius) {
  let count = 0;
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      if ((Math.pow(x, 2) + Math.pow(y, 2)) <= (radius * radius)) {
        count++
      }
    }
  }
  return count;
}
