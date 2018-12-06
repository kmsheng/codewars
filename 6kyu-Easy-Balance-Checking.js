function balance(book) {

  const data = book.split(/\n/)
    .map(line => line.replace(/[^a-zA-Z.\d\s]/g, ''))
    .map(line => line.trim())
    .filter(line => line)
    .reduce((obj, line) => {
      if (/^[\d.]+$/.test(line)) {
        const balance = parseFloat(line);
        obj.balance = balance;
        obj.currentBalance = balance;
        obj.res.push(`Original Balance: ${obj.balance.toFixed(2)}`);
      }
      const [matched, prefix, checkAmountStr] = line.match(/(\d+ [a-zA-Z]+ )([\d.]+)/) || [];
      if (matched) {
        obj.itemCount++;
        const checkAmount = parseFloat(checkAmountStr);
        obj.currentBalance -= checkAmount;
        obj.res.push(`${prefix}${checkAmount.toFixed(2)} Balance ${obj.currentBalance.toFixed(2)}`);
      }
      return obj;
    }, {res: [], balance: 0, currentBalance: 0, itemCount: 0});

  const totalExpense = data.balance - data.currentBalance;
  const avgExpense = totalExpense / data.itemCount;

  data.res.push(`Total expense  ${totalExpense.toFixed(2)}`);
  data.res.push(`Average expense  ${avgExpense.toFixed(2)}`);

  return data.res.join('\r\n');
}
