function findMesh(word1, word2) {
  for (let i = word1.length; i >= 1; i--) {
    const slice1 = word1.slice(-i);
    const slice2 = word2.slice(0, i);
    if (slice1 === slice2) {
      return slice1;
    }
  }
  return null;
}

function wordMesh(arr) {
  let res = '';
  for (let i = 1; i < arr.length; i++) {
    const mesh = findMesh(arr[i - 1], arr[i]);
    if (! mesh) {
      return 'failed to mesh';
    }
    res += mesh;
  }
  return res;
}
