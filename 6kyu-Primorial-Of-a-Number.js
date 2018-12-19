function numPrimorial(n) {
  let i = 1;
  let primes = [2, 3, 5];
  while (primes.length < n) {
    const num1 = 6 * i + 1;
    const num2 = 6 * i + 5;
    const newPrimes = [num1, num2].filter(num => primes.every(prime => num % prime !== 0));
    primes = primes.concat(newPrimes);
    i += 1;
  }
  primes.length = n;
  return primes.reduce((prev, curr) => prev * curr);
}
