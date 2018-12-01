function solution(list){
  if (list.length === 1) {
    return `${list[0]}`;
  }
  let startIndex = 0;
  let lines = [];

  const pushLine = (subArr, lines) => {
    if (subArr.length > 2) {
      lines.push(`${subArr[0]}-${subArr[subArr.length - 1]}`);
    }
    else {
      lines = [...lines, ...subArr];
    }
    return lines;
  };

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const current = list[i];
    if (prev + 1 !== current) {
      const subArr = list.slice(startIndex, i);
      lines = pushLine(subArr, lines);
      startIndex = i;
    }
  }
  const subArr = list.slice(startIndex);
  lines = pushLine(subArr, lines);
  return lines.join(',');
}
