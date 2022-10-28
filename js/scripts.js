function isNumber (input) {
  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
}

console.log(isNumber('words'));