function findShort(s){
  return s.split(' ')
    .reduce((num, word) => word.length < num ? word.length : num, Infinity);
}
