function findEvenIndex(arr) {

  const sum = (prev, next) => prev + next;

  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce(sum, 0);
    const rightSum = arr.slice(i + 1).reduce(sum, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
