function isLetter(char) {
  return /^[A-Za-z]$/.test(char);
}

function isRelated(char1, char2) {

  if (char1 === char2) {
    return true;
  }

  if (isLetter(char1) && isLetter(char2) &&
    (char1.toLowerCase() !== char2.toLowerCase())) {
    return false;
  }

  const status = [' ', '.', ':', '+', '#'];
  if (/[A-Z]/.test(char1)) {
    status.push(char1.toLowerCase());
    status.push(char1);
  }
  if (/[a-z]/.test(char1)) {
    status.push(char1);
  }
  const index1 = status.indexOf(char1);
  const index2 = status.indexOf(char2);

  if ((index1 === -1) || (index2 === -1)) {
    return false;
  }
  return status.indexOf(char1) >= status.indexOf(char2);
}

function generationLoss(orig, copy) {

  if (orig.length !== copy.length) {
    return false;
  }

  for (let i = 0; i < orig.length; i++) {
    const origRow = orig[i];
    const copyRow = copy[i];

    if (origRow.length !== copyRow.length) {
      return false;
    }

    for (let j = 0; j < origRow.length; j++) {
      const char1 = orig[i][j];
      const char2 = copy[i][j];
      if (! isRelated(char1, char2)) {
        return false;
      }
    }
  }
  return true;
}
