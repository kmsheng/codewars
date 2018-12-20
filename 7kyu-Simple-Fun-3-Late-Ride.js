function lateRide(n) {
  const hours = parseInt(n / 60, 10);
  const mins = n % 60;
  const str = String(hours).padStart(2, "0") + String(mins).padStart(2, "0");
  return str.split("")
    .map(s => parseInt(s, 10))
    .reduce((prev, curr) => prev + curr);
}
