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
    i++;
  }
  return numArray;
}

function numberSwap(numberArray) {
  numberArray.forEach(function(element) {
    let currentNumArray = element.toString().split('');
    let has1 = false;
    let has2 = false;
    let has3 = false;
    currentNumArray.forEach(function(element2) {
      if (parseInt(element2) === 1) {
        has1 = true;
      } else if (parseInt(element2) === 2) {
        has2 = true;
      } else if (parseInt(element2) === 3) {
        has3 = true;
      }
    });
    if (has3) {
      numberArray[element] = '"Won\'t you be my neighbor?"';
    } else if (has2) {
      numberArray[element] = '"Boop!"';
    } else if (has1) {
      numberArray[element] = '"Beep!"';
    }
  });
  return numberArray.join(', ');
} 

console.log(numberSwap([0, 1, 2, 3, 4, 5]));
console.log(numberSwap([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));