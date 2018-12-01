function humanReadable(s) {
  const hours = parseInt(s / 3600, 10);
  const minutes = parseInt((s % 3600) / 60, 10);
  const seconds = parseInt(s % 3600 % 60, 10);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
