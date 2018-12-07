function catalog(str, article) {
  const re = new RegExp(`<name>.*${article}.*</name>`);
  return str.split(/\n/)
    .filter(line => re.test(line))
    .map(line => {
      const r = new RegExp('<prod><name>(.+)</name><prx>(.+)</prx><qty>(.+)</qty></prod>');
      const [, name, price, quantity] = line.match(r);
      return `${name} > prx: $${price} qty: ${quantity}`;
    })
    .join(`\r\n`) || 'Nothing';
}
