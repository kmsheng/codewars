function createNumFunc(num, func) {
  return func ? func(num) : num;
}
function zero(func) {
  return createNumFunc(0, func);
}
function one(func) {
  return createNumFunc(1, func);
}
function two(func) {
  return createNumFunc(2, func);
}
function three(func) {
  return createNumFunc(3, func);
}
function four(func) {
  return createNumFunc(4, func);
}
function five(func) {
  return createNumFunc(5, func);
}
function six(func) {
  return createNumFunc(6, func);
}
function seven(func) {
  return createNumFunc(7, func);
}
function eight(func) {
  return createNumFunc(8, func);
}
function nine(func) {
  return createNumFunc(9, func);
}

function plus(second) {
  return first => first + second;
}
function minus(second) {
  return first => first - second;
}
function times(second) {
  return first => first * second;
}
function dividedBy(second) {
  return first => parseInt(first / second, 10);
}
