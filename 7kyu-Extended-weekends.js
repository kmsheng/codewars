function solve(startYear, endYear) {

  const monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const bigMonth = [1, 3, 5, 7, 8, 10, 12];
  const smallMonth = [4, 6, 9, 11];

  const getDays = (year, month) => {
    if (bigMonth.includes(month)) {
      return 31;
    }
    if (smallMonth.includes(month)) {
      return 30;
    }
    const isLeapYear = ! (year % (year % 100 ? 4 : 400));
    if (isLeapYear) {
      return 29;
    }
    return 28;
  };
  const months = [];
  let weekday = new Date(startYear, 0, 1).getDay();

  for (let y = startYear; y <= endYear; y++) {
    for (let m = 1; m <= 12; m++) {
      const days = getDays(y, m);
      if ((days === 31) && (weekday === 5)) {
        months.push(m - 1);
      }
      weekday += days;
      weekday %= 7;
    }
  }

  if (months.length === 0) {
    return ['', '', 0];
  }

  const start = monthAbbr[months[0]];
  const end = monthAbbr[months[months.length - 1]];
  return [start, end, months.length];
}

console.log(solve(1881,212438));
