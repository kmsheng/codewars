function meeting(arr) {
  const index = arr.indexOf('O');
  return (index === -1) ? 'None available!' : index;
}
