function lcm(d) {
  const factors = [];
  let denominators = d.slice();
  let max = Math.max(...denominators);
  let devisor = 2;

  while (devisor <= max) {
    const isDevisable = denominators.filter(d => d % devisor === 0).length > 1;
    if (isDevisable) {
      max = Math.max(...denominators);
      denominators = denominators.map(d => (d % devisor === 0) ? d / devisor : d);
      factors.push(devisor);
      devisor = 2;
      continue;
    }
    devisor += 1;
  }
  const uniqueDenominators = Array.from(new Set(denominators));
  factors.push(...uniqueDenominators);
  return factors.reduce((a, b) => a * b);
}

function convertFrac(list) {
  const denominators = list.map(([_, denominators]) => denominators);
  const commonDenominator = lcm(denominators);
  return list.map(([numerator, denominator]) => {
    return `(${commonDenominator / denominator * numerator},${commonDenominator})`
  })
  .join('');
}
