function isNumber (input) {
  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
}

function toNumberArray(number) {
  let num = number;
  let numArray = [];
  let i = 0;
  while (i <= num) {
    numArray.push(i);
  }
  return numArray;
}

console.log(toNumberArray(5));