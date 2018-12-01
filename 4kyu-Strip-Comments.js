function solution(input, markers) {
  return input.split(/\n/)
    .map(line => {
      const index = markers.reduce((prev, marker) => {
        const current = line.indexOf(marker);
        if (current === -1) {
          return prev;
        }
        return current < prev ? current : prev;
      }, Infinity);

      if (index !== -1 || index !== Infinity) {
        return line.substring(0, index).trim();
      }
      return line.trim();
    })
    .join('\n');
}
