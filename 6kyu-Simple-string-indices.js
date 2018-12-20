function solve(str, idx) {
  const heap = {};
  str.split('')
    .reduce((stack, char, i) => {
      if (char === '(') {
        stack.push(i);
      }
      if (char === ')') {
        const openIndex = stack.pop();
        heap[openIndex] = i;
      }
      return stack;
    }, []);
  return (idx in heap) ? heap[idx] : -1;
}
