function travel(r, zipcode) {
  const regexp = new RegExp(`^(\\d+)\\s+([^,]+)\\s+(${zipcode})$`);
  const lines = r.split(',')
    .map(line => line.match(regexp))
    .filter(line => line);

  return `${zipcode}:${lines.map(x => x[1])}/${lines.map(x => x[2])}`;
}
