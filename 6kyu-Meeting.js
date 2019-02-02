function meeting(s) {
  return s.toUpperCase()
    .split(';')
    .map(line => line.split(':'))
    .sort(([first1, last1], [first2, last2]) => {
      if (last1.localeCompare(last2) === 0) {
        return first1.localeCompare(first2)
      }
      return last1.localeCompare(last2)
    })
    .map(([first, last]) => `(${last}, ${first})`)
    .join('')
}
