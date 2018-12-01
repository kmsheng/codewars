Array.prototype.sameStructureAs = function (other) {
  if (! isArray(other)) {
    return false;
  }
  const format = arr => JSON.stringify(arr).replace(/\d|".*"/g, '*');
  return format(this) === format(other);
};
