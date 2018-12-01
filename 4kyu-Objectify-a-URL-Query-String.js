function convertQueryToMap(query) {
  if (query === '') {
    return {};
  }
  return query.split('&')
    .reduce((obj, line) => {

      const [keyPart, value] = line.split('=');
      const keys = keyPart.split('.');

      keys.reduce((o, key, index) => {
        if (index === keys.length - 1) {
          o[key] = decodeURIComponent(value);
          return o;
        }
        if (! (key in o)) {
          o[key] = {};
        }
        return o[key];
      }, obj);
      return obj;
    }, {});
}
