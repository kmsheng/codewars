function phone(str, num) {

  const lines = str.split('\n')
    .filter(line => line.includes(num));

  if (lines.length === 0) {
    return `Error => Not found: ${num}`;
  }
  if (lines.length > 1) {
    return `Error => Too many people: ${num}`;
  }
  const [matchedLine] = lines;
  const [, name] = matchedLine.match(/<(.+)>/);
  const address = matchedLine.replace(`<${name}>`, '')
    .replace(`+${num}`, '')
    .replace('_', ' ')
    .replace(/[^a-zA-Z\-.\s\d]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}
