function nbaCup(resultSheet, toFind) {

  if (toFind.length === 0) {
    return '';
  }

  const re = new RegExp(`${toFind} \\d+`);
  const lines = resultSheet.split(',')
    .filter(line => re.test(line));

  if (lines.length === 0) {
    return toFind + ':This team didn\'t play!';
  }

  const floatLines = lines.filter(line => /\d+\.\d+/.test(line));

  if (floatLines.length > 0) {
    return `Error(float number):${floatLines[0]}`;
  }

  const data = lines.reduce((obj, line) => {

      let [, team1, scoreStr1, team2, scoreStr2] = line.match(/([a-zA-Z\s\d]+) (\d+) ([a-zA-Z\s\d]+) (\d+)/);
      let score1 = parseInt(scoreStr1, 10);
      let score2 = parseInt(scoreStr2, 10);

      if (team2 === toFind) {
        [team1, team2] = [team2, team1];
        [score1, score2] = [score2, score1];
      }

      if (score1 > score2) {
        obj.W++;
        obj.Scored += score1;
        obj.Conceded += score2;
        obj.Points += 3;
      }
      else if (score1 < score2) {
        obj.L++;
        obj.Scored += score1;
        obj.Conceded += score2;
      }
      else {
        obj.D++;
        obj.Points += 1;
      }
      return obj;
    }, {W: 0, D: 0, L: 0, Scored: 0, Conceded: 0, Points: 0});

  return `${toFind}:W=${data.W};D=${data.D};` +
    `L=${data.L};Scored=${data.Scored};` +
    `Conceded=${data.Conceded};Points=${data.Points}`;
}
