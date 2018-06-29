function add() {
  return a + b
}

function subtract() {
  return a - b
}

function multiply() {
  return a * b
}

function divide() {
  return a / b
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  if (isNan(parseInt(n) === NaN) {
    return NaN
  } else {
  return parseInt(n, 10)
  }
}

function preserveDecimal(n) {
  return parseFloat(n)
}