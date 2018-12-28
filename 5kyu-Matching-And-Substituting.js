function change(s, prog, version) {
  console.log(s);
  let called = false;
  const regexp = /(Program title: .+\n)(Author: .+\n)(Corporation: .+\n)(Phone: \+1-\d{3}-\d{3}-\d{4}\n)(Date: .+\n)(Version: \d+\.\d+\n)(Level: .+)$/;
  const str = s.replace(regexp, (all, programTitle, author, corp, phone, date, versionStr) => {
    called = true;
    const replacedVersion = (versionStr === 'Version: 2.0\n') ? '2.0' : version;
    return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${replacedVersion}`;
  });
  if (! called) {
    return 'ERROR: VERSION or PHONE';
  }
  return str;
}
