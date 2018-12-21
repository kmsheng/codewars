function queueTime(customers, n) {

  const tills = Array.from({length: n})
    .map(() => 0);

  customers.forEach(customer => {
    tills.sort((a, b) => a - b);
    const [till] = tills;
    tills[0] = till + customer;
  });
  return Math.max(...tills);
}
