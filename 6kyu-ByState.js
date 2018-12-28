function byState(str) {
  const map = {
    AZ: 'Arizona',
    CA: 'California',
    ID: 'Idaho',
    IN: 'Indiana',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia'
  };
  const states = Object.keys(map);
  const data = str.split(/\n/)
    .reduce((obj, line) => {

      line = line.replace(/[^a-zA-Z\d\s]/g, '');
      const state = states.find(s => line.endsWith(s));

      if (! state) {
        return obj;
      }
      line = line.replace(new RegExp(`${state}$`), map[state]);

      if (typeof obj[state] === 'undefined') {
        obj[state] = [];
      }
      obj[state].push(line);
      return obj;
    }, {});

  return states.filter(state => data[state])
    .reduce((arr, state, i) => {
      const lines = data[state].sort()
        .map(line => `..... ${line}`);
      const leadingSpace = (i === 0) ? '' : ' ';
      arr.push(leadingSpace + map[state]);
      arr.push(...lines);
      return arr;
    }, [])
    .join('\r\n');
}
