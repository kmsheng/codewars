function findTheLocation(str) {
  const res = (str.match(/([A-Z][a-z]+ )*\b(Park|Preserve|Reservation|Reserve|Recreation Area)\b/) || [])[0] || '';
  return res.replace(/(The |At |In )/, '');
}
