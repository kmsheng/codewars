function partlist(arr) {
  return arr.reduce((res, str, index) => {
    if (index === arr.length - 1) {
      return res;
    }
    const str1 = arr.slice(0, index + 1).join(' ');
    const str2 = arr.slice(index + 1).join(' ');
    res.push([str1, str2])
    return res;
  }, []);
}
